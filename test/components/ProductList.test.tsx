import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import ProductList from '../../src/components/ProductList';

describe('ProductList Component', () => {
  test('renders correctly without errors', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <ProductList />
      </NavigationContainer>
    );

    expect(getByTestId('product-list')).toBeTruthy();
  });
});
