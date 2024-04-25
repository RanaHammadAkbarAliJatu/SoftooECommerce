// ProductDetailsScreen.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Import redux-mock-store
import ProductDetails from '../../src/screens/ProductDetailsScreen';

// Create a mock store
const mockStore = configureStore([]);

describe('ProductDetails Component', () => {
  test('renders loading text when product is not available', () => {
    // Mock navigation route params
    const routeParams = { productId: 1 }; // Mock productId

    // Render the ProductDetails component within a Provider with the mock store
    const { getByText } = render(
      <Provider store={mockStore({})}>
        <ProductDetails route={{ params: routeParams }} />
      </Provider>
    );

    // Check if the "Loading..." text is rendered
    const loadingText = getByText('Loading...');
    expect(loadingText).toBeTruthy();
  });
});
