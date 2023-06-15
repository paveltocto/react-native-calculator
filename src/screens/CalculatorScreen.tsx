import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {ButtonCalculator} from '../components/ButtonCalculator';
import {useCalculator} from '../hooks/UseCalculator';

export const CalculatorScreen = () => {
  const {
    previousNumber,
    number,
    onClear,
    onChangePositiveNegative,
    onDelete,
    onCalculateOperationDivide,
    onCalculateOperationMultiply,
    onCalculateOperationAdd,
    onCalculateOperationSubtract,
    onBuildNumber,
    onCalculate,
  } = useCalculator();

  return (
    <View style={styles.containerCalculator}>
      {previousNumber !== '0' && (
        <Text style={styles.smallResult}>{previousNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <ButtonCalculator
          onPress={onClear}
          color="#000000"
          bgColor="#9B9B9B"
          text="C"
        />
        <ButtonCalculator
          onPress={onChangePositiveNegative}
          color="#000000"
          bgColor="#9B9B9B"
          text="+/-"
        />
        <ButtonCalculator
          onPress={onDelete}
          color="#000000"
          bgColor="#9B9B9B"
          text="del"
        />
        <ButtonCalculator
          onPress={onCalculateOperationDivide}
          bgColor="#FF9427"
          text="/"
        />
      </View>
      <View style={styles.row}>
        <ButtonCalculator onPress={onBuildNumber} text="7" />
        <ButtonCalculator onPress={onBuildNumber} text="8" />
        <ButtonCalculator onPress={onBuildNumber} text="9" />
        <ButtonCalculator
          onPress={onCalculateOperationMultiply}
          bgColor="#FF9427"
          text="X"
        />
      </View>
      <View style={styles.row}>
        <ButtonCalculator onPress={onBuildNumber} text="4" />
        <ButtonCalculator onPress={onBuildNumber} text="5" />
        <ButtonCalculator onPress={onBuildNumber} text="6" />
        <ButtonCalculator
          onPress={onCalculateOperationSubtract}
          bgColor="#FF9427"
          text="-"
        />
      </View>
      <View style={styles.row}>
        <ButtonCalculator onPress={onBuildNumber} text="1" />
        <ButtonCalculator onPress={onBuildNumber} text="2" />
        <ButtonCalculator onPress={onBuildNumber} text="3" />
        <ButtonCalculator
          onPress={onCalculateOperationAdd}
          bgColor="#FF9427"
          text="+"
        />
      </View>
      <View style={styles.row}>
        <ButtonCalculator onPress={onBuildNumber} width={175} text="0" />
        <ButtonCalculator onPress={onBuildNumber} text="." />
        <ButtonCalculator onPress={onCalculate} bgColor="#FF9427" text="=" />
      </View>
    </View>
  );
};
