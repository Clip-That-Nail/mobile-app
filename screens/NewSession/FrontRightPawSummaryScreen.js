import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderButton from '../../components/HeaderButton';
import SummaryRow from '../../components/SummaryRow';
import { validateFrontPawSummary } from '../../helpers/validation';
import { updateFrontRightPawOutcomes, updateFrontRightPawBehaviours, updateCompleteFrontRightPaw } from '../../redux/actions/newSession';

const FrontRightPawSummaryScreen = (props) => {
  const { navigation } = props;

  const petId = useSelector(state => state.newSession.pet.id);
  const disabilities = useSelector(state => state.pets.pets.find(pet => pet.id === petId)?.disabilities?.frontRight);
  const clawsData = useSelector(state => state.newSession.frontRight.claws);
  const complete = useSelector(state => state.newSession.frontRight.complete);

  const [outcomes, setOutcomes] = useState({
    first: disabilities?.first === 'empty' ? clawsData.first.outcome : disabilities?.first,
    second: disabilities?.second === 'empty' ? clawsData.second.outcome : disabilities?.second,
    third: disabilities?.third === 'empty' ? clawsData.third.outcome : disabilities?.third,
    fourth: disabilities?.fourth === 'empty' ? clawsData.fourth.outcome : disabilities?.fourth,
    dew: disabilities?.dew === 'empty' ? clawsData.dew.outcome : disabilities?.dew,
  });
  const [behaviours, setBehaviours] = useState({
    first: disabilities?.first === 'empty' ? clawsData.first.behaviour : disabilities?.first,
    second: disabilities?.second === 'empty' ? clawsData.second.behaviour : disabilities?.second,
    third: disabilities?.third === 'empty' ? clawsData.third.behaviour : disabilities?.third,
    fourth: disabilities?.fourth === 'empty' ? clawsData.fourth.behaviour : disabilities?.fourth,
    dew: disabilities?.dew === 'empty' ? clawsData.dew.behaviour : disabilities?.dew,
  });

  const dispatch = useDispatch();

  const completePaw = useCallback(async () => {
    try {
      // await validateFrontPawSummary(outcomes, behaviours);
      dispatch(updateCompleteFrontRightPaw(!complete));
      navigation.navigate('FrontRightPawComplete');
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
        <SummaryRow
          claw={{ id: 'dew', text: 'DEWCLAW', ...clawsData.dew }}
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

export default FrontRightPawSummaryScreen;