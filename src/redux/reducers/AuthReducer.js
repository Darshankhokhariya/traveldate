import * as actionTypes from '../ActionTypes';

const initialState = {
  isLoggedIn: false,
  loading: false,
  countryList: [],
  languageList: [],
  cityList: [],
  userProfile: {}
};

const store = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_INIT:
      return {
        ...state,
        loading: true
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case actionTypes.USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.GET_COUNTRY_SUCCESS:
      return {
        ...state,
        countryList: action?.payload?.data
      };
    case actionTypes.GET_CITY_SUCCESS:
      return {
        ...state,
        cityList: action?.payload?.data
      };
    case actionTypes.GET_LANGUAGE_SUCCESS:
      return {
        ...state,
        languageList: action?.payload?.data
      };
    case actionTypes.GET_SINGLE_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action?.payload?.data
      };
    default:
      return state;
  }
}

export default store;