const INITIAL_STATE = {
  schedule: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SCHEDULE":
      return {
        ...state,
        schedule: action.payload.scheduledMatches,
      };

    default:
      return state;
  }
};
