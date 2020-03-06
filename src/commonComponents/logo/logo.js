import React from 'react';
import {View, StyleSheet} from 'react-native';
import Dimension from '../../ui-kit/Dimension';
const Logo = ({children, logoStyle}) => {
  return <View style={[styles.logo, logoStyle]}>{children}</View>;
};

export {Logo};

const styles = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Dimension(58),
    paddingBottom: Dimension(10),
  },
});
