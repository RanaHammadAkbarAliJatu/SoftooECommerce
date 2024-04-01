// test/ProductService.test.ts

import { fetchProducts, fetchProductById } from '../src/services/ProductService';
import { fetchData } from '../src/utils/api';

// Mock the fetchData function
jest.mock('../src/utils/api');

describe('ProductService', () => {
  describe('fetchProducts', () => {
    it('fetches products successfully', async () => {
      // Mock the response of fetchData
      const mockProducts = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
      ];
      (fetchData as jest.Mock).mockResolvedValue(mockProducts);

      // Call fetchProducts function
      const products = await fetchProducts();

      // Check if fetchData was called with the correct argument
      expect(fetchData).toHaveBeenCalledWith('products');

      // Check if fetchProducts returns the expected products
      expect(products).toEqual(mockProducts);
    });

    it('throws an error when fetching products fails', async () => {
      // Mock fetchData to throw an error
      (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

      // Call fetchProducts function and expect it to throw an error
      await expect(fetchProducts()).rejects.toThrow('Failed to fetch products');
    });
  });

  describe('fetchProductById', () => {
    it('fetches a product by id successfully', async () => {
      // Mock the response of fetchData
      const mockProduct = { id: 1, name: 'Product 1', price: 10 };
      (fetchData as jest.Mock).mockResolvedValue(mockProduct);

      // Call fetchProductById function
      const productId = 1;
      const product = await fetchProductById(productId);

      // Check if fetchData was called with the correct argument
      expect(fetchData).toHaveBeenCalledWith(`products/${productId}`);

      // Check if fetchProductById returns the expected product
      expect(product).toEqual(mockProduct);
    });

    it('throws an error when fetching product by id fails', async () => {
      // Mock fetchData to throw an error
      (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

      // Call fetchProductById function and expect it to throw an error
      const productId = 1;
      await expect(fetchProductById(productId)).rejects.toThrow('Error fetching product');
    });
  });
});
