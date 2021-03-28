import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import SummaryRow from '../components/SummaryRow';

const BackLeftPawSummaryScreen = (props) => {
  const clawsData = useSelector(state => state.session.backLeftPaw.claws);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.summaryList}>
        <SummaryRow clawText='CLAW 1' status={clawsData.firstClaw} />
        <SummaryRow clawText='CLAW 2' status={clawsData.secondClaw} />
        <SummaryRow clawText='CLAW 3' status={clawsData.thirdClaw} />
        <SummaryRow clawText='CLAW 4' status={clawsData.fourthClaw} />
      </View>
    </ScrollView>
  );
};

BackLeftPawSummaryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'BLP - Summary',
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Finish paw" iconName='checkmark' onPress={() => {
        navData.navigation.navigate({ routeName: 'BackRightPaw' });
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

export default BackLeftPawSummaryScreen;