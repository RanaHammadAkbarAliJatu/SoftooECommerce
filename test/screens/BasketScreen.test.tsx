import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 
import BasketScreen from '../../src/screens/BasketScreen';

const mockStore = configureStore([]);

describe('BasketScreen Component', () => {
  test('renders correctly with empty cart', () => {
    const store = mockStore({
      cart: {
        items: [],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <BasketScreen />
      </Provider>
    );

    expect(getByText('There is no data in cart')).toBeTruthy();
  });

  test('renders correctly with items in the cart', () => {
    const mockCartItems = [
      {
        id: 1,
        name: 'Product 1',
        price: 10,
        img: 'https://example.com/product1.jpg',
        quantity: 2,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 15,
        img: 'https://example.com/product2.jpg',
        quantity: 1,
      },
    ];

    const store = mockStore({
      cart: {
        items: mockCartItems,
      },
    });

    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <BasketScreen />
      </Provider>
    );

    mockCartItems.forEach((item) => {
      expect(getByText(item.name)).toBeTruthy();
      expect(getByText(`Price: $${item.price}`)).toBeTruthy();
      expect(getByText(`Quantity: ${item.quantity}`)).toBeTruthy();

      fireEvent.press(getByTestId(`remove-button-${item.id}`));
    });

    mockCartItems.forEach((item) => {
      expect(store.getActions()).toContainEqual({ type: 'cart/removeItem', payload: item.id });
    });
  });
});
