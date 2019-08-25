/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */


import HomeScreen from './src/HomeScreen'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Dashboard from './src/dashboard';

const MainNavigator = createStackNavigator({
  DashBoardScreen: Dashboard,
  HomeScreen: HomeScreen
  },
  {
    initialRouteName: 'DashBoardScreen'
  }
)

export default createAppContainer(MainNavigator) ;



