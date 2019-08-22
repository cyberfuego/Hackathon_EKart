import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import HomeScreen from './HomeScreen';
import Dashboard from './dashboard';

export const MainNavigator = createStackNavigator({
    Dashboard: {screen: Dashboard},
    Home: {screen: HomeScreen},
    
  });