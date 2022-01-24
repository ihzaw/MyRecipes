import {
    FETCH_USER,
    SET_USER_ERROR,
    SET_USER_LOADING
} from "../actionTypes";
  
  const initialState = {
    user: [],
    userError: null,
    userLoading: true,
  };

  const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        //! Recipes
        case FETCH_USER:
          return {
            ...state,
            user: payload,
          };
    
        case SET_USER_ERROR:
          return {
            ...state,
            userError: payload,
          };
    
        case SET_USER_LOADING:
          return {
            ...state,
            userLoading: payload,
          };
          default:
            return state;
    }
  }

  export default userReducer