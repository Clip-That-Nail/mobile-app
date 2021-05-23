import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import SummaryRow from '../components/SummaryRow';
import { updateFrontLeftPawOutcomes, updateFrontLeftPawBehaviours, updateCompleteFrontLeftPaw } from '../redux/actions/session';

const FrontLeftPawSummaryScreen = (props) => {
  const { navigation } = props;
  const clawsData = useSelector(state => state.session.frontLeftPaw.claws);
  const complete = useSelector(state => state.session.frontLeftPaw.complete);

  const [outcomes, setOutcomes] = useState({
    firstClaw: clawsData.firstClaw.outcome,
    secondClaw: clawsData.secondClaw.outcome,
    thirdClaw: clawsData.thirdClaw.outcome,
    fourthClaw: clawsData.fourthClaw.outcome,
    dewClaw: clawsData.dewClaw.outcome,
  });
  const [behaviours, setBehaviours] = useState({
    firstClaw: clawsData.firstClaw.behavior,
    secondClaw: clawsData.secondClaw.behavior,
    thirdClaw: clawsData.thirdClaw.behavior,
    fourthClaw: clawsData.fourthClaw.behavior,
    dewClaw: clawsData.dewClaw.behavior,
  });

  const dispatch = useDispatch();

  const completePaw = useCallback(() => {
    // TODO: validation before setting complete
    dispatch(updateCompleteFrontLeftPaw(!complete));
    navigation.navigate('FrontLeftPawComplete');
  }, [dispatch, complete]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Finish paw" iconName='checkmark' onPress={completePaw} />
      </HeaderButtons>)
    });
  }, [navigation, completePaw]);

  const handleOnOutcomeChange = (claw, outcome) => {
    setOutcomes({ ...outcomes, [claw]: outcome });
  };

  const handleOnBehaviourChange = (claw, behaviour) => {
    setBehaviours({ ...behaviours, [claw]: behaviour });
  };

  const handleOutcomesChange = useCallback(() => {
    dispatch(updateFrontLeftPawOutcomes(outcomes));
  }, [dispatch, outcomes]);

  useEffect(() => {
    handleOutcomesChange();
  }, [handleOutcomesChange]);

  const handleBehavioursChange = useCallback(() => {
    dispatch(updateFrontLeftPawBehaviours(behaviours));
  }, [dispatch, behaviours]);

  useEffect(() => {
    handleBehavioursChange();
  }, [handleBehavioursChange]);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.summaryList}>
        <SummaryRow
          claw={{ id: 'firstClaw', text: 'CLAW 1', ...clawsData.firstClaw }}
          onOutcomeChange={handleOnOutcomeChange}
          onBehaviourChange={handleOnBehaviourChange}
        />
        <SummaryRow
          claw={{ id: 'secondClaw', text: 'CLAW 2', ...clawsData.secondClaw }}
          onOutcomeChange={handleOnOutcomeChange}
          onBehaviourChange={handleOnBehaviourChange}
        />
        <SummaryRow
          claw={{ id: 'thirdClaw', text: 'CLAW 3', ...clawsData.thirdClaw }}
          onOutcomeChange={handleOnOutcomeChange}
          onBehaviourChange={handleOnBehaviourChange}
        />
        <SummaryRow
          claw={{ id: 'fourthClaw', text: 'CLAW 4', ...clawsData.fourthClaw }}
          onOutcomeChange={handleOnOutcomeChange}
          onBehaviourChange={handleOnBehaviourChange}
        />
        <SummaryRow
          claw={{ id: 'dewClaw', text: 'DEWCLAW', ...clawsData.dewClaw }}
          onOutcomeChange={handleOnOutcomeChange}
          onBehaviourChange={handleOnBehaviourChange}
        />
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'FLP - Summary',
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