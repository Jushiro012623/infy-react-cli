import { createContext, useState } from 'react'

export const __NAME__ = createContext(undefined)

const __NAME__Provider = ({ children }) => {

    const [state, setState] = useState(null);

    return (
        <__NAME__.Provider value={{state, setState}} >
            {children}
        </__NAME__.Provider>
    );
}

export default __NAME__Provider;