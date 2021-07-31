import { useState, useEffect } from 'react'

const useLocalStorage = (key, initialValue) => {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const readValue = () => {
        // Prevent build error "window is undefined" but keep keep working
        if (typeof window === 'undefined') {
            return initialValue
        }

        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.warn(`Error reading localStorage key “${key}”:`, error)
            return initialValue
        }
    }
    const [storedValue, setStoredValue] = useState(readValue)
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
        if (typeof window == 'undefined') {
            console.warn(
                `Tried setting localStorage key “${key}” even though environment is not a client`,
            )
        }

        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));

            // Save state
            setStoredValue(valueToStore);
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.warn(`Error setting localStorage key “${key}”:`, error)
        }
    };

    useEffect(() => {
        setStoredValue(readValue())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const handleStorageChange = () => {
            setStoredValue(readValue())
        }

        // this only works for other documents, not the current one
        window.addEventListener('storage', handleStorageChange)

        // this is a custom event, triggered in writeValueToLocalStorage
        window.addEventListener('local-storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
            window.removeEventListener('local-storage', handleStorageChange)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [])

    return [storedValue, setValue];
}

export default useLocalStorage