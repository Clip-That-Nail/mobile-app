import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
// import moment from 'moment';

import ListItem from './ListItem';
import CircleActionButton from './CircleActionButton';

const leftSwipeActions = (onPress) => {
  return (
    <CircleActionButton side="left" buttonSize={50} buttonType="edit" onPress={onPress}>
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
const swipeFromLeftOpen = () => {
  alert('Swipe from left');
};
const swipeFromRightOpen = () => {
  alert('Swipe from right');
};

const SessionItem = props => {

  const handleOnPressLeftAction = () => {
    alert('edit');
  };

  const handleOnPressRightAction = () => {
    alert('remove');
  };

  return (
    <Swipeable
      renderLeftActions={() => leftSwipeActions(handleOnPressLeftAction)}
      renderRightActions={() => rightSwipeActions(handleOnPressRightAction)}
    // onSwipeableRightOpen={swipeFromRightOpen}
    // onSwipeableLeftOpen={swipeFromLeftOpen}
    >
      <ListItem style={styles.sessionItem} onSelect={props.onSelect}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.session.createDate}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerColumn}>
            <Text style={styles.pet}>Pet: {props.session.pet.name}</Text>
          </View>
          <View style={styles.footerColumn}>
            <Text style={styles.status}>Status: {props.session.status}</Text>
          </View>
        </View>
        {/* TODO: move paws and claws to the swipe from left and add swipe from right buttons (delete + edit) */}
        {/* https://blog.logrocket.com/react-native-gesture-handler-swipe-long-press-and-more/ */}
        {/* https://blog.jscrambler.com/creating-swipeable-gestures-with-react-native-gesture-handler */}
        {/* https://medium.com/@mendes.develop/swipe-gestures-in-react-native-with-react-native-gesture-handler-9131ea2ebd9 */}
        {/* <View style={styles.footer}>
          <View style={styles.footerRow}>
            <View style={styles.paw}>
              <View style={styles.pawIcon}>
                <Ionicons name="paw" size={15} color='black' />
              </View>
              <Text style={styles.pawTitle}>FL</Text>
              <SummarySpecialIcon style={styles.claw} status={props.session.frontLeft.first.status} iconSize={15} boxSize={20} />
              <SummarySpecialIcon style={styles.claw} status={props.session.frontLeft.second.status} iconSize={15} boxSize={20} />
              <SummarySpecialIcon style={styles.claw} status={props.session.frontLeft.third.status} iconSize={15} boxSize={20} />
              <SummarySpecialIcon style={styles.claw} status={props.session.frontLeft.fourth.status} iconSize={15} boxSize={20} />
              <SummarySpecialIcon style={styles.claw} status={props.session.frontLeft.dew.status} iconSize={15} boxSize={20} />
            </View>
            <View style={styles.paw}>
              <View style={styles.pawIcon}>
                <Ionicons name="paw" size={15} color='black' />
              </View>
              <Text style={styles.pawTitle}>FR</Text>
              <SummarySpecialIcon style={styles.claw} status={props.session.frontRight.first.status} iconSize={15} boxSize={20} />
              <SummarySpecialIcon style={styles.claw} status={props.session.frontRight.second.status} iconSize={15} boxSize={20} />
              <SummarySpecialIcon style={styles.claw} status={props.session.frontRight.third.status} iconSize={15} boxSize={20} />
              <SummarySpecialIcon style={styles.claw} status={props.session.frontRight.fourth.status} iconSize={15} boxSize={20} />
              <SummarySpecialIcon style={styles.claw} status={props.session.frontRight.dew.status} iconSize={15} boxSize={20} />
            </View>
          </View>
          <View style={styles.footerRow}>
            <View style={styles.paw}>
              <View style={styles.pawIcon}>
                <Ionicons name="paw" size={15} color='black' />
              </View>
              <Text style={styles.pawTitle}>BL</Text>
              <SummarySpecialIcon style={styles.claw} status={props.session.backLeft.first.status} iconSize={15} boxSize={20} />
              <SummarySpecialIcon style={styles.claw} status={props.session.backLeft.second.status} iconSize={15} boxSize={20} />
              <SummarySpecialIcon style={styles.claw} status={props.session.backLeft.third.status} iconSize={15} boxSize={20} />
              <SummarySpecialIcon style={styles.claw} status={props.session.backLeft.fourth.status} iconSize={15} boxSize={20} />
            </View>
            <View style={styles.paw}>
              <View style={styles.pawIcon}>
                <Ionicons name="paw" size={15} color='black' />
              </View>
              <Text style={styles.pawTitle}>BR</Text>
              <SummarySpecialIcon style={styles.claw} status={props.session.backRight.first.status} iconSize={15} boxSize={20} />
              <SummarySpecialIcon style={styles.claw} status={props.session.backRight.second.status} iconSize={15} boxSize={20} />
              <SummarySpecialIcon style={styles.claw} status={props.session.backRight.third.status} iconSize={15} boxSize={20} />
              <SummarySpecialIcon style={styles.claw} status={props.session.backRight.fourth.status} iconSize={15} boxSize={20} />
            </View>
          </View>
        </View> */}
      </ListItem>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  sessionItem: {
    flexDirection: 'column',
    flex: 1,
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
  paw: {
    width: '50%',
    flexDirection: 'row',
    paddingTop: 5
  },
  pawIcon: {
    paddingRight: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pawTitle: {
    paddingRight: 5,
  },
  claw: {
    marginRight: 2
  },
  footer: {
    // flexDirection: 'row',
    //   alignItems: 'center',
    //   justifyContent: 'space-between',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
  // infoContainer: {
  //   marginLeft: 25,
  //   justifyContent: 'center',
  //   alignItems: 'flex-start'
  // },
});

export default SessionItem;
