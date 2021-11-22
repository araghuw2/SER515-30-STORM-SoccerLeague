const INITIAL_STATE = {
  schedule: [],
  day: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SCHEDULE":
      return {
        ...state,
        schedule: action.payload.scheduledMatches,
      };
    case "SELECT_DAY":
      return {
        ...state,
        day: action.payload
      }

    default:
      return state;
  }
};
