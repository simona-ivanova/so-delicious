import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        try {
            const persistedStateSerialized = localStorage.getItem(key);
            if (persistedStateSerialized) {
                const persistedState = JSON.parse(persistedStateSerialized);

                return persistedState;
            }
        } catch (err) {
            console.log(err);
            return initialValue;
        }
    });

    const setLocalStorageState = (value) => {
        // TODO: if it is functon?

        setState(value);
        localStorage.setItem(key, JSON.stringify(value));

    };

    return [
        state,
        setLocalStorageState,
    ];
};