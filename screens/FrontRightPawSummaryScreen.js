import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import SummaryRow from '../components/SummaryRow';

const FrontRightPawSummaryScreen = (props) => {
  const frontRightPawData = useSelector(state => state.session.frontRightPaw);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.summaryList}>
        <SummaryRow clawText='CLAW 1' status={frontRightPawData.firstClaw} />
        <SummaryRow clawText='CLAW 2' status={frontRightPawData.secondClaw} />
        <SummaryRow clawText='CLAW 3' status={frontRightPawData.thirdClaw} />
        <SummaryRow clawText='CLAW 4' status={frontRightPawData.fourthClaw} />
        <SummaryRow clawText='DEWCLAW' status={frontRightPawData.dewClaw} />
      </View>
    </ScrollView>
  );
};

FrontRightPawSummaryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'FRP - Summary',
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Finish paw" iconName='checkmark' onPress={() => {
        navData.navigation.navigate({ routeName: 'BackLeftPaw' });
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

export default FrontRightPawSummaryScreen;