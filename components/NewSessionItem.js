import React from 'react';
import { View, Text, Image, TouchableNativeFeedback, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Card from './Card';
import Colors from '../constants/Colors';

const NewSessionItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.petData.imageUri }} />
          <View style={styles.petType}>
            <MaterialCommunityIcons name={props.petData.type} size={18} color="rgba(0,0,0,0.6)" />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.petName}>{props.petData.name}</Text>
        </View>
        <View style={styles.lastDateContainer}>
          <Text style={styles.dateTitle}>Last clipping date</Text>
          <Text style={styles.date}>Monday 20/03/2021</Text>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Clip {props.petData.name}'s Nails</Text>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  actionContainer: {
    width: '100%',
    paddingTop: 10,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
  petType: {
    position: 'absolute',
    bottom: 3,
    right: 3,
    width: 20,
    height: 20,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#ccc',
    borderColor: Colors.primary,
    borderWidth: 1
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  lastDateContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  petName: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5
  },
  dateTitle: {
    color: '#666',
    fontSize: 12
  },
  date: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.greenLightColor,
    padding: 10,
    elevation: 2
  },
  buttonText: {
    fontSize: 15,
    color: 'black'
  },
});

export default NewSessionItem;
