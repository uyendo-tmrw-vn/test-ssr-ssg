import * as actionTypes from '../types'

const initialState = {
  loading: false,
  error: '',
}

const IpReducers = (state = initialState, action) => {
  switch (action.type) {
    /*check coupon valid*/
    case actionTypes.GET_PROJECT_LIST_LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }
    case actionTypes.GET_PROJECT_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        DataGetProjectList: action.response.data,
      }
    }
    case actionTypes.GET_PROJECT_LIST_ERROR: {
      return {
        ...state,
        loading: false,
        DataGetProjectList: action.error,
      };
    }

    /*loading*/
    case actionTypes.LOADING: {
      return {
        ...state,
        isLoading: action.response,
      };
    }
    /*clear data*/
    case actionTypes.CLEAR_DATA: {
      return {
        ...state,
        DataGetProjectList: null
      };
    }

    default:
      return { ...state }
  }
}
export default IpReducers
