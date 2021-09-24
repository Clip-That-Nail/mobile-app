import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ListItem from './ListItem';

const SessionItem = props => {
  return (
    <ListItem onSelect={props.onSelect}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.session.createDate}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerColumn}>
          <Text style={styles.pet}>Pet: {props.session.pet.name}</Text>
        </View>
        <View style={styles.footerColumn}>
          <Text style={styles.status}>Status: finished</Text>
        </View>
      </View>
    </ListItem>
  );
};

const styles = StyleSheet.create({
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
  infoContainer: {
    marginLeft: 25,
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
