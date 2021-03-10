import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton';
import SpecialCheckbox from '../components/SpecialCheckbox';

import Colors from '../constants/Colors';

const FrontLeftPawScreen = (props) => {
  const [toggleCheckBoxes, setToggleCheckBoxes] = useState({
    firstClaw: 'unchecked',
    secondClaw: false,
    thirdClaw: false,
    fourthClaw: false,
    dewClaw: false,
  });

  const handleOnCheckboxPress = (status) => {
    console.log(status);
    setToggleCheckBoxes({ ...toggleCheckBoxes, firstClaw: status })
  }

  return (
    <View style={styles.screen}>
      <View style={styles.checkboxes}>
        <View style={styles.checkboxContainer}>
          <SpecialCheckbox initialStatus={toggleCheckBoxes.firstClaw} onPress={handleOnCheckboxPress} />
          {/*<CheckBox
            disabled={false}
            value={toggleCheckBoxes.firstClaw}
            onValueChange={(newValue) => setToggleCheckBoxes({ ...toggleCheckBoxes, firstClaw: newValue })}
            tintColors={{ true: Colors.greenColor, false: Colors.greenColor }}
            checkedIcon="paw"
            style={{ ...styles.checkbox, marginTop: 50 }}
          />*/}
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBoxes.secondClaw}
            onValueChange={(newValue) => setToggleCheckBoxes({ ...toggleCheckBoxes, secondClaw: newValue })}
            tintColors={{ true: Colors.greenColor, false: Colors.greenColor }}
            style={styles.checkbox}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBoxes.thirdClaw}
            onValueChange={(newValue) => setToggleCheckBoxes({ ...toggleCheckBoxes, thirdClaw: newValue })}
            tintColors={{ true: Colors.greenColor, false: Colors.greenColor }}
            style={styles.checkbox}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBoxes.fourthClaw}
            onValueChange={(newValue) => setToggleCheckBoxes({ ...toggleCheckBoxes, fourthClaw: newValue })}
            tintColors={{ true: Colors.greenColor, false: Colors.greenColor }}
            style={{ ...styles.checkbox, marginTop: 50 }}
          />
        </View>
      </View>
      <View style={styles.paw}>
        <Ionicons name="paw" size={180} color={Colors.greenColor} />
      </View>
      <View style={styles.dewclawCheckboxContainer}>
        <Text>dewclaw</Text>
        <CheckBox
          disabled={false}
          value={toggleCheckBoxes.dewClaw}
          onValueChange={(newValue) => setToggleCheckBoxes({ ...toggleCheckBoxes, dewClaw: newValue })}
          tintColors={{ true: Colors.greenColor, false: Colors.greenColor }}
          style={{ ...styles.checkbox }}
        />
      </View>
      <View>
        <Button icon="check" mode="contained" color="green" onPress={() => props.navigation.navigate({ routeName: 'FrontLeftPawSummary' })}>
          Summarise
        </Button>
      </View>
    </View>
  );
};

FrontLeftPawScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Front Left Paw',
    headerLeft: () => { },
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Stop session" iconName='close' onPress={navData.navigation.getParam('save')} />
    </HeaderButtons>)
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkboxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    marginLeft: 15,
    marginRight: 15
  },
  dewclawCheckboxContainer: {
    alignItems: 'flex-end'
  },
  checkbox: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }]
  },
  paw: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
});

export default FrontLeftPawScreen;