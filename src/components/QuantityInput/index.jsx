import { Minus, Plus } from '@phosphor-icons/react';
import { useState } from 'react';
import { QuantityInputContainer } from './styles';

export function QuantityInput() {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    setQuantity(quantity - 1);
  }

  const quantityFormat = String(quantity).padStart(2, '0');

  return (
    <QuantityInputContainer>
      <button onClick={decreaseQuantity} disabled={quantity <= 1}>
        <Minus size={24} />
      </button>
      <input type='number' readOnly value={quantityFormat} />
      <button onClick={increaseQuantity}>
        <Plus size={24} />
      </button>
    </QuantityInputContainer>
  );
}
