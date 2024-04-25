// BasketScreen.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Import configureStore from redux-mock-store
import BasketScreen from '../../src/screens/BasketScreen';

// Create a mock store
const mockStore = configureStore([]);

describe('BasketScreen Component', () => {
  test('renders correctly with empty cart', () => {
    // Initialize a mock store with empty cart items
    const store = mockStore({
      cart: {
        items: [],
      },
    });

    // Render the BasketScreen component within a Provider with the mock store
    const { getByText } = render(
      <Provider store={store}>
        <BasketScreen />
      </Provider>
    );

    // Assert that the component renders the correct message for empty cart
    expect(getByText('There is no data in cart')).toBeTruthy();
  });

  test('renders correctly with items in the cart', () => {
    // Mock cart items
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

    // Initialize a mock store with cart items
    const store = mockStore({
      cart: {
        items: mockCartItems,
      },
    });

    // Render the BasketScreen component within a Provider with the mock store
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <BasketScreen />
      </Provider>
    );

    // Assert that each item in the cart is rendered correctly
    mockCartItems.forEach((item) => {
      expect(getByText(item.name)).toBeTruthy();
      expect(getByText(`Price: $${item.price}`)).toBeTruthy();
      expect(getByText(`Quantity: ${item.quantity}`)).toBeTruthy();

      // Simulate pressing the "Remove" button for each item
      fireEvent.press(getByTestId(`remove-button-${item.id}`));
    });

    // Assert that the "Remove" button for each item triggers the correct action
    mockCartItems.forEach((item) => {
      expect(store.getActions()).toContainEqual({ type: 'cart/removeItem', payload: item.id });
    });
  });
});
