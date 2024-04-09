import { useEffect, useState } from 'react';
import { HomeContainer } from './styles';

import { Card } from '../../components/Card';
import { api } from '../../services/api';

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`);

      setDishes(response.data);
    }

    fetchDishes();
  }, [[search]]);

  return (
    <HomeContainer>
      <Card {...{ dishes }} />
    </HomeContainer>
  );
}
