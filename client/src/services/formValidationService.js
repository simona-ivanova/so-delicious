const passwordRegex = /^(?=\S{6,}$)[^\s<>&]*$/g;

export const validateFormRegister = (formData) => {
    const { firstName, lastName, email, password, repeatPassword } = formData;
    const errors = {};

    if (firstName.length < 1) {
        errors.firstName = "Полето не може да бъде празно!";
    } else if (firstName.trim().length < 2) {
        errors.firstName = "Името трябва да е поне 2 символа!";
    }

    if (lastName.trim().length < 1) {
        errors.lastName = "Полето не може да бъде празно!";
    } else if (lastName.trim().length < 2) {
        errors.lastName = "Фамилията трябва да бъде поне 2 символа!";
    }

    if (email.trim().length < 1) {
        errors.email = "Полето не може да бъде празно!";
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

export const validateFormLogin = (formData) => {
    const { email, password } = formData;
    const errors = {};

    if (email.trim().length < 1) {
        errors.email = "Полето не може да бъде празно!";
    }

    if (password.trim().length < 1) {
        errors.password = "Полето не може да бъде празно!";
    } 

    return errors;
}

export const validateFormRecipe = (formData) => {
    const { title, category, imageUrl1, imageUrl2, prepTime, cookingTime, serving, ingredients, steps } = formData;
    const errors = {};

    if (!title) {
        errors.title = "Полето не може да бъде празно!";
    } else if (title.trim().length < 2) {
        errors.title = "Името трябва да е поне 2 символа!";
    }

    if (!category) {
        errors.category = "Избери категория!";
    } else if (category === 'Избери категория') {
         errors.category = "Невалидна категория!";
    }

    if (!serving) {
        errors.serving = "Полето не може да бъде празно!";
    } else if (serving < 1) {
         errors.serving = "Минималното количество е 1!";
    }

    if (imageUrl1.trim().length < 1) {
        errors.imageUrl1 = "Полето не може да бъде празно!";
    } else if (!(imageUrl1.startsWith('http://') || imageUrl1.startsWith('https://'))) {
        errors.imageUrl1 = "Невалиден адрес!";
    }

    if (imageUrl2.trim().length < 1) {
        errors.imageUrl2 = "Полето не може да бъде празно!";
    } else if (!(imageUrl2.startsWith('http://') || imageUrl2.startsWith('https://'))) {
        errors.imageUrl2 = "Невалиден адрес!";
    }

    if (!prepTime) {
        errors.prepTime = "Полето не може да бъде празно!";
    } else if (prepTime < 5) {
         errors.prepTime = "Минималното време е 5 минути!";
    }

    if (!cookingTime) {
        errors.cookingTime = "Полето не може да бъде празно!";
    } else if (cookingTime < 5) {
         errors.cookingTime = "Минималното време е 5 минути!";
    }

    
    if (!ingredients) {
        errors.ingredients = "Полето не може да бъде празно!";
    } 

    if (!steps) {
        errors.steps = "Полето не може да бъде празно!";
    } 
    
    return errors;
}

export const validateFormComment = (formData) => {
    const { comment } = formData;
    const errors = {};

    if (comment.trim().length < 1) {
        errors.comment = "Полето не може да бъде празно!";
    } 

    return errors;
}

