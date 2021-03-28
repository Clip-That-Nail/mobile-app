import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import SummaryRow from '../components/SummaryRow';

const FrontLeftPawSummaryScreen = (props) => {
  const frontLeftPawData = useSelector(state => state.session.frontLeftPaw);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.summaryList}>
        <SummaryRow clawText='CLAW 1' status={frontLeftPawData.firstClaw} />
        <SummaryRow clawText='CLAW 2' status={frontLeftPawData.secondClaw} />
        <SummaryRow clawText='CLAW 3' status={frontLeftPawData.thirdClaw} />
        <SummaryRow clawText='CLAW 4' status={frontLeftPawData.fourthClaw} />
        <SummaryRow clawText='DEWCLAW' status={frontLeftPawData.dewClaw} />
      </View>
    </ScrollView>
  );
};

FrontLeftPawSummaryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Front Left Paw - Summary',
    // headerLeft: () => { },
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Stop session" iconName='close' onPress={() => {
        navData.navigation.navigate('Home', {}, NavigationActions.navigate({ routeName: 'Home' }));
      }} />
      <Item title="Finish paw" iconName='checkmark' onPress={() => {
        navData.navigation.navigate({ routeName: 'FrontRightPaw' });
      }} />
    </HeaderButtons>)
  };
};

const styles = StyleSheet.create({
  screen: {
  },
  summaryList: {
    padding: 5,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 5,
  },
  listItemsContainer: {
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb'
  },
  itemText: {
    marginLeft: 10
  }
});

export default FrontLeftPawSummaryScreen;