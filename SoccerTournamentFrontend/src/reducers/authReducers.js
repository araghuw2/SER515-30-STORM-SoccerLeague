const INITIAL_STATE = {
    id: null,
    isSignedIn: null,
    role: null,
    reg_date: null,
    email: null,
    gender: null,
    first_name: null,
    last_name: null,
    withdraw_flag: null,
    sign_in_error: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case "SIGN_IN": 
        return {
            ...state,
            id: action.payload.id,
            isSignedIn: true, 
            role: action.payload.role,
            reg_date: action.payload.reg_date,
            email: action.payload.email,
            gender: action.payload.gender,
            first_name: action.payload.first_name,
            last_name: action.payload.last_name,
            withdraw_flag: action.payload.withdraw_flag,
            sign_in_error: false
         };

    case "SIGN_UP": 
        return {
            ...state,
            id: action.payload.id,
            isSignedIn: false, 
            role: action.payload.role,
            reg_date: action.payload.reg_date,
            email: action.payload.email,
            gender: action.payload.gender,
            first_name: action.payload.first_name,
            last_name: action.payload.last_name,
            withdraw_flag: action.payload.withdraw_flag,
            sign_in_error: false
         };
    
    case "SIGN_OUT": 
    /* when user signs out, we want to clear the email property, we dont want to carry the value around */
        return {
            ...state,
            id: null, 
            isSignedIn: false, 
            role: null,
            reg_date: null,
            email: null,
            gender: null,
            first_name: null,
            last_name: null,
            withdraw_flag: null,
            sign_in_error: false
         };

    case "SIGN_IN_ERROR":
        return {
            ...state,
            id: null,  
            isSignedIn: false, 
            role: null,
            reg_date: null,
            email: null,
            gender: null,
            first_name: null,
            last_name: null,
            withdraw_flag: null,
            sign_in_error: true
        };

        case "SIGN_UP_ERROR":
        return {
            ...state, 
            id: null, 
            isSignedIn: false, 
            role: null,
            reg_date: null,
            email: null,
            gender: null,
            first_name: null,
            last_name: null,
            withdraw_flag: null,
            sign_in_error: true
        };

        case "ADD_VOLUNTEERS": 
        return {
            ...state,
            email: action.payload.email,
            gender: action.payload.gender,
            volunteerName: action.payload.volunteerName,
            // last_name: action.payload.last_name,
         };

    default: 
        return state;
  }
}