import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/recipes';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const recipes = Object.values(result);

    return recipes;
};