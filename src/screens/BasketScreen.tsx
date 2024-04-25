import React from 'react';
import {View, Text, FlatList, Button, Image} from 'react-native';
// @ts-ignore
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {removeItem, updateQuantity} from '../store/cartSlice';
import {RootState} from '../store/store';

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
`;

const ItemContainer = styled.View`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

const ItemText = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333333;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;

const ButtonRemove = styled(Button)`
  background-color: #e74c3c;
  margin-top: 10px;
`;

const ButtonQuantity = styled(Button)`
  background-color: #3498db;
`;

const ItemImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const ItemTextNoData = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  align-items: center;
  color: #333333;
`;

const BasketScreen: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({id, quantity}));
  };

  const renderItem = ({item}: {item: any}) => (
    <ItemContainer>
      <ItemImage source={{uri: item.img}} resizeMode="contain" />
      <ItemText>{item.name}</ItemText>
      <ItemText>Price: ${item.price}</ItemText>
      <ItemText>Quantity: {item.quantity}</ItemText>
      <ButtonContainer>
        <ButtonRemove
          title="Remove"
          onPress={() => handleRemoveItem(item.id)}
          testID={`remove-button-${item.id}`} 
          color="#e74c3c"
        />
        <ButtonQuantity
          title="+ Quantity"
          onPress={() => handleUpdateQuantity(item.id, item.quantity + 1)}
        />
        <ButtonQuantity
          title="- Quantity"
          onPress={() => handleUpdateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity === 1}
        />
      </ButtonContainer>
    </ItemContainer>
  );

  return (
    <Container>
     {cartItems.length === 0 ? (
      <ItemTextNoData>There is no data in cart</ItemTextNoData>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </Container>
  );
};

export default BasketScreen;
