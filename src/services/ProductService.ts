import {fetchData} from '../utils/api';
import Product from '../types/Product';

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetchData('products');
    return response;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};
const fetchProductById = async (productId: number): Promise<Product> => {
  try {
    const response = await fetchData(`products/${productId}`);
    return response;
  } catch (error) {
    throw new Error('Error fetching product');
  }
};
export {fetchProducts, fetchProductById};
