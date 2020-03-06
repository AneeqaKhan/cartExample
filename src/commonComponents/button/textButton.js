import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AppText} from '../text/appText';
import {Dimension} from '../../ui-kit';

const TextButton = ({onPress, text}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <AppText style={{fontSize: Dimension(30) ,color:'red'}}>{text}</AppText>
      </TouchableOpacity>
    </View>
  );
};

export {TextButton};
