import * as actionTypes from '../ActionTypes';

const initialState = {
  isLoggedIn: false,
  loading: false,
  countryList: [],
  languageList: [],
  cityList: [],
  userProfile: {},
  recentLandingPageUser: [],
  favouriteUser: [],
  visitorDetails: [],
  recentUserDetails: [],
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
    case actionTypes.GET_LANDING_PAGE_USER_SUCCESS:
      return {
        ...state,
        recentLandingPageUser: action?.payload?.data
      };
    case actionTypes.GET_FAVOURITE_PAGE_USER_INIT:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_FAVOURITE_PAGE_USER_SUCCESS:
      return {
        ...state,
        favouriteUser: action?.payload?.data
      };
    case actionTypes.GET_FAVOURITE_PAGE_USER_FAIL:
      return {
        ...state,
        favouriteUser: []
      };
    case actionTypes.GET_VISITOR_PAGE_USER_INIT:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_VISITOR_PAGE_USER_SUCCESS:
      return {
        ...state,
        visitorDetails: action?.payload?.data
      };
    case actionTypes.GET_VISITOR_PAGE_USER_FAIL:
      return {
        ...state,
        visitorDetails: []
      };
    case actionTypes.GET_RECENT_USER_INIT:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_RECENT_USER_SUCCESS:
      return {
        ...state,
        recentUserDetails: action?.payload?.data
      };
    case actionTypes.GET_RECENT_USER_FAIL:
      return {
        ...state,
        recentUserDetails: []
      };
    default:
      return state;
  }
}

export default store;