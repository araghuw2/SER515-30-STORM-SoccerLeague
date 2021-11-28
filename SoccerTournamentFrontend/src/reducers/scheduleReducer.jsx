const INITIAL_STATE = {
  schedule: [],
  selected_game_id: null,
  submitted_winner_details: null,
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

    case "SELECT_GAME_ID":
      return {
        ...state,
        selected_game_id: action.payload,
      };

    case "SCHEDULE_DAY":
      return {
        ...state,
        schedule_day: action.payload,
      };

    default:
      return state;
  }
};
