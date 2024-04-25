import React from 'react';
import {View} from 'react-native';
import ProductList from '../components/ProductList';

const HomeScreen: React.FC = () => {
  return (
    <View testID="product-list-HomeScreen">
      <ProductList />
    </View>
  );
};

export default HomeScreen;
