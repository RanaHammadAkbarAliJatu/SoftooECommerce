import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 
import ProductDetails from '../../src/screens/ProductDetailsScreen';

const mockStore = configureStore([]);

describe('ProductDetails Component', () => {
  test('renders loading text when product is not available', () => {
    const routeParams = { productId: 1 };

    const { getByText } = render(
      <Provider store={mockStore({})}>
        <ProductDetails route={{ params: routeParams }} />
      </Provider>
    );

    const loadingText = getByText('Loading...');
    expect(loadingText).toBeTruthy();
  });
});
