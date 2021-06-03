import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import SummaryRow from '../components/SummaryRow';
import { validateFrontPawSummary } from '../helpers/validation';
import { updateFrontRightPawOutcomes, updateFrontRightPawBehaviours, updateCompleteFrontRightPaw } from '../redux/actions/session';

const FrontRightPawSummaryScreen = (props) => {
  const { navigation } = props;
  const clawsData = useSelector(state => state.session.frontRightPaw.claws);
  const complete = useSelector(state => state.session.frontRightPaw.complete);

  const [outcomes, setOutcomes] = useState({
    firstClaw: clawsData.firstClaw.outcome,
    secondClaw: clawsData.secondClaw.outcome,
    thirdClaw: clawsData.thirdClaw.outcome,
    fourthClaw: clawsData.fourthClaw.outcome,
    dewClaw: clawsData.dewClaw.outcome,
  });
  const [behaviours, setBehaviours] = useState({
    firstClaw: clawsData.firstClaw.behaviour,
    secondClaw: clawsData.secondClaw.behaviour,
    thirdClaw: clawsData.thirdClaw.behaviour,
    fourthClaw: clawsData.fourthClaw.behaviour,
    dewClaw: clawsData.dewClaw.behaviour,
  });

  const dispatch = useDispatch();

  const completePaw = useCallback(async () => {
    try {
      await validateFrontPawSummary(outcomes, behaviours);
      dispatch(updateCompleteFrontRightPaw(!complete));
      navigation.navigate('FrontRightPawComplete');
    } catch (err) {
      Alert.alert(`You can't complete this paw`, err.message, [
        { text: 'Okay', style: 'default' },
        // {
        //   text: 'Yes', style: 'destructive', onPress: props.onYesPress
        // }
      ]);
    }
  }, [dispatch, complete, outcomes, behaviours]);

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
    dispatch(updateFrontRightPawOutcomes(outcomes));
  }, [dispatch, outcomes]);

  useEffect(() => {
    handleOutcomesChange();
  }, [handleOutcomesChange]);

  const handleBehavioursChange = useCallback(() => {
    dispatch(updateFrontRightPawBehaviours(behaviours));
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
    headerTitle: 'FRP - Summary',
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