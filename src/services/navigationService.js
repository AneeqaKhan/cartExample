import { NavigationActions } from "react-navigation";

let _navigator;

function setNavigator(navigator) {
  _navigator = navigator;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

// Add other navigation functions that you need and export 

export const NavigationService = {
  navigate,
  setNavigator
};
