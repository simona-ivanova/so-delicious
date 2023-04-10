import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g
    const passwordRegex = /^(?=\S{6,}$)[^\s<>&]*$/g

    function validateForm(formData) {
        const { firstName, lastName, email, password, repeatPassword } = formData;
        const errors = {};

        if (firstName.length < 1) {
            errors.firstName = "Полето не може да бъде празно!";
        } else if (firstName.trim().length < 2) {
            errors.firstName = "Името трябва да е поне 2 символа!";
        }

        if (lastName.length < 1) {
            errors.lastName = "Полето не може да бъде празно!";
        } else if (lastName.trim().length < 2) {
            errors.lastName = "Фамилията трябва да бъде поне 2 символа!";
        }

        if (email.trim().length < 1) {
            errors.email = "Полето не може да бъде празно!";
        } else if (!emailRegex.test(email)) {
            errors.email = "Невалиден имейл адрес!";
        }

        if (password.trim().length < 1) {
            errors.password = "Полето не може да бъде празно!";
        } else if (password.length < 6) {
            errors.password = "Паролата трябва да бъде поне 6 символа! Празните пространства са забранени!";
        } 
        else if (!passwordRegex.test(password)) {
            errors.password = "Използвани са забранени символи!";
        }

        if (repeatPassword.trim() !== password.trim()) {
            errors.repeatPassword = "Паролите не съвпадат!";
        }

        return errors;
    }

    const onSubmitRegister = (e) => {
        e.preventDefault();
        const errors = validateForm(values);
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            onSubmitHandler(values);
            setValues(initialValues);
        }


    };

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);
        setValues(initialValues);

    };

    const changeValues = (newValues) => {
        //TODO: Validate newValues shape (like initialValues)

        setValues(newValues);
    }

    return {
        values,
        changeHandler,
        onSubmit,
        onSubmitRegister,
        changeValues,
        errors
    };
};