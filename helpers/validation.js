export const validateFrontPawSummary = (outcomes, behaviours) => {
  return new Promise((resolve, reject) => {
    if (outcomes.firstClaw === 'not-selected' || behaviours.firstClaw === 'not-selected') {
      reject(new Error('First claw summary not finished'));
    } else if (outcomes.secondClaw === 'not-selected' || behaviours.secondClaw === 'not-selected') {
      reject(new Error('Second claw summary not finished'));
    } else if (outcomes.thirdClaw === 'not-selected' || behaviours.thirdClaw === 'not-selected') {
      reject(new Error('Third claw summary not finished'));
    } else if (outcomes.fourthClaw === 'not-selected' || behaviours.fourthClaw === 'not-selected') {
      reject(new Error('Fourth claw summary not finished'));
    } else if (outcomes.dewClaw === 'not-selected' || behaviours.dewClaw === 'not-selected') {
      reject(new Error('Dew claw summary not finished'));
    }
    resolve();
  });
};

export const validateBackPawSummary = (outcomes, behaviours) => {
  return new Promise((resolve, reject) => {
    if (outcomes.firstClaw === 'not-selected' || behaviours.firstClaw === 'not-selected') {
      reject(new Error('First claw summary not finished'));
    } else if (outcomes.secondClaw === 'not-selected' || behaviours.secondClaw === 'not-selected') {
      reject(new Error('Second claw summary not finished'));
    } else if (outcomes.thirdClaw === 'not-selected' || behaviours.thirdClaw === 'not-selected') {
      reject(new Error('Third claw summary not finished'));
    } else if (outcomes.fourthClaw === 'not-selected' || behaviours.fourthClaw === 'not-selected') {
      reject(new Error('Fourth claw summary not finished'));
    }
    resolve();
  });
};