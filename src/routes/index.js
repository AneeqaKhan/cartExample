// import { createStackNavigator } from 'react-navigation-stack';
// import Products from '../components/cart/product';
// import Checkout from '../components/pages/Checkout';
// import Receipt from '../components/pages/Receipt';



// const HomeNavigator = createStackNavigator(
// 	{
// 		Products: { screen: Products },
// 		Checkout: { screen: Checkout },
// 		Receipt: { screen: Receipt }
// 	},
// 	{
// 		initialRouteName: "Products",
// 		headerMode: "none"
// 	}
// );

// export default HomeNavigator;


import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Products from '../components/pages/Products';
import Checkout from '../components/pages/Checkout';
import Receipt from '../components/pages/Receipt';
import FlatGrid from '../components/dashboard/dashboard'
import GridExp from '../components/dashboard/grid';
const NavStack = createStackNavigator(
    {
        //   Products:Products,
        //   Checkout:Checkout,
        //   Receipt: Receipt,
        //   FlatGrid:FlatGrid
        // Example:Example
        GridExp: GridExp

    },
    // {

    //     navigationOptions: {
    //         headerStyle: {
    //             backgroundColor: 'yellow',
    //         },
    //         headerTintColor: 'red'
    //     }
    // }
);



const app = createSwitchNavigator(
    {

        Home: NavStack
    },
    {
        initialRouteName: 'Home',
    },
);

const Route = createAppContainer(app);


export default Route;
