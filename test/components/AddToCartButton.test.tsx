import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddToCartButton from '../../src/components/AddToCartButton';
import { useDispatch } from 'react-redux';

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
    
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    
    const { getByText } = render(<AddToCartButton item={item} />);
    
    const buttonElement = getByText('Add to Cart');
    
    fireEvent.press(buttonElement);
    
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'cart/addItem', payload: item });
  });
});
