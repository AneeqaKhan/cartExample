import React, { Component, Fragment } from 'react';
import { Dimension } from '../../../ui-kit';
import { Logo } from '../../../commonComponents';
import { Formik } from 'formik'
import * as Yup from 'yup';
import { connect } from "react-redux";
import { ImagePath,IconPath } from '../../../utils/constants'
import * as actions from "../authActions";
import { bindActionCreators } from "redux";
import {
  TextFiledWithIcon,
  SubmitButton,
} from '../../../commonComponents';
import { View, Image, } from 'react-native';
import styles from '../authStyles';


const InnerForm = ({ formikProps: { values, handleSubmit, errors, setFieldValue, touched, setFieldTouched }, styles: { inputContainer, inputIcon, inputs, container } }) => (
  <Fragment>
    {/* to do   use Background Common Componnet to render this.props.children as wrapper*/}
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Logo
        logoStyle={{
          alignItems: 'flex-start',
        }}>
        <Image source={ImagePath.appLogo} style={{ opacity: 1 }} />
      </Logo>

      <TextFiledWithIcon
        inputContainerStyle={inputContainer}
        inputIconStyle={inputIcon}
        textInputStyle={inputs}
        value={values.email}
        errorMessage={touched.email && errors.email}
        onBlur={() => setFieldTouched('email')}
        onChangeText={value => setFieldValue('email', value)}
        placeholder={'Email Address'}
        iconPath={IconPath.email}
        keyboardType={'email-address'}
        underlineColorAndroid={'transparent'}
      />
      <TextFiledWithIcon
        inputContainerStyle={inputContainer}
        inputIconStyle={inputIcon}
        textInputStyle={inputs}
        value={values.password}
        errorMessage={touched.password && errors.password}
        onBlur={() => setFieldTouched('password')}
        onChangeText={value => setFieldValue('password', value)}
        placeholder={'Password'}
        secureTextEntry={true}
        iconPath={IconPath.lock} 
      />

      <View style={{ width: Dimension(788) }}>
        <SubmitButton handleSubmit={(value) => {
          handleSubmit(value);
        }} style={{ fontSize: Dimension(30) }} label={'Login'} />
      </View>

    </View>
  </Fragment>
  // to do constants label text
);

class Login extends Component {

  render() {
    debugger
    return (
      <Formik
        initialValues={{ email: '', password: '' }
        }
        onSubmit={this.props.actions.onLoginUser}
        validationSchema={
          Yup.object().shape({
            password: Yup.string().required("Required field"), // to do constants
            email: Yup.string()
              .email("Invalid email") // to do constants
              .required("Required Field"), //// to do constants
          })
        }
      >
        {formikProps => (
          <InnerForm formikProps={formikProps} styles={styles} />
        )}
      </Formik >
    );
  }
}
const screen = connect(
  state => ({
    store: state
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Login);

export { screen as Login }