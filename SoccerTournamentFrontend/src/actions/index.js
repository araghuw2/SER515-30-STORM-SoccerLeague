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

export const schedule = (day) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:8080/schedule",  {
      day
    });
    if (response.status == 200) {
  dispatch({ type: "SCHEDULE", payload: response.data });
      // history.push("/home"); //Redirect from Login Page to Home page after successful login
    }
  } catch (error) {
    dispatch({ type: "PAGE NOT FOUND" });
  }
};

export const selectGameId = (id) => (dispatch) => {

  dispatch({ type: "SELECT_GAME_ID", payload: id });
  history.push('/addResult');
};

export const submitGameDetails = (id, gameDetails) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:8080/addwinner", {
      id,
      ...gameDetails,
    });
    if (response.status == 200) {
      history.push("/filterDate"); //Redirect from Login Page to Home page after successful login
    }
  } catch (error) {
    dispatch({ type: "SIGN_UP_ERROR" });
  }
  dispatch({ type: "SUBMIT_GAME_DETAILS", payload: gameDetails });
  // history.push('/schedule');
};

export const selectScheduleDate = (day) => async (dispatch, getState) => {
  try {
      const response = await await axios.get(`http://localhost:8080/schedule?day=${day}`);
      if (response.status == 200) {
           dispatch({ type: "SELECT_DAY", payload: day });
           dispatch({ type: "SCHEDULE", payload: response.data });
      }
  } catch (error) {
      dispatch({ type: "SIGN_IN_ERROR" });
  }
}

export const addVolunteers = (formValues) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:8080/addVolunteer", {
      ...formValues,
    });
    if (response.status == 200) {
      dispatch({ type: "ADD_VOLUNTEERS", payload: response.data });
      history.push("/home"); //Redirect from Login Page to Home page after successful login
    }
  } catch (error) {
    dispatch({ type: "SIGN_UP_ERROR" });
  }
};

export const viewVolunteers = (id) => async (dispatch) => {
  try {
       const response = await axios.get(`http://localhost:8080/getVolunteers`, );
       if (response.status == 200) {
           dispatch({ type: "VIEW_VOLUNTEERS", payload: response.data });
       }
   } catch (error) {
      // dispatch({ type: "SIGN_IN_ERROR" });
   }
}

export const getTournamentDay = () => async (dispatch, getState) => {
  try {
      const response = await await axios.get(`http://localhost:8080/schedule/day`);
      if (response.status == 200) {
           dispatch({ type: "SCHEDULE_DAY", payload: response.data });
      }
  } catch (error) {
      dispatch({ type: "SCHEDULE_DAY_ERROR" });
  }
}
