export const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
        errors.email = 'Email is Required!';
    } else if (!regex.test(values.email)) {
        errors.email = 'This is not a valid email format!';
    }
    if (!values.password) {
        errors.password = 'Password is Required!';
    }


    return errors;
};

export const validateOnBoarding1 = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9,. ]*$/;
    const nameregex = /^[a-zA-Z,. ]*$/;

    if (!values.name) {
        errors.name = 'Name is Required!';
    } else if (!nameregex.test(values.name)) {
        errors.name = "Name Can Only Contain !";
    }
    if (!values.gender) {
        errors.gender = 'Gender is Required!';
    }
    if (!values.age) {
        errors.age = 'Age is Required!';
    }
    if (!values.about) {
        errors.about = "About Me is Required!";
    } else if (!regex.test(values.about)) {
        errors.about = "About Me Can Only Contain Alphanumeric Values!";
    }
    return errors;
};


export const validateOnBoarding2 = (values) => {
    console.log('values :>> ', values.city);
    const errors = {};

    if (!values.bodyType) {
        errors.bodyType = 'Body Type is Required!';
    }
    if (!values.country) {
        errors.country = 'Country is Required!';
    }
    if (values.city === "" || !values.city) {
        errors.city = 'City is Required!';
    }
    return errors;
};

export const validateOnBoarding3 = (values) => {
    console.log('values', values)
    const errors = {};

    if (values?.language?.length === 0) {
        errors.language = 'Language is Required!';
    }
    if (!values.age) {
        errors.age = 'Age is Required!';
    }
    return errors;
};


