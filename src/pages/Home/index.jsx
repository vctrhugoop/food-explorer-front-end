import { useEffect, useState } from 'react';
import {
  HeroContainer,
  HeroContent,
  HomeContainer,
  SectionTitle,
} from './styles';

// import { Card } from '../../components/Card';
import { api } from '../../services/api';

import heroImageDesktop from '../../assets/hero-img-desktop.png';
import heroImageMobile from '../../assets/hero-img-mobile.png';

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
          <picture>
            <source srcset={heroImageDesktop} media='(min-width: 768px)' />
            <img src={heroImageMobile} />
          </picture>

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </HeroContent>
      </HeroContainer>

      <SectionTitle>Pratos principais</SectionTitle>
      {dishes
        .filter((dish) => dish.category === 'prato principal')
        .map((dish) => (
          <h2>{dish.name}</h2>
        ))}
      <SectionTitle>Sobremesa</SectionTitle>
      {dishes
        .filter((dish) => dish.category === 'sobremesas')
        .map((dish) => (
          <h2>{dish.name}</h2>
        ))}
      <SectionTitle>Bebidas</SectionTitle>
      {dishes
        .filter((dish) => dish.category === 'bebidas')
        .map((dish) => (
          <h2>{dish.name}</h2>
        ))}

      {/* <Card {...{ dishes }} /> */}
    </HomeContainer>
  );
}
