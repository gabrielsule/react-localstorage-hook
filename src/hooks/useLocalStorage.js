import React, { useState } from 'react';

const useLocalStorage = (key, initialValue) => {

    const [data, setData] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(data) : value;

            setData(valueToStore);

            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [data, setValue];
}

export default useLocalStorage