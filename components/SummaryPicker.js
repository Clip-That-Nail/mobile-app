import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const pickerData = {
  outcome: {
    checked: [
      { key: 'not-selected', text: 'Select positive outcome' },
      { key: 'little-clip', text: 'Little clip' },
      { key: 'medium-clip', text: 'Medium clip' },
      { key: 'strong-clip', text: 'Strong clip' },
    ],
    bleeded: [
      { key: 'not-selected', text: 'Select bleeding outcome' },
      { key: 'little-bleed', text: 'Little bleed' },
      { key: 'medium-bleed', text: 'Medium bleed' },
      { key: 'strong-bleed', text: 'Strong bleed' },
    ],
    warning: [
      { key: 'not-selected', text: 'Select warning outcome' },
      { key: 'visible-quick', text: 'Visible quick' },
      { key: 'not-enough-nail', text: 'Not enough nail to clip' },
    ],
    disabled: [
      { key: 'skipped', text: 'SKIPPED' },
    ],
    unchecked: [
      { key: 'not-selected', text: 'Select default outcome' },
      { key: 'not-clipped', text: 'Not clipped' },
    ],
  },
  futureBehaviour: [
    { key: 'not-selected', text: 'Select future behavior' },
    { key: 'allow-to-cut', text: 'Allow to cut in next session' },
    { key: 'skip-1-session', text: 'Skip next session' },
    { key: 'skip-2-session', text: 'Skip next 2 sessions' },
    { key: 'skip-3-session', text: 'Skip next 3 sessions' },
  ],
}

const SummaryPicker = (props) => {
  const { value, type, status, onValueChange } = props;

  const pickerContent = () => {
    if (type === 'outcome') {
      if (pickerData.outcome.hasOwnProperty(status)) {
        return pickerData.outcome[status].map(item => <Picker.Item label={item.text} value={item.key} key={item.key} />);
      }
    } else if (type === 'futureBehaviour') {
      if (pickerData.hasOwnProperty(type)) {
        return pickerData.futureBehaviour.map(item => {
          return <Picker.Item label={item.text} value={item.key} key={item.key} />;
        });
      }
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