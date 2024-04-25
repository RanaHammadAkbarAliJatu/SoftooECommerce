// ProductList.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import ProductList from '../../src/components/ProductList';

describe('ProductList Component', () => {
  test('renders correctly without errors', () => {
    // Render the ProductList component within a NavigationContainer
    const { getByTestId } = render(
      <NavigationContainer>
        <ProductList />
      </NavigationContainer>
    );

    // Assert that the ProductList component is rendered without errors
    expect(getByTestId('product-list')).toBeTruthy();
  });
});
