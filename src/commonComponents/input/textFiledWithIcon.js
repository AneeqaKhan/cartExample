import React from 'react';
import { TextInput, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import { AppText } from '../text/appText';
import { Dimension } from '../../ui-kit';


const TextFiledWithIcon = ({
  textInputStyle,
  onChangeText,
  onBlur,
  value,
  errorMessage,
  placeholder,
  iconPath,
  keyboardType,
  underlineColorAndroid,
  inputContainerStyle,
  inputIconStyle,
  secureTextEntry = false,
}) => {
  return (
    <View style={inputContainerStyle}>
      <Image style={inputIconStyle} source={iconPath} />
      <TextInput
        style={textInputStyle}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={String(value)}
        onBlur={onBlur}
        maxLength={25}
        underlineColorAndroid={underlineColorAndroid}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      <AppText
        style={{ color:'red', fontSize: Dimension(25), bottom: Dimension(-35), right: 0, position: 'absolute' }}>
        {errorMessage}
      </AppText>
    </View>
  );
};

TextFiledWithIcon.propTypes = {
  onChangeText: PropTypes.func,
};
TextFiledWithIcon.defaultProps = {};

export { TextFiledWithIcon };
