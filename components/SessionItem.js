import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';

const SessionItem = props => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.sessionItem}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.session.createDate}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerColumn}>
          <Text style={styles.dog}>Dog: {props.session.dog.name}</Text>
        </View>
        <View style={styles.footerColumn}>
          <Text style={styles.status}>Status: finished</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sessionItem: {
    marginVertical: 7.5,
    marginHorizontal: 15,
    padding: 10,
    alignItems: 'center',
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 20
  },
  titleContainer: {
    flex: 1,
    width: '100%',
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 18
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerColumn: {

  },

  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  name: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  breed: {
    color: '#666',
    fontSize: 16
  }
});

export default SessionItem;
