import { useState } from "react";
import { validateFormRecipe, validateFormRegister, validateFormLogin } from "../services/formValidationService";

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});


    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmitRegister = (e) => {
        e.preventDefault();
        const errors = validateFormRegister(values);
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            onSubmitHandler(values);
            setValues(initialValues);
        }

    };

    const onSubmitRecipe = (e) => {
        e.preventDefault();
        const errors = validateFormRecipe(values);
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            onSubmitHandler(values);
            setValues(initialValues);
        }

    };

    const onSubmitLogin = (e) => {
        e.preventDefault();
        const errors = validateFormLogin(values);
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
        onSubmitRecipe,
        onSubmitRegister,
        onSubmitLogin,
        changeValues,
        errors
    };
};