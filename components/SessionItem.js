import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import moment from 'moment';

import SummarySpecialIcon from './SummarySpecialIcon';
import ListItem from './ListItem';

const SessionItem = props => {
  return (
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
      <View style={styles.footer}>
      {/* TODO: move paws and claws to the swipe from left and add swipe from right buttons (delete + edit) */}
      {/* https://blog.logrocket.com/react-native-gesture-handler-swipe-long-press-and-more/ */}
      {/* https://blog.jscrambler.com/creating-swipeable-gestures-with-react-native-gesture-handler */}
      {/* https://medium.com/@mendes.develop/swipe-gestures-in-react-native-with-react-native-gesture-handler-9131ea2ebd9 */}
        <View style={styles.footerRow}>
          <View style={styles.paw}>
            <View style={styles.pawIcon}>
              <Ionicons name="paw" size={15} color='black' />
            </View>
            <Text style={styles.pawTitle}>FL</Text>
            <SummarySpecialIcon style={styles.claw} status={props.session.frontLeft.firstClaw.status} iconSize={15} boxSize={20} />
            <SummarySpecialIcon style={styles.claw} status={props.session.frontLeft.secondClaw.status} iconSize={15} boxSize={20} />
            <SummarySpecialIcon style={styles.claw} status={props.session.frontLeft.thirdClaw.status} iconSize={15} boxSize={20} />
            <SummarySpecialIcon style={styles.claw} status={props.session.frontLeft.fourthClaw.status} iconSize={15} boxSize={20} />
            <SummarySpecialIcon style={styles.claw} status={props.session.frontLeft.dewClaw.status} iconSize={15} boxSize={20} />
          </View>
          <View style={styles.paw}>
            <View style={styles.pawIcon}>
              <Ionicons name="paw" size={15} color='black' />
            </View>
            <Text style={styles.pawTitle}>FR</Text>
            <SummarySpecialIcon style={styles.claw} status={props.session.frontRight.firstClaw.status} iconSize={15} boxSize={20} />
            <SummarySpecialIcon style={styles.claw} status={props.session.frontRight.secondClaw.status} iconSize={15} boxSize={20} />
            <SummarySpecialIcon style={styles.claw} status={props.session.frontRight.thirdClaw.status} iconSize={15} boxSize={20} />
            <SummarySpecialIcon style={styles.claw} status={props.session.frontRight.fourthClaw.status} iconSize={15} boxSize={20} />
            <SummarySpecialIcon style={styles.claw} status={props.session.frontRight.dewClaw.status} iconSize={15} boxSize={20} />
          </View>
        </View>
        <View style={styles.footerRow}>
          <View style={styles.paw}>
            <View style={styles.pawIcon}>
              <Ionicons name="paw" size={15} color='black' />
            </View>
            <Text style={styles.pawTitle}>BL</Text>
            <SummarySpecialIcon style={styles.claw} status={props.session.backLeft.firstClaw.status} iconSize={15} boxSize={20} />
            <SummarySpecialIcon style={styles.claw} status={props.session.backLeft.secondClaw.status} iconSize={15} boxSize={20} />
            <SummarySpecialIcon style={styles.claw} status={props.session.backLeft.thirdClaw.status} iconSize={15} boxSize={20} />
            <SummarySpecialIcon style={styles.claw} status={props.session.backLeft.fourthClaw.status} iconSize={15} boxSize={20} />
          </View>
          <View style={styles.paw}>
            <View style={styles.pawIcon}>
              <Ionicons name="paw" size={15} color='black' />
            </View>
            <Text style={styles.pawTitle}>BR</Text>
            <SummarySpecialIcon style={styles.claw} status={props.session.backRight.firstClaw.status} iconSize={15} boxSize={20} />
            <SummarySpecialIcon style={styles.claw} status={props.session.backRight.secondClaw.status} iconSize={15} boxSize={20} />
            <SummarySpecialIcon style={styles.claw} status={props.session.backRight.thirdClaw.status} iconSize={15} boxSize={20} />
            <SummarySpecialIcon style={styles.claw} status={props.session.backRight.fourthClaw.status} iconSize={15} boxSize={20} />
          </View>
        </View>
      </View>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  sessionItem: {
    flexDirection: 'column',
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
