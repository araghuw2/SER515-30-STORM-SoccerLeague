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

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
