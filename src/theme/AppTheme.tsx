import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerCalculator: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  smallResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 15,
    paddingBottom: 15,
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '500',
  },
});
//9B9B9B
//#2D2D2D
//#FF9427
