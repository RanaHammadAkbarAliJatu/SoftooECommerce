import React, {useEffect, useState} from 'react';
import {Text, ScrollView} from 'react-native';
// @ts-ignore
import styled from 'styled-components';
import {fetchProductById} from '../services/ProductService';
import Product from '../types/Product';
import AddToCartButton from '../components/AddToCartButton';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;
const Row = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
const Column = styled.View`
  flex: 1;
  flex-direction: column;
`;
const ProductImage = styled.Image`
  height: 600px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const ProductName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const ProductPrice = styled.Text`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
`;

const ProductDescription = styled.Text`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
`;

const ProductDetails: React.FC<any> = ({route}) => {
  const {productId} = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  console.log(product, productId, 'productId');
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(productId);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    loadProduct();
  }, [productId]);

  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={{flex: 1}}>
      <Container>
        <ProductImage source={{uri: product.img}} resizeMode="contain" />
        <ProductName>{product.name}</ProductName>

        <Row>
          <Column>
            <ProductDescription>Color: {product.colour}</ProductDescription>
            <ProductPrice>Price: ${product.price}</ProductPrice>
          </Column>
          <Column>
            <AddToCartButton />
          </Column>
        </Row>
      </Container>
    </ScrollView>
  );
};

export default ProductDetails;
