import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import SummaryRow from '../components/SummaryRow';
import { updateCompleteFrontRightPaw } from '../redux/actions/session';

const FrontRightPawSummaryScreen = (props) => {
  const { navigation } = props;

  const clawsData = useSelector(state => state.session.frontRightPaw.claws);
  const complete = useSelector(state => state.session.frontRightPaw.complete);

  const dispatch = useDispatch();

  const completePaw = useCallback(() => {
    // TODO: validation before setting complete
    dispatch(updateCompleteFrontRightPaw(!complete));
    navigation.navigate('FrontRightPawComplete');
  }, [dispatch, complete]);

  useEffect(() => {
    navigation.setParams({ complete: completePaw });
  }, [completePaw]);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.summaryList}>
        <SummaryRow clawText='CLAW 1' status={clawsData.firstClaw} />
        <SummaryRow clawText='CLAW 2' status={clawsData.secondClaw} />
        <SummaryRow clawText='CLAW 3' status={clawsData.thirdClaw} />
        <SummaryRow clawText='CLAW 4' status={clawsData.fourthClaw} />
        <SummaryRow clawText='DEWCLAW' status={clawsData.dewClaw} />
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navData) => {
  const complete = navData.navigation.getParam('complete');

  return {
    headerTitle: 'FRP - Summary',
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Finish paw" iconName='checkmark' onPress={complete} />
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