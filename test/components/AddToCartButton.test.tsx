// AddToCartButton.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddToCartButton from '../../src/components/AddToCartButton';
import { useDispatch } from 'react-redux';

// Mock useDispatch hook
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('AddToCartButton Component', () => {
  test('calls addItem action when button is pressed', () => {
    const item = {
      id: 2,
      name: "product 1",
      price: 1000
    };
    
    // Mock useDispatch hook to provide a mock function
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    
    const { getByText } = render(<AddToCartButton item={item} />);
    
    // Find the button element by its text
    const buttonElement = getByText('Add to Cart');
    
    // Simulate a press event on the button
    fireEvent.press(buttonElement);
    
    // Assert that addItem action is called with the correct item
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'cart/addItem', payload: item });
  });
});
