
import api from '/api/axiosServices';
import * as actionTypes from '../types'
import axios from 'axios';

export const GetProjectList = params => async dispatch => {
  dispatch({ type: actionTypes.GET_PROJECT_LIST_LOADING });
  // console.log(111, { params });

  const linkApi = '/items/projects?filter[status][_eq]=published&fields=id,name,slug,description,location, main_photo.id,main_photo.type, client.id,client.name&sort=+sort'

  try {
    await api.get(linkApi, params)
      .then(data => {
        dispatch({ type: actionTypes.GET_PROJECT_LIST_SUCCESS, response: data })
      })
  } catch (error) {
    dispatch({ type: actionTypes.GET_PROJECT_LIST_ERROR, error: error.response })

    if (error.response.status === 400) {
      console.log(`HTTP 400 error occured`);
    }
    if (error.response.data) {
      // console.log(error);
    }
  }
};
