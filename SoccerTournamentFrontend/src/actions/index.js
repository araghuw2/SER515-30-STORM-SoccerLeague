import axios from "axios";
import history from "../history";

export const signIn = (formValues) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:8080/signin", {
      ...formValues,
    });
    if (response.status == 200) {
      dispatch({ type: "SIGN_IN", payload: response.data });
      history.push("/home"); //Redirect from Login Page to Home page after successful login
    }
  } catch (error) {
    dispatch({ type: "SIGN_IN_ERROR" });
  }
};

export const signUp = (formValues) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:8080/signup", {
      ...formValues,
    });
    if (response.status == 200) {
      dispatch({ type: "SIGN_UP", payload: response.data });
      history.push("/home"); //Redirect from Login Page to Home page after successful login
    }
  } catch (error) {
    dispatch({ type: "SIGN_UP_ERROR" });
  }
};

export const registerTeam = (formValues, id) => async (dispatch) => {
    try {
        const result = Object.values(formValues.playerList);
        formValues.coach_id =id;
        formValues.playerList = result;
        const response = await axios.post('http://localhost:8080/create/team', formValues, {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            'Content-Type': 'application/json'
          }
        });

    if (response.status == 200) {
      dispatch({ type: "REGISTERED", payload: response.data });
    }
  } catch (error) {
    // dispatch({ type: "SIGN_IN_ERROR" });
  }
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const viewTeam = (id) => async (dispatch) => {
    try {
         const response = await axios.get(`http://localhost:8080/view/team?coachId=${id}`, );
         if (response.status == 200) {
             dispatch({ type: "VIEW_TEAM", payload: response.data });
         }
     } catch (error) {
        // dispatch({ type: "SIGN_IN_ERROR" });
     }
}

export const hasTeam = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:8080/hasteam?coachId=${id}`, );
        if (response.status == 200) {
            dispatch({ type: "HAS_TEAM", payload: response.data });
        }
    } catch (error) {
       // dispatch({ type: "SIGN_IN_ERROR" });
    }
};

export const schedule = () => async (dispatch) => {
  const response = {
    scheduledMatches: [
      {
        id: 86986,
        game_start_time: "00:00 am",
        game_end_time: "01:30 am",
        team_name_1: "a",
        team_name_2: "b",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 0,
        group: 1,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 11836,
        game_start_time: "00:00 am",
        game_end_time: "01:30 am",
        team_name_1: "b",
        team_name_2: "c",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 1,
        group: 1,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 28692,
        game_start_time: "01:30 am",
        game_end_time: "03:00 am",
        team_name_1: "c",
        team_name_2: "d",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 0,
        group: 1,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 54907,
        game_start_time: "01:30 am",
        game_end_time: "03:00 am",
        team_name_1: "d",
        team_name_2: "a",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 1,
        group: 1,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 37880,
        game_start_time: "03:00 am",
        game_end_time: "04:30 am",
        team_name_1: "e",
        team_name_2: "f",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 0,
        group: 2,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 24340,
        game_start_time: "03:00 am",
        game_end_time: "04:30 am",
        team_name_1: "f",
        team_name_2: "g",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 1,
        group: 2,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 77438,
        game_start_time: "04:30 am",
        game_end_time: "06:00 am",
        team_name_1: "g",
        team_name_2: "h",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 0,
        group: 2,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 19525,
        game_start_time: "04:30 am",
        game_end_time: "06:00 am",
        team_name_1: "h",
        team_name_2: "e",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 1,
        group: 2,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 48008,
        game_start_time: "06:00 am",
        game_end_time: "07:30 am",
        team_name_1: "i",
        team_name_2: "j",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 0,
        group: 3,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 77596,
        game_start_time: "06:00 am",
        game_end_time: "07:30 am",
        team_name_1: "j",
        team_name_2: "k",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 1,
        group: 3,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 97022,
        game_start_time: "07:30 am",
        game_end_time: "09:00 am",
        team_name_1: "k",
        team_name_2: "l",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 0,
        group: 3,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 25908,
        game_start_time: "07:30 am",
        game_end_time: "09:00 am",
        team_name_1: "l",
        team_name_2: "i",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 1,
        group: 3,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 60733,
        game_start_time: "09:00 am",
        game_end_time: "10:30 am",
        team_name_1: "m",
        team_name_2: "n",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 0,
        group: 4,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 1910,
        game_start_time: "09:00 am",
        game_end_time: "10:30 am",
        team_name_1: "n",
        team_name_2: "o",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 1,
        group: 4,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 87646,
        game_start_time: "10:30 am",
        game_end_time: "12:00 pm",
        team_name_1: "o",
        team_name_2: "p",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 0,
        group: 4,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 81332,
        game_start_time: "10:30 am",
        game_end_time: "12:00 pm",
        team_name_1: "p",
        team_name_2: "m",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 1,
        group: 4,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 18067,
        game_start_time: "12:00 pm",
        game_end_time: "13:30 pm",
        team_name_1: "q",
        team_name_2: "r",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 0,
        group: 5,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 19507,
        game_start_time: "12:00 pm",
        game_end_time: "13:30 pm",
        team_name_1: "r",
        team_name_2: "s",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 1,
        group: 5,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 36527,
        game_start_time: "13:30 pm",
        game_end_time: "15:00 pm",
        team_name_1: "s",
        team_name_2: "t",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 0,
        group: 5,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 61447,
        game_start_time: "13:30 pm",
        game_end_time: "15:00 pm",
        team_name_1: "t",
        team_name_2: "q",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 1,
        group: 5,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 58306,
        game_start_time: "15:00 pm",
        game_end_time: "16:30 pm",
        team_name_1: "u",
        team_name_2: "v",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 0,
        group: 6,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 79961,
        game_start_time: "15:00 pm",
        game_end_time: "16:30 pm",
        team_name_1: "v",
        team_name_2: "w",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 1,
        group: 6,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 9191,
        game_start_time: "16:30 pm",
        game_end_time: "18:00 pm",
        team_name_1: "w",
        team_name_2: "x",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 0,
        group: 6,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 49660,
        game_start_time: "16:30 pm",
        game_end_time: "18:00 pm",
        team_name_1: "x",
        team_name_2: "u",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 1,
        group: 6,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 48766,
        game_start_time: "18:00 pm",
        game_end_time: "19:30 pm",
        team_name_1: "y",
        team_name_2: "z",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 0,
        group: 7,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 2261,
        game_start_time: "18:00 pm",
        game_end_time: "19:30 pm",
        team_name_1: "z",
        team_name_2: "a1",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 1,
        group: 7,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 26100,
        game_start_time: "19:30 pm",
        game_end_time: "21:00 pm",
        team_name_1: "a1",
        team_name_2: "a2",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 0,
        group: 7,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 55328,
        game_start_time: "19:30 pm",
        game_end_time: "21:00 pm",
        team_name_1: "a2",
        team_name_2: "y",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 1,
        group: 7,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 35531,
        game_start_time: "21:00 pm",
        game_end_time: "22:30 pm",
        team_name_1: "a3",
        team_name_2: "a4",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 0,
        group: 8,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 84675,
        game_start_time: "21:00 pm",
        game_end_time: "22:30 pm",
        team_name_1: "a4",
        team_name_2: "a5",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 1,
        group: 8,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 16738,
        game_start_time: "22:30 pm",
        game_end_time: "00:00 am",
        team_name_1: "a5",
        team_name_2: "a6",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 0,
        group: 8,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
      {
        id: 68449,
        game_start_time: "22:30 pm",
        game_end_time: "00:00 am",
        team_name_1: "a6",
        team_name_2: "a3",
        winning_team: null,
        goals_team1: null,
        goals_team2: null,
        field_site: 1,
        group: 8,
        red_cards_team1: null,
        red_cards_team2: null,
        yellow_cards_team1: null,
        yellow_cards_team2: null,
        injuries_team1: null,
        injuries_team2: null,
      },
    ],
  };

  //   const response = await axios.post("http://localhost:8080/signin");
  //   if (response.status == 200) {
  dispatch({ type: "SCHEDULE", payload: response });
  //     history.push("/home"); //Redirect from Login Page to Home page after successful login
  //   }
  // } catch (error) {
  //   dispatch({ type: "PAGE NOT FOUND" });
  // }
};

export const selectGameId = (id) => (dispatch) => {

  dispatch({ type: "SELECT_GAME_ID", payload: id });
  history.push('/addResult');
};

export const submitGameDetails = (gameId, gameDetails) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:8080/addwinner", {
      gameId,
      ...gameDetails,
    });
    if (response.status == 200) {
      history.push("/schedule"); //Redirect from Login Page to Home page after successful login
    }
  } catch (error) {
    dispatch({ type: "SIGN_UP_ERROR" });
  }
  dispatch({ type: "SUBMIT_GAME_DETAILS", payload: gameDetails });
  history.push('/schedule');
};
