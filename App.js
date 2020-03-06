// import React from 'react';
// import { Provider } from 'react-redux';
// import { Root } from 'native-base'; // Custom Theming To do 
// import Router from './src/approuter/router';
// import configureStore from './src/store/configureStore';
// import { NavigationService } from './src/services/';
// import Spinner from './src/components/common/spinner';
// import { OfflineBanner } from './src/components/common/offlineBanner';
// import theme from ''; to do theme
// export default class App extends React.Component {
//   render() {
//     const store = configureStore();
//     return (
//       <Root>
//         {/* <StyleProvider style={theme()}> */}
//         <Provider store={store}>
//           <Router ref={nav => NavigationService.setNavigator(nav)} />
//           <Spinner loaderColor={'Red'} cancelable sizeLoader="large" />
//           <OfflineBanner />
//         </Provider>
//         {/* </StyleProvider> */}
//       </Root>
//     );
//   }
// }
import { Root } from 'native-base'; // Custom Theming To do 

import React, { Component } from 'react';
import { NavigationService } from './src/services/';

import { Provider } from 'react-redux';
import Router from './src/approuter/router';
import Route from './src/routes'
import store from './src/redux/store';

import HomeNavigator from './src/routes';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <Route ref={nav => NavigationService.setNavigator(nav)}/>

      </Provider>
    );
  }
}




