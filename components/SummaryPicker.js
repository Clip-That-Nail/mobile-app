import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { outcomes, behaviours } from '../helpers/sessionData';

const SummaryPicker = (props) => {
  const { value, type, status, onValueChange } = props;

  const pickerContent = () => {
    if (type === 'outcome') {
      if (outcomes.hasOwnProperty(status)) {
        return outcomes[status].map(item => <Picker.Item label={item.text} value={item.key} key={item.key} />);
      }
    } else if (type === 'futureBehaviour') {
      return behaviours.map(item => <Picker.Item label={item.text} value={item.key} key={item.key} />);
    }
  };

  return (
    <View style={styles.pickerContainer}>
      <Picker
        style={styles.picker}
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => {
          onValueChange(itemValue)
        }}>
        {
          pickerContent()
        }
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 3,
    borderColor: '#bbb',
  },
  picker: {
    height: 35,
    width: Dimensions.get('window').width - 20,
    color: 'black'
  }
});

export default SummaryPicker;