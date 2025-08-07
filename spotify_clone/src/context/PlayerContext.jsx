import { createContext } from "react";



const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const contextValue = {

    }

    return(
        <PlayerContext.Provider>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;