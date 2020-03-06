import React, { Component } from 'react';

import {
	Image,
	TouchableOpacity
} from 'react-native';
import {NavigationService} from '../../services/navigationService'
const logoImage = require('../../../resources/Images/eco-logo.png');

class Logo extends Component {

  goHome = () => {
    debugger
      NavigationService.navigate('Checkout')

  }
  render() {
    return (
      <TouchableOpacity onPress={this.goHome}>
          <Image source={logoImage} style={{width:32, height:32}}/>
      </TouchableOpacity>
    );
  }
}


export default Logo;