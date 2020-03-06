export const HOST_URL = "";

const v1_0 = `${HOST_URL}/api/1.0/`;

export const endpoints = {
  REST_APIs: {
    Account: {
      Login: `${v1_0}User/Login`,
      Register: `${v1_0}User/Register`,
      ForgotPassword: `${v1_0}User/forgot-password`,
      ChangePassword: `${v1_0}User/change-password`,
    }
  }
};
