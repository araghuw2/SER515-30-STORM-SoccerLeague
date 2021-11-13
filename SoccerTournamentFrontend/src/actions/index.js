import axios from "axios";
import history from "../history";

export const signIn = (formValues) => async (dispatch, getState) => {
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

export const signUp = formValues => async (dispatch, getState) => {
    try {
        const response = await axios.post('http://localhost:8080/signup', {...formValues });
        if (response.status == 200) {
            dispatch({ type: "SIGN_UP", payload: response.data });
            history.push('/home') //Redirect from Login Page to Home page after successful login
        }
    } catch (error) {
        dispatch({ type: "SIGN_UP_ERROR" });
    }
}

export const registerTeam = (formValues, id) => async (dispatch, getState) => {
    try {
        const result = Object.values(formValues.playerList);
        console.log(formValues);
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
}

export const signOut = () => {
    return {
        type: "SIGN_OUT"
    };
};

export const viewTeam = (id) => async (dispatch, getState) => {
    try {
         const response = await axios.get(`http://localhost:8080/view/team?coachId=${id}`, );
         if (response.status == 200) {
             dispatch({ type: "VIEW_TEAM", payload: response.data });
         }
     } catch (error) {
        // dispatch({ type: "SIGN_IN_ERROR" });
     }
}

export const hasTeam = (id) => async (dispatch, getState) => {
    try {
        const response = await axios.get(`http://localhost:8080/hasteam?coachId=${id}`, );
        if (response.status == 200) {
            dispatch({ type: "HAS_TEAM", payload: response.data });
        }
    } catch (error) {
       // dispatch({ type: "SIGN_IN_ERROR" });
    }
}
