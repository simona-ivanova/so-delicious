import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/recipes';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const recipes = Object.values(result);

    return recipes;
};

export const getOne = async (recipeId) => {
    const result = await request.get(`${baseUrl}/${recipeId}`);

    return result;
}

export const create = async (recipeData) => {
    const result = await request.post(baseUrl, recipeData);

    return result;


}