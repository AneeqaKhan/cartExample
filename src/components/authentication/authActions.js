import { AccountController } from "../../api/controllers/";
import { AsyncStorage } from "react-native";
import { StorageKeys } from '../../utils/constants'
import { Toaster } from '../../services/toaster';
import {Message}  from '../../utils/messages';
import { NavigationService } from "../../services/navigationService";

export const onLoginUser = (values) => async dispatch => {
  const { email, password } = values;
  AccountController.Login(email, password)
    .then(response => {
      debugger
      const {status,data} = response;
      if (status === 200) {
        AsyncStorage.setItem(StorageKeys.AccessToken, data);
        NavigationService.navigate("Home"); // To do Constants
      } else {
        Toaster.error(Message.Validation.incorrectEmailOrPassword);
      }
    })
    .catch(error => {
      if (error.message == 'Network Error') { // To do Constants
        Toaster.error('No Internet Connection');
      }
      else {
        Toaster.error(Message.apiResponse.genericError);
      }
    });
};