import { Dimensions } from 'react-native';
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;


export const StorageKeys = {
  AccessToken: 'access_token',
};

export const ScreenKeys = {
  Home: 'Home'
}

export const Constants = {
  NetworkError: 'Network Error'
}
export const ImagePath = {
  appLogo: require('../../resources/Images/applogo.png'),
};

export const IconPath = {
  email: require('../../resources/icons/ic_email.png'),
  lock: require('../../resources/icons/ic_password.png'),

};