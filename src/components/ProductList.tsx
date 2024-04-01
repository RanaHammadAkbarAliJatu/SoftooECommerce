import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
// @ts-ignore
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook
import {fetchProducts} from '../services/ProductService';
import AddToCartButton from './AddToCartButton';
import Product from '../types/Product';

const ItemContainer = styled.View`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #e9cece;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

const ImageContainer = styled.View`
  margin-right: 10px;
  border-radius: 5px;
  overflow: hidden;
`;
const Row = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;
const Column = styled.View`
  flex-direction: column;
  flex: 1;
`;
const ProductImage = styled.Image`
  width: 60px;
  height: 100px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const ProductName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin-bottom: 5px;
`;

const ProductPrice = styled.Text`
  font-size: 14px;
  color: #555;
`;

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigation = useNavigation(); // Get navigation object from hook

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    loadProducts();
  }, []);

  const handleProductPress = (productId: number) => {
    // Navigate to product details screen when item is pressed
    // @ts-ignore
    navigation.navigate('ProductDetails', {productId});
  };

  const renderProductItem = ({item}: {item: Product}) => {
    return (
      <TouchableOpacity onPress={() => handleProductPress(item.id)}>
        <ItemContainer>
          <ImageContainer>
            <ProductImage source={{uri: item.img}} resizeMode="contain" />
          </ImageContainer>
          <View style={{flex: 1}}>
            <ProductName>{item.name}</ProductName>
            <Row>
              <Column>
                <ProductPrice>${item.price}</ProductPrice>
                <ProductPrice>{item.colour}</ProductPrice>
              </Column>
              <Column>
                <AddToCartButton item={item} />
              </Column>
            </Row>
          </View>
        </ItemContainer>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default ProductList;
