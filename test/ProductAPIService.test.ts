
import { fetchProducts, fetchProductById } from '../src/services/ProductService';
import { fetchData } from '../src/utils/api';

jest.mock('../src/utils/api');

describe('ProductService', () => {
  describe('fetchProducts', () => {
    it('fetches products successfully', async () => {
      const mockProducts = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
      ];
      (fetchData as jest.Mock).mockResolvedValue(mockProducts);

      const products = await fetchProducts();

      expect(fetchData).toHaveBeenCalledWith('products');

      expect(products).toEqual(mockProducts);
    });

    it('throws an error when fetching products fails', async () => {
      (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

      await expect(fetchProducts()).rejects.toThrow('Failed to fetch products');
    });
  });

  describe('fetchProductById', () => {
    it('fetches a product by id successfully', async () => {
      const mockProduct = { id: 1, name: 'Product 1', price: 10 };
      (fetchData as jest.Mock).mockResolvedValue(mockProduct);

      const productId = 1;
      const product = await fetchProductById(productId);

      expect(fetchData).toHaveBeenCalledWith(`products/${productId}`);

      expect(product).toEqual(mockProduct);
    });

    it('throws an error when fetching product by id fails', async () => {
      (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

      const productId = 1;
      await expect(fetchProductById(productId)).rejects.toThrow('Error fetching product');
    });
  });
});
