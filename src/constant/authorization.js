const getToken = () => {
    if (typeof window !== 'undefined') {
        const tokenData = localStorage.getItem('authToken');
        console.log('tokenData', tokenData)
        return tokenData;
    }
    return null;
};

export const HEADERS = {
    headers: {
        Authorization: `Bearer ${getToken()}`,
        ContentType: 'application/json'
    },
}

export const FORM_HEADERS = {
    headers: {
        Authorization: `Bearer ${getToken()}`,
        ContentType: 'multipart/form-data'
    },
}

