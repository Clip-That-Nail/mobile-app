const initialState = {
  frontLeftPaw: {
    firstClaw: 'unchecked',
    secondClaw: 'unchecked',
    thirdClaw: 'unchecked',
    fourthClaw: 'unchecked',
    dewClaw: 'unchecked',
  },
  frontRightPaw: {
    firstClaw: 'unchecked',
    secondClaw: 'unchecked',
    thirdClaw: 'unchecked',
    fourthClaw: 'unchecked',
    dewClaw: 'unchecked',
  },
  backLeftPaw: {
    firstClaw: 'unchecked',
    secondClaw: 'unchecked',
    thirdClaw: 'unchecked',
    fourthClaw: 'unchecked',
  },
  backRightPaw: {
    firstClaw: 'unchecked',
    secondClaw: 'unchecked',
    thirdClaw: 'unchecked',
    fourthClaw: 'unchecked',
  },
}

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}