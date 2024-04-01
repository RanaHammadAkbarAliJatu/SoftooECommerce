// AddToCartButton.tsx
import React from 'react';
// @ts-ignore
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import Product from '../types/Product';

const ButtonContainer = styled.TouchableOpacity`
  background-color: #4a881f;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

type AddToCartButtonProps = {
  item: Product;
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({item}) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem(item));
  };
  return (
    <ButtonContainer onPress={handleAddToCart}>
      <ButtonText>Add to Cart</ButtonText>
    </ButtonContainer>
  );
};

export default AddToCartButton;
