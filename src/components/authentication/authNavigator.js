import { createStackNavigator } from 'react-navigation-stack';
import {
  Login
} from "./views/login";

const AuthNavigator = createStackNavigator(
  {
    Login
  },
  {
    initialRouteName: "Login",
    headerMode: "none" 
  }
);

export default AuthNavigator;
