import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import HomeScreen from '../../src/screens/HomeScreen';

describe('HomeScreen Component', () => {
  test('renders ProductList component', () => {
    // Render the HomeScreen component within NavigationContainer
    const { getByTestId } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );

    // Find the ProductList component by its test ID
    const productList = getByTestId('product-list-HomeScreen');

    // Assert that the ProductList component is rendered
    expect(productList).toBeTruthy();
  });
});
