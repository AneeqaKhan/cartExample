import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import colors from '../../themes/colors';
import {AppText} from '../../commonComponents/text/appText';

const SubmitButton = props => {
  const {label, disabledState, handleSubmit, style} = props;
  return (
    <View>
      <View style={[styles.buttonStyle, styles.buttonBackgroundStyle]} />
      <Button
        onPress={handleSubmit}
        disabled={disabledState}
        style={styles.buttonStyle}>
        <AppText fontType={"medium"} style={style}>{label}</AppText>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.primaryButton,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 25,
    width: '87%',
    paddingTop: 0,
    paddingBottom: 0,
    height: 60,
  },
  buttonBackgroundStyle: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderColor: colors.white,
    borderWidth: 2,
  },
});
export {SubmitButton};
