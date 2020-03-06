import { http } from "../http";
import { endpoints } from "../endpoints";
const { REST_APIs } = endpoints;

const AccountController = {
  Register: (email, password, firstName) =>
    http.post(REST_APIs.Account.Register, {
      UserName: email,
      Email: email,
      FirstName: firstName,
      Password: password,
      PasswordConfirmation: password,
    }),
  Login: (email, password) =>
    http.post(REST_APIs.Account.Login, {
      UserName: email,
      Password: password
    }),
  ResetPassword: (userId, code, password, confirmPassword) =>
    http.post(REST_APIs.Account.ResetPassword, {
      userId,
      code,
      password,
      confirmPassword
    }),
  ChangePassword: (Password, NewPassword, ConfirmNewPassword) =>
    http.post(REST_APIs.Account.ChangePassword, {
      ConfirmNewPassword: ConfirmNewPassword,
      NewPassword: NewPassword,
      "Password": Password
    }),

  ForgotPassword: (email) =>
    http.post(REST_APIs.Account.ForgotPassword, {
      Email: email
    }),

};
export { AccountController };


