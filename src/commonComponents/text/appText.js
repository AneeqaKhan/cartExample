import React from 'react';
import colors from "../../themes/colors";
import { Text,StyleSheet} from 'react-native';
import {Dimension} from '../../ui-kit'


export const fontFamilies = {
  medium: 'IBMPlexSans-Medium',
  regular: 'IBMPlexSans-Regular',
};

const AppText = props => {
  return (
    <Text
      style={[
        styles.text,
        {fontFamily: fontFamilies[props.fontType] || fontFamilies.regular},
        props.style,
      ]}
      allowFontScaling={props.allowFontScaling}
      onPress={props.onPress}>
      {props.children}
    </Text>
  );
};

AppText.defaultProps = {
  allowFontScaling: false,
};

const styles = StyleSheet.create({
  text: {
    fontSize: Dimension(16),
    color: colors.primaryBGText,
  },
});
export {AppText};
