import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderButton from '../../components/HeaderButton';
import SummaryRow from '../../components/SummaryRow';
import { validateFrontPawSummary } from '../../helpers/validation';
import { updateFrontLeftPawOutcomes, updateFrontLeftPawBehaviours, updateCompleteFrontLeftPaw } from '../../redux/actions/newSession';

const FrontLeftPawSummaryScreen = (props) => {
  const { navigation } = props;

  const petId = useSelector(state => state.newSession.pet.id);
  const disabilities = useSelector(state => state.pets.pets.find(pet => pet.id === petId).disabilities.frontLeft);
  const clawsData = useSelector(state => state.newSession.frontLeftPaw.claws);
  const complete = useSelector(state => state.newSession.frontLeftPaw.complete);

  const [outcomes, setOutcomes] = useState({
    firstClaw: disabilities.first === "empty" ? clawsData.firstClaw.outcome : disabilities.first,
    secondClaw: disabilities.second === "empty" ? clawsData.secondClaw.outcome : disabilities.second,
    thirdClaw: disabilities.third === "empty" ? clawsData.thirdClaw.outcome : disabilities.third,
    fourthClaw: disabilities.fourth === "empty" ? clawsData.fourthClaw.outcome : disabilities.fourth,
    dewClaw: disabilities.dew === "empty" ? clawsData.dewClaw.outcome : disabilities.dew,
  });
  const [behaviours, setBehaviours] = useState({
    firstClaw: disabilities.first === "empty" ? clawsData.firstClaw.behaviour : disabilities.first,
    secondClaw: disabilities.second === "empty" ? clawsData.secondClaw.behaviour : disabilities.second,
    thirdClaw: disabilities.third === "empty" ? clawsData.thirdClaw.behaviour : disabilities.third,
    fourthClaw: disabilities.fourth === "empty" ? clawsData.fourthClaw.behaviour : disabilities.fourth,
    dewClaw: disabilities.dew === "empty" ? clawsData.dewClaw.behaviour : disabilities.dew,
  });

  const dispatch = useDispatch();

  const completePaw = useCallback(async () => {
    try {
      // await validateFrontPawSummary(outcomes, behaviours);
      dispatch(updateCompleteFrontLeftPaw(!complete));
      navigation.navigate('FrontLeftPawComplete');
    } catch (err) {
      Alert.alert(`You can't complete this paw`, err.message, [
        { text: 'Okay', style: 'default' },
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
      <LinearGradient
        colors={['white', 'transparent']}
        locations={[0.05, 0.3]}
        style={styles.background}
      />
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
    backgroundColor: '#eff1f5',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
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