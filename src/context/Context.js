import {createContext, useState} from 'react';

export const Context = createContext({
    profileType: "",
    changeProfileType: () => {},
    profileDp: "",
    changeProfileDp: () => {},
    profileName: "",
    changeProfileName: () => {},
    profileLastSeen: "",
    changeProfileLastSeen: () => {},
    profileOnline: false,
    changeProfileOnline: () => {},
    searchMessages: "",
    changeSearchMessages: () => {},
});

export const ContextProvider = ({children}) => {
    const [profileType, setProfileType] = useState("");
    const [profileDp, setProfileDp] = useState("");
    const [profileName, setProfileName] = useState("");
    const [profileLastSeen, setProfileLastSeen] = useState("");
    const [profileOnline, setProfileOnline] = useState(false);
    const [searchMessages, setSearchMessages] = useState("");

    const changeProfileType = (type) => {
        setProfileType(type);
    }
    const changeProfileDp = (dp) => {
        setProfileDp(dp);
    }
    const changeProfileName = (name) => {
        setProfileName(name);
    }
    const changeProfileLastSeen = (last_seen) => {
        setProfileLastSeen(last_seen);
    }
    const changeProfileOnline = (online) => {
        setProfileOnline(online);
    }
    const changeSearchMessages = (search) => {
        setSearchMessages(search);
    }
    return (
        <Context.Provider value={{profileType, changeProfileType, profileDp, changeProfileDp, profileName, changeProfileName, profileLastSeen, changeProfileLastSeen, profileOnline, changeProfileOnline }}>
            {children}
        </Context.Provider>
    )
}
