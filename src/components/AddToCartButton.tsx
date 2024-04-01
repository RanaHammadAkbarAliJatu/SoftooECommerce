// AddToCartButton.tsx
import React from 'react';
// @ts-ignore
import styled from 'styled-components';

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
  onPress?: () => void;
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({onPress}) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>Add to Cart</ButtonText>
    </ButtonContainer>
  );
};

export default AddToCartButton;
