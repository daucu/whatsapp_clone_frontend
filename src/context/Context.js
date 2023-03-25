import { createContext, useState } from 'react';

export const Context = createContext({
    profileType: "",
    changeProfileType: () => { },
    chatProfile: "",
    changeChatProfile: () => { },
    isProfileOpen: "",
    changeIsProfileOpen: () => { },
    searchMessages: "",
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
    return (
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
            {children}
        </Context.Provider>
    )
}
