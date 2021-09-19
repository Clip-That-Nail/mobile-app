import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Picker } from '@react-native-picker/picker';
// import DateTimePicker from '@react-native-community/datetimepicker';

import HeaderButton from '../components/HeaderButton';
import CloseSessionHeaderButton from '../components/CloseSessionHeaderButton';

import Colors from '../constants/Colors';

const animals = [
  { name: 'Narcyz', key: 'narcyz' },
  { name: 'Laika', key: 'laika' }
]

const PreNewSessionScreen = (props) => {
  const [selectedAnimal, setSelectedAnimal] = useState(animals[0].key);
  // const [date, setDate] = useState(new Date(1598051730000));
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };


  //   <View style={styles.datePickerContainer}>
  //   <View>
  //     <Button onPress={showDatepicker} title="Show date picker!" />
  //   </View>
  //   <View>
  //     <Button onPress={showTimepicker} title="Show time picker!" />
  //   </View>
  //   {show && (
  //     <DateTimePicker
  //       testID="dateTimePicker"
  //       value={date}
  //       mode={mode}
  //       is24Hour={true}
  //       display="default"
  //       onChange={onChange}
  //     />
  //   )}
  // </View>

  return (
    <View style={styles.screen}>
      <View style={styles.conditionsContainer}>
        <Text>Select date of this clipping:</Text>


        <Text>Select your animal:</Text>
        <View style={styles.animalPickerContainer}>
          <Picker
            style={styles.animalPicker}
            selectedAnimal={selectedAnimal}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedAnimal(itemValue)
            }>
            {
              animals.map(item => <Picker.Item label={item.name} value={item.key} key={item.key} />)
            }
          </Picker>
        </View>
      </View>
      <View style={styles.startButtonContainer}>
        <Button disabled={selectedAnimal === ''} icon="paw" mode="contained" color={Colors.greenColor} contentStyle={styles.startButton}
          onPress={() => props.navigation.navigate('Paws')}>
          Start
      </Button>
      </View>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'New session conditions',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <CloseSessionHeaderButton onYesPress={() => {
            navData.navigation.navigate('Home', {}, CommonActions.navigate('Home'))
          }} />
    </HeaderButtons>),
    // headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
    //   <Item title="Paw Summary" iconName='checkmark' onPress={() => {
    //     navData.navigation.navigate('FrontLeftPawSummary');
    //   }} />
    // </HeaderButtons>)
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between'
  },
  conditionsContainer: {
    padding: 10,
  },
  startButtonContainer: {
    padding: 10
  },
  startButton: {
    padding: 15
  },
  datePickerContainer: {

  },
  datePicker: {

  },
  animalPickerContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 3,
    borderColor: '#bbb',
  },
  animalPicker: {
    height: 35,
    width: Dimensions.get('window').width - 20,
    color: 'black'
  }
});

export default PreNewSessionScreen;