import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderButton from '../../components/HeaderButton';
import SummaryRow from '../../components/SummaryRow';
import { validateFrontPawSummary } from '../../helpers/validation';
import { updateBackRightPawOutcomes, updateBackRightPawBehaviours, updateCompleteBackRightPaw } from '../../redux/actions/newSession';

const BackRightPawSummaryScreen = (props) => {
  const { navigation } = props;

  const petId = useSelector(state => state.newSession.pet.id);
  const disabilities = useSelector(state => state.pets.pets.find(pet => pet.id === petId)?.disabilities?.backRight);
  const clawsData = useSelector(state => state.newSession.backRight.claws);
  const complete = useSelector(state => state.newSession.backRight.complete);

  const [outcomes, setOutcomes] = useState({
    first: disabilities?.first === 'empty' ? clawsData.first.outcome : disabilities?.first,
    second: disabilities?.second === 'empty' ? clawsData.second.outcome : disabilities?.second,
    third: disabilities?.third === 'empty' ? clawsData.third.outcome : disabilities?.third,
    fourth: disabilities?.fourth === 'empty' ? clawsData.fourth.outcome : disabilities?.fourth,
  });
  const [behaviours, setBehaviours] = useState({
    first: disabilities?.first === 'empty' ? clawsData.first.behaviour : disabilities?.first,
    second: disabilities?.second === 'empty' ? clawsData.second.behaviour : disabilities?.second,
    third: disabilities?.third === 'empty' ? clawsData.third.behaviour : disabilities?.third,
    fourth: disabilities?.fourth === 'empty' ? clawsData.fourth.behaviour : disabilities?.fourth,
  });

  const dispatch = useDispatch();

  const completePaw = useCallback(async () => {
    try {
      // await validateFrontPawSummary(outcomes, behaviours);
      dispatch(updateCompleteBackRightPaw(!complete));
      navigation.navigate('BackRightPawComplete');
    } catch (err) {
      Alert.alert(`You can't complete this paw`, err.message, [
        { text: 'Okay', style: 'default' },
      ]);
    }
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
    dispatch(updateBackRightPawOutcomes(outcomes));
  }, [dispatch, outcomes]);

  useEffect(() => {
    handleOutcomesChange();
  }, [handleOutcomesChange]);

  const handleBehavioursChange = useCallback(() => {
    dispatch(updateBackRightPawBehaviours(behaviours));
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
          claw={{ id: 'first', text: 'CLAW 1', ...clawsData.first }}
          onOutcomeChange={handleOnOutcomeChange}
          onBehaviourChange={handleOnBehaviourChange}
        />
        <SummaryRow
          claw={{ id: 'second', text: 'CLAW 2', ...clawsData.second }}
          onOutcomeChange={handleOnOutcomeChange}
          onBehaviourChange={handleOnBehaviourChange}
        />
        <SummaryRow
          claw={{ id: 'third', text: 'CLAW 3', ...clawsData.third }}
          onOutcomeChange={handleOnOutcomeChange}
          onBehaviourChange={handleOnBehaviourChange}
        />
        <SummaryRow
          claw={{ id: 'fourth', text: 'CLAW 4', ...clawsData.fourth }}
          onOutcomeChange={handleOnOutcomeChange}
          onBehaviourChange={handleOnBehaviourChange}
        />
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'BRP - Summary',
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

export default BackRightPawSummaryScreen;