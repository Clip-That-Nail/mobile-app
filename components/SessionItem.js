import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import moment from 'moment';

import ListItem from './ListItem';
import CircleActionButton from './CircleActionButton';
import SessionStatusIcon from './SessionStatusIcon';
import { removeSession } from '../redux/actions/sessions';

const leftSwipeActions = (onPress) => {
  return (
    <CircleActionButton side="left" buttonSize={50} buttonType="edit" onPress={onPress}>
      {/* https://blog.logrocket.com/react-native-gesture-handler-swipe-long-press-and-more/ */}
      {/* https://blog.jscrambler.com/creating-swipeable-gestures-with-react-native-gesture-handler */}
      {/* https://medium.com/@mendes.develop/swipe-gestures-in-react-native-with-react-native-gesture-handler-9131ea2ebd9 */}
      <Entypo name="edit" size={26} color="white" />
    </CircleActionButton>
  );
};

const rightSwipeActions = (onPress) => {
  return (
    <CircleActionButton side="right" buttonSize={50} buttonType="remove" onPress={onPress}>
      <Ionicons name="trash-outline" size={26} color="white" />
    </CircleActionButton>
  );
};

const SessionItem = props => {
  const dispatch = useDispatch();

  const handleOnPressLeftAction = () => {
    // props.navigation.navigate('EditPet', { petData: props.petData });
  };

  const handleOnPressRightAction = () => {
    Alert.alert('Are you sure?', 'Do you really want to remove this session?', [
      { text: 'No', style: 'default' },
      {
        text: "Yes", style: 'destructive', onPress: () => {
          dispatch(removeSession(props.session.id));
          // TODO: find out how to close swiped item after deleting pet - some close() function?
        }
      }
    ]);
  };

  return (
    <Swipeable
      renderLeftActions={() => leftSwipeActions(handleOnPressLeftAction)}
      renderRightActions={() => rightSwipeActions(handleOnPressRightAction)}
    // onSwipeableRightOpen={swipeFromRightOpen}
    // onSwipeableLeftOpen={swipeFromLeftOpen}
    >
      <ListItem style={styles.sessionItem} onSelect={props.onSelect}>
        <View style={styles.details}>
          <Text style={styles.title}>{props.session.pet.name}</Text>
          <Text>{props.session.pet.type}</Text>
          {/* <Text>{moment(props.session.createDate).startOf('hour').fromNow()}</Text> */}
          {/* <Text>{moment(props.session.createDate).format("hh:mm Do MMM YYYY")}</Text> */}
          <Text>{moment(props.session.createDate).calendar()}</Text>
        </View>
        <View style={styles.status}>
          <SessionStatusIcon status={props.session.status} iconSize={40} />
          {/* TODO: add status icon for finished and button for unfinished */}
          {/* TODO: maybe unfinished session should go straight to the edit mode and finished to the details screen */}
          {/* TODO: check way to finish session - should it be possible to finish unfinished session? */}
        </View>
        {/* <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.session.createDate}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerColumn}>
            <Text style={styles.pet}>Pet: {props.session.pet.name}</Text>
          </View>
          <View style={styles.footerColumn}>
            <Text style={styles.status}>Status: {props.session.status}</Text>
          </View>
        </View> */}
      </ListItem>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  sessionItem: {
    flexDirection: 'row',
    flex: 1,
    padding: 20,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333',
  },
  status: {

  },
  titleContainer: {
    flex: 1,
    width: '100%',
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
});

export default SessionItem;
