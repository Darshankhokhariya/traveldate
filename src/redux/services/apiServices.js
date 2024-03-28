import axios from "axios";

const baseURL = "https://traveldate.onrender.com";
// const baseURL = "http://localhost:8080"

export const post = (url, data, actionType, dispatch) => {
    return new Promise(async (resolve, reject) => {
        try {
            dispatch({ type: `${actionType}_INIT` });
            const response = await axios.post(`${baseURL}${url}`, data);
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

export const postAuthToken = (url, data, actionType, dispatch, headers) => {
    return new Promise(async (resolve, reject) => {
        try {
            dispatch({ type: `${actionType}_INIT` });
            const response = await axios.post(`${baseURL}${url}`, data, { headers: headers.headers });
            if (response.data.status == 401) {
                localStorage.removeItem("authToken")
                localStorage.removeItem("refreshToken")
                window.location.href = "/"
            }
            else {
                dispatch({
                    type: `${actionType}_SUCCESS`,
                    payload: response.data,
                });
                resolve(response.data);
            }
        }
        catch (error) {
            dispatch({
                type: `${actionType}_FAIL`,
                payload: error,
            });
            reject(error);
        }
    }
    );
};

export const getNoAuth = (url, actionType, dispatch, headers) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Dispatch the action with INIT type
            dispatch({ type: `${actionType}_INIT` });
            const response = await axios.get(`${baseURL}${url}`);
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

export const get = (url, actionType, dispatch, headers) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Dispatch the action with INIT type
            dispatch({ type: `${actionType}_INIT` });
            const response = await axios.get(`${baseURL}${url}`, {
                headers: headers.headers,
            });
            if (response.data.status == 401) {
                // localStorage.removeItem("authToken")
                // localStorage.removeItem("refreshToken")
                // window.location.href = "/"
            }
            else {
                // Dispatch the action with SUCCESS type
                dispatch({
                    type: `${actionType}_SUCCESS`,
                    payload: response.data,
                });
                resolve(response.data);
            }
        } catch (error) {
            console.log('error :>> ', error);
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
            const response = await axios.put(`${baseURL}${url}`, data, { headers: headers.headers });
            // Dispatch the action with SUCCESS type
            if (response.data.status == 401) {
                localStorage.removeItem("authToken")
                localStorage.removeItem("refreshToken")
                window.location.href = "/"
            }
            else {
                dispatch({
                    type: `${actionType}_SUCCESS`,
                    payload: response.data,
                });
                resolve(response.data);
            }
        } catch (error) {
            // Dispatch the action with FAIL type
            dispatch({
                type: `${actionType}_FAIL`,
                payload: error.response,
            });
        }
    });
};

export const deleteapi = (url, actionType, dispatch, headers) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Dispatch the action with INIT type
            dispatch({ type: `${actionType}_INIT` });
            const response = await axios.delete(`${baseURL}${url}`,{ headers: headers.headers });
            if (response.data.status == 401) {
                localStorage.removeItem("authToken")
                localStorage.removeItem("refreshToken")
                window.location.href = "/"
            }
            else {
                // Dispatch the action with SUCCESS type
                dispatch({
                    type: `${actionType}_SUCCESS`,
                    payload: response.data,
                });
                resolve(response.data);
            }
        } catch (error) {
            // Dispatch the action with FAIL type
            dispatch({
                type: `${actionType}_FAIL`,
                payload: error.response,
            });
        }
    });
};
