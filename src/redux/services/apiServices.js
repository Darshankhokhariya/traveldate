import axios from "axios";

// const baseURL = "https://traveldate.onrender.com";
const baseURL = "http://localhost:8080"

export const post = (url, data, actionType, dispatch) => {
    return new Promise(async (resolve, reject) => {
        try {
            dispatch({ type: `${actionType}_INIT` });

            const response = await axios.post(`${baseURL}${url}`, data, { headers: headers.headers });

            dispatch({
                type: `${actionType}_SUCCESS`,
                payload: response.data,
            });
            resolve(response.data);
        } catch (error) {
            dispatch({
                type: `${actionType}_FAIL`,
                payload: error,
            });
            reject(error);
        }
    });
};

export const get = (url, actionType, dispatch, headers) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Dispatch the action with INIT type
            dispatch({ type: `${actionType}_INIT` });
            const response = await axios.get(`${baseURL}${url}`, {
                headers: headers.headers,
            });
            // Dispatch the action with SUCCESS type
            dispatch({
                type: `${actionType}_SUCCESS`,
                payload: response.data,
            });
            resolve(response.data);
        } catch (error) {
            // Dispatch the action with FAIL type
            dispatch({
                type: `${actionType}_FAIL`,
                payload: error.response,
            });
        }
    });
};

export const put = (url, data, actionType, dispatch, headers) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Dispatch the action with INIT type
            dispatch({ type: `${actionType}_INIT` });

            const response = await axios.put(`${baseURL}${url}`, data);

            // Dispatch the action with SUCCESS type
            dispatch({
                type: `${actionType}_SUCCESS`,
                payload: response.data,
            });
            resolve(response.data);
        } catch (error) {
            // Dispatch the action with FAIL type
            dispatch({
                type: `${actionType}_FAIL`,
                payload: error.response,
            });
        }
    });
};

export const deleteapi = (url, data, actionType, dispatch, headers) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Dispatch the action with INIT type
            dispatch({ type: `${actionType}_INIT` });

            const response = await axios.delete(`${baseURL}${url}`, data);

            // Dispatch the action with SUCCESS type
            dispatch({
                type: `${actionType}_SUCCESS`,
                payload: response.data,
            });
            resolve(response.data);
        } catch (error) {
            // Dispatch the action with FAIL type
            dispatch({
                type: `${actionType}_FAIL`,
                payload: error.response,
            });
        }
    });
};
