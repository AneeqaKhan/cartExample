import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// import AuthNavigator from '../components/authentication/authNavigator';
// import { AuthLoading } from "../components/authentication/views/authLoading";
// import HomeNavigator from "../components/home/homeNavigator";
import HomeNavigator from '../routes/index'

const app = createSwitchNavigator(
    {
      
        Home: HomeNavigator
    },
    {
        initialRouteName: 'Home',
    },
);

export default createAppContainer(app);
