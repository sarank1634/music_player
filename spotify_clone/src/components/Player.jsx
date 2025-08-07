import { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";


const Player = () => {

    const {seekBar, seekBg, playStatus, Play, Pause} = useContext(PlayerContext)
    
    return(
        <div className="h-[15%] bg-black flex justify-between items-center text-white px-4 ">
              <div className="lg:flex items-center gap-4">
                <img className="w-12" src={songsData[0].image} alt="" />
                <div>
                    <p>{songsData[0].name}</p>
                    <p>{songsData[0].desc.slice(0,12)}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 m-auto">
                <div className="flex gap-4">
                    <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
                    <img onClick={Play} className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
                    <img onClick={Pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
                </div>
                <div ref={seekBg} className="flex items-center gap-5">
                    <p>1:06</p>
                    <div className="w-[60vw] max-w-[500px] bg-gray-800 rounded-full cursor-pointer">
                       <hr ref={seekBar} className="h-1  w-0 bg-green-800 rounded-full" /> 
                    </div>
                    <p>3:20</p>
                </div>
              </div>
              <div cla ssName="flex items-center gap-2 opacity-75">
                <img className="w-4" src={assets.plays_icon} alt="" />
                <img className="w-4" src={assets.mic_icon} alt="" />
                <img className="w-4" src={assets.queue_icon} alt="" />
                <img className="w-4" src={assets.speaker_icon} alt="" />
                <img className="w-4" src={assets.volume_icon} alt="" />
                <img className="w-20 bg-slate-50 h-1 rounded" src={assets.clock_icon} alt="" />
              </div>

            
        </div>
    )
}


export default Player;
