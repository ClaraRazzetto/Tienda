const { createContext } = require("react");

const APIContext = createContext();

const APIProvider = ({children}) => {

    return (
        <APIContext.Provider >
            {children}
        </APIContext.Provider>
    )
}

export {APIProvider}
export default APIContext;