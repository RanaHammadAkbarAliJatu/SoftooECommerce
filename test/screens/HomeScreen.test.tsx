import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import HomeScreen from '../../src/screens/HomeScreen';

describe('HomeScreen Component', () => {
  test('renders ProductList component', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );

    const productList = getByTestId('product-list-HomeScreen');

    expect(productList).toBeTruthy();
  });
});
