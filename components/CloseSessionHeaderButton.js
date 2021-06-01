import React from 'react';
import { Alert } from 'react-native';
import { Item } from 'react-navigation-header-buttons';
import { CommonActions } from '@react-navigation/native';

const CloseSessionHeaderButton = (props) => {
  return (
    <Item title="Stop session" iconName='close' onPress={() => {
      Alert.alert('Are you sure?', 'Do you really want to end this clipping session?', [
        { text: 'No', style: 'default' },
        {
          text: 'Yes', style: 'destructive', onPress: () => {
            props.navData.navigation.navigate('Home', {}, CommonActions.navigate('Home'))
          }
        }
      ]);
    }} />
  );
};

export default CloseSessionHeaderButton;