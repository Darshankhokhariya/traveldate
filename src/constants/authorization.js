const getToken = () => {
    if (typeof window !== 'undefined') {
        const tokenData = localStorage.getItem('authToken');
        return tokenData;
    }
    return null;
};

export const HEADERS = {
    headers: {
        Authorization: `Bearer ${getToken()}`,
    },

}

export const FORM_HEADERS = {
    headers: {
        Authorization: `Bearer ${getToken()}`,
        ContentType: 'multipart/form-data'
    },

}



