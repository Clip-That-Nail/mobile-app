export const validateFrontPawSummary = (outcomes, behaviours) => {
  return new Promise((resolve, reject) => {
    if (outcomes.first === 'not-selected' || behaviours.first === 'not-selected') {
      reject(new Error('First claw summary not finished'));
    } else if (outcomes.second === 'not-selected' || behaviours.second === 'not-selected') {
      reject(new Error('Second claw summary not finished'));
    } else if (outcomes.third === 'not-selected' || behaviours.third === 'not-selected') {
      reject(new Error('Third claw summary not finished'));
    } else if (outcomes.fourth === 'not-selected' || behaviours.fourth === 'not-selected') {
      reject(new Error('Fourth claw summary not finished'));
    } else if (outcomes.dew === 'not-selected' || behaviours.dew === 'not-selected') {
      reject(new Error('Dew claw summary not finished'));
    }
    resolve();
  });
};

export const validateBackPawSummary = (outcomes, behaviours) => {
  return new Promise((resolve, reject) => {
    if (outcomes.first === 'not-selected' || behaviours.first === 'not-selected') {
      reject(new Error('First claw summary not finished'));
    } else if (outcomes.second === 'not-selected' || behaviours.second === 'not-selected') {
      reject(new Error('Second claw summary not finished'));
    } else if (outcomes.third === 'not-selected' || behaviours.third === 'not-selected') {
      reject(new Error('Third claw summary not finished'));
    } else if (outcomes.fourth === 'not-selected' || behaviours.fourth === 'not-selected') {
      reject(new Error('Fourth claw summary not finished'));
    }
    resolve();
  });
};