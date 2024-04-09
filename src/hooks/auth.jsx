import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setDate] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user));
      localStorage.setItem('@foodexplorer:token', token);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setDate({ user, token });
    } catch (error) {
      if (error.response) {
        //TODO: add toast message
        alert(error.response.data.message);
      } else {
        alert('Não foi possível entrar.');
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@foodexplorer:token');
    const user = localStorage.getItem('@foodexplorer:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setDate({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
