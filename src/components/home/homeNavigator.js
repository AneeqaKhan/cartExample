import { createStackNavigator } from 'react-navigation-stack';
import 
  Home
 from "./views/home";

const HomeNavigator = createStackNavigator(
  {
    Home
  },
  {
    initialRouteName: "Home",
    headerMode: "none" 
  }
);

export default HomeNavigator;
