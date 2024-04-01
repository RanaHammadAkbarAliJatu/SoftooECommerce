import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native'; // Import TouchableOpacity
import HomeScreen from '../screens/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import BasketScreen from '../screens/BasketScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
  </Stack.Navigator>
);

// Custom tab button component to span the full width of the tab
const CustomTabButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{flex: 1, backgroundColor: '#6d9e65'}}
    onPress={onPress}>
    {children}
  </TouchableOpacity>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBarOptions={{
          labelStyle: {
            fontSize: 20,
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#ccc',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarButton: (props) => <CustomTabButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Basket"
          component={BasketScreen}
          options={{
            tabBarButton: (props) => <CustomTabButton {...props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
