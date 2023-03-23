import React, { useContext, useEffect } from 'react';
import Chat_section from '../chat_section/Chat_section';
import Profile_details from '../profile_details/Profile_details';
import Search_messages_component from '../search_messages/Search_messages_component';
import { useState } from 'react';
import {Context} from '../../context/Context';

export default function Right_component(props) {
    const [ searchMessages, setSearchMessages ] = useState("");
    const [ videoCall, setVideoCall ] = useState(false);
    const [ audioCall, setAudioCall ] = useState(false);
    const {profileType} = useContext(Context);
  return (
    
    <div className='flex'>
        <div className='grow'>
            <Chat_section />
        </div>

        <div className={profileType === "" ? "" : profileType ? "animate-search_messages_full overflow-hidden w-full h-screen" : "animate-search_messages_zero overflow-hidden w-0 h-screen"}>
            <Profile_details profileType={profileType}  />
        </div>
        
        <div className={ searchMessages ? "" : searchMessages ? "animate-search_messages_full overflow-hidden w-full h-screen" : "animate-search_messages_zero overflow-hidden w-0 h-screen" }>
            <Search_messages_component/>
        </div>

        <div className={ videoCall ? "fixed w-screen min-h-screen flex items-center justify-center bg-black/80 z-10 opacity-0 animate-opacity left-0" : "hidden"}>
            <div className="bg-white h-[300px] w-[600px] rounded-md shadow-xl p-3">
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#000" enable-background="new 0 0 24 24" onClick={()=>setVideoCall(false)}>
                    <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                </svg>
            </div>
        </div>

        <div className={ audioCall ? "fixed w-screen min-h-screen flex items-center justify-center bg-black/80 z-10 opacity-0 animate-opacity left-0" : "hidden"}>
            <div className="bg-white h-[160px] w-[400px] rounded-md shadow-xl p-3">
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#000" enable-background="new 0 0 24 24" onClick={()=>setAudioCall(false)}>
                    <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                </svg>
            </div>
        </div>
    </div>
  )
}
