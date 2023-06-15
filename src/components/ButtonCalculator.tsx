import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import React from 'react';

type Props = {
  text: string;
  bgColor?: string;
  color?: string;
  width?: number | string;
  onPress: (numberText: string) => void;
} & typeof defaultProps;

const defaultProps = {
  color: 'white',
  bgColor: '#2D2D2D',
  width: 80,
};

export const ButtonCalculator = ({
  text,
  bgColor,
  color,
  width,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(text)}>
      <View style={{...styles.button, backgroundColor: bgColor, width}}>
        <Text style={{...styles.buttonText, color}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

ButtonCalculator.defaultProps = defaultProps;
