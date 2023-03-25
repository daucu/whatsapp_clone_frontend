import { createContext, useState } from 'react';

export const Context = createContext({
    profileType: "",
    changeProfileType: () => { },
    chatProfile: "",
    changeChatProfile: () => { },
    isProfileOpen: "",
    changeIsProfileOpen: () => { },
    searchMessages: "",
<<<<<<< HEAD
    changeSearchMessages: () => { },
    chatMessages: [],
    changeChatMessages: () => { },
});

export const ContextProvider = ({ children }) => {
    const [profileType, setProfileType] = useState("group");
    const [isProfileOpen, setIsProfileOpen] = useState("");
    const [searchMessages, setSearchMessages] = useState("");
    const [chatProfile, setChatProfile] = useState({});
    const [chatMessages, setChatMessages] = useState([]);

    const changeChatMessages = (value) => {
        setChatMessages(value);
    }

=======
    changeSearchMessages: () => {},
    videoCall: "",
    changeVideoCall: () => {},
    audioCall: "",
    changeAudioCall: () => {},
});

export const ContextProvider = ({children}) => {
    const [profileType, setProfileType] = useState("");
    const [isProfileOpen, setIsProfileOpen] = useState("");
    const [searchMessages, setSearchMessages] = useState("");
    const [chatProfile, setChatProfile] = useState({});
    const [videoCall, setVideoCall] = useState("");
    const [audioCall, setAudioCall] = useState("");
>>>>>>> 3bc84e0b6fecbfec467a6f0bb948ae2a9b654c5a

    const changeProfileType = (value) => {
        setProfileType(value);
    }
    const changeChatProfile = (value) => {
        setChatProfile(value);
    }
    const changeIsProfileOpen = (value) => {
        setIsProfileOpen(value);
    }
    const changeSearchMessages = (value) => {
        setSearchMessages(value);
    }
    const changeVideoCall = (value) => {
        setVideoCall(value);
    }
    const changeAudioCall = (value) => {
        setAudioCall(value);
    }
    return (
<<<<<<< HEAD
        <Context.Provider value={{ 
            profileType, 
            changeProfileType, 
            isProfileOpen, 
            changeIsProfileOpen, 
            searchMessages, 
            changeSearchMessages, 
            chatProfile, 
            changeChatProfile,
            chatMessages,
            changeChatMessages,
             }}>
=======
        <Context.Provider value={{ profileType, changeProfileType, isProfileOpen, changeIsProfileOpen,  searchMessages, changeSearchMessages, chatProfile, changeChatProfile, videoCall, changeVideoCall, audioCall, changeAudioCall }}>
>>>>>>> 3bc84e0b6fecbfec467a6f0bb948ae2a9b654c5a
            {children}
        </Context.Provider>
    )
}
