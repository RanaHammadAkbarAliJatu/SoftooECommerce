import React from 'react';
import {View, Text} from 'react-native';
import BasketItem from '../types/BasketItem';

interface Props {
  items: BasketItem[];
}

const Basket: React.FC<Props> = ({items}) => {
  return (
    <View>
      <Text>Basket</Text>
      {items.map((item) => (
        <View key={item.product.id}>
          <Text>{item.product.name}</Text>
          <Text>Quantity: {item.quantity}</Text>
        </View>
      ))}
    </View>
  );
};

export default Basket;
