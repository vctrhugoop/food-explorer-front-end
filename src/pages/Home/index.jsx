import { useEffect, useState } from 'react';
import { HeroContainer, HeroContent, HomeContainer } from './styles';

import { api } from '../../services/api';

import heroImg from '../../assets/hero-img.png';

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
      <HeroContainer>
        <HeroContent>
          <img src={heroImg} />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </HeroContent>
      </HeroContainer>

      {/* <Card {...{ dishes }} /> */}
    </HomeContainer>
  );
}
