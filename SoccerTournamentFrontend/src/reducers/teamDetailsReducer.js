const INITIAL_STATE = {
    team_name: "",
    coach_id:"",
    player_details: [],
    team_id: null, //Need to populate when backend returns a value
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
      case "UNREGISTERED":
          return {
              ...state,
              team_details: {
                  team_name: "", 
                  coach_id: "",
                  player_details: [],
                  team_id: "",
              }
         };
    
    case "REGISTERED": 
    /* when user signs out, we want to clear the email property, we dont want to carry the value around */
        return {
            ...state, 
            team_details: {
                team_name: action.payload.team_name,
                coach_id: action.payload.coach_id,
                player_details: action.payload.player_details,
                team_id: action.payload.team_id,
            }
         };

    case "VIEW_TEAM": 
    /* when user signs out, we want to clear the email property, we dont want to carry the value around */
        return {
            ...state, 
            team_details: {
                team_name: action.payload.team_name,
                coach_id: action.payload.coach_id,
                player_details: action.payload.playerList,
                team_id: action.payload.team_id,
            }
         };


    default: 
        return state;
  }
}