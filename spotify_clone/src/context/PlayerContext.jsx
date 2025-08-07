import { createContext, useRef, useState} from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);// store 
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({ //set time status
        currentTime: {
            second:0,
            minute:0
        },
        totalTime:{
            second: 0,
            minute: 0
        }
    })

    const Play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const Pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        Play, Pause

    }

    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;