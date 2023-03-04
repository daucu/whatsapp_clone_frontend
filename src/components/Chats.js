import Chats_component from "./Chats_component";
import dp from "./images/dp.jfif";
import neeraj_dp from "./images/neeraj_dp.jpeg";
import { useState } from "react";
import lm from "./images/lm.jfif";
import car from "./images/car.jfif";
import New_chats from "./New_chats";
import { Link } from "react-router-dom";
import Unread_chats_component from "./Unread_chats_component";

function Chats(){
    const [ menu, setMenu ] = useState(false);
    const [ newChats, setNewChats ] = useState("");
    const [ community, setCommunity ] = useState("");
    const [ newGroup, setNewGroup ] = useState("");
    const [ newCommunity, setNewCommunity ] = useState("");
    const [ archived, setArchived ] = useState("");
    const [ notified, setNotified ] = useState(false);
    const [ starredMessages, setStarredMessages ] = useState("");
    const [ settings, setSettings ] = useState("");

    //unread chats filter
    
    const [ filter, setFilter ] = useState(false);

    function SetMenuChats(){
        setMenu(!menu);
    }

    function SetNewChatsTrue(){
        setNewChats(true);
    }
    function setNewChatsFalse(){
        setNewChats(false);
    }

    function SetCommunityTrue(){
        setCommunity(true);
    }
    function setCommunityFalse(){
        setCommunity(false);
    }

    function SetNewCommunityTrue(){
        setNewCommunity(true);
    }
    function setNewCommunityFalse(){
        setNewCommunity(false);
    }

    function SetArchivedTrue(){
        setArchived(true);
    }
    function setArchivedFalse(){
        setArchived(false);
    }

    function SetNewGroupTrue(){
        setNewGroup(true);
    }
    function setNewGroupFalse(){
        setNewGroup(false);
    }

    function alterFilter(){
        setFilter(!filter);
    }

    function setNotifiedTrue(){
        setNotified(true);
    }

    function setStarredMessagesTrue(){
        setStarredMessages(true);
    }
    function setStarredMessagesFalse(){
        setStarredMessages(false);
    }

    function setSettingsTrue(){
        setSettings(true);
    }
    function setSettingsFalse(){
        setSettings(false);
    }

    return(
        <div>
            <div className={ newGroup === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : newGroup ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                    <div className="h-[54px] w-full flex items-center">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" onClick={setNewGroupFalse}>
                            <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>
                        <p className="text-[19px] text-[#ffffffe6] font-medium">Add group participants</p>
                    </div>
                </div>
                <div className="h-[70px] flex items-center px-[10px] grow-0 shrink-0">
                    <div className="flex items-center w-full h-[35px] px-4">
                        <div className="w-full">
                            <input type="text" className="outline-none placeholder:text-[#3b4a54] text-[15px] placeholder:leading-[35px] px-2 py-1 w-full border-b" placeholder="Type contact name"/> 
                        </div>
                    </div>
                </div>
                <div className="new_chats_scroll overflow-x-scroll">
                    <div className="h-[72px] flex items-center pl-8 text-[#a52729] text-[16px]">#</div>
                    <div className="flex  hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 212 212" height="212" width="212" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                                    <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                                    <g>
                                        <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                        <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">+917456998001</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]"></div>
                        </div>
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={lm} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">+919560132730</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Hey there! I am using Whatsapp</div>
                        </div>
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={car} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">3747</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Hey there! I am using Whatsapp</div>
                        </div>
                    </div>
                    <div className="h-[72px] flex items-center pl-8 text-[#a52729] text-[16px]">A</div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={dp} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">Arman (You)</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Message yourself</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ newCommunity === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : newCommunity ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                    <div className="h-[54px] w-full flex items-center">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" onClick={setNewCommunityFalse}>
                            <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>
                        <p className="text-[19px] text-[#ffffffe6] font-medium">New Community</p>
                    </div>
                </div>
                <div className="h-[70px] flex items-center px-[10px] grow-0 shrink-0">
                    <div className="flex items-center w-full h-[35px] px-4">
                        <div className="w-full">
                            <input type="text" className="outline-none placeholder:text-[#3b4a54] text-[15px] placeholder:leading-[35px] px-2 py-1 w-full border-b" placeholder="Type contact name"/> 
                        </div>
                    </div>
                </div>
                <div className="new_chats_scroll overflow-x-scroll">
                    <div className="h-[72px] flex items-center pl-8 text-[#a52729] text-[16px]">#</div>
                    <div className="flex  hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 212 212" height="212" width="212" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                                    <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                                    <g>
                                        <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                        <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">+917456998001</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]"></div>
                        </div>
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={lm} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">+919560132730</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Hey there! I am using Whatsapp</div>
                        </div>
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={car} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">3747</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Hey there! I am using Whatsapp</div>
                        </div>
                    </div>
                    <div className="h-[72px] flex items-center pl-8 text-[#a52729] text-[16px]">A</div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={dp} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">Arman (You)</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Message yourself</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ archived === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : archived ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                    <div className="h-[54px] w-full flex items-center">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" onClick={setArchivedFalse}>
                            <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>
                        <p className="text-[19px] text-[#ffffffe6] font-medium">Archived</p>
                    </div>
                </div>
                <div className="h-[70px] flex items-center px-[10px] grow-0 shrink-0">
                    <div className="flex items-center w-full h-[35px] px-4">
                        <div className="w-full">
                            <input type="text" className="outline-none placeholder:text-[#3b4a54] text-[15px] placeholder:leading-[35px] px-2 py-1 w-full border-b" placeholder="Type contact name"/> 
                        </div>
                    </div>
                </div>
                <div className="new_chats_scroll overflow-x-scroll">
                    <div className="h-[72px] flex items-center pl-8 text-[#a52729] text-[16px]">#</div>
                    <div className="flex  hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 212 212" height="212" width="212" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                                    <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                                    <g>
                                        <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                        <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">+917456998001</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]"></div>
                        </div>
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={lm} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">+919560132730</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Hey there! I am using Whatsapp</div>
                        </div>
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={car} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">3747</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Hey there! I am using Whatsapp</div>
                        </div>
                    </div>
                    <div className="h-[72px] flex items-center pl-8 text-[#a52729] text-[16px]">A</div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={dp} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">Arman (You)</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Message yourself</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ newChats === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : newChats ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                    <div className="h-[54px] w-full flex items-center">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" onClick={setNewChatsFalse}>
                            <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>
                        <p className="text-[19px] text-[#ffffffe6] font-medium">New Chat</p>
                    </div>
                </div>
                <div className="h-[50px] flex items-center px-[10px] grow-0 shrink-0">
                    <div className="flex items-center bg-[#F0F2F5] rounded-lg w-full h-[35px] px-4">
                        <svg viewBox="0 0 24 24" height="20" width="20" class="fill-[#54656f]">
                            <path fill="#54656f" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                        </svg>
                        <div className="w-full"><input type="text" className="bg-[#F0F2F5] outline-none placeholder:text-[#3b4a54] text-[14px] placeholder:leading-[35px] px-7 w-full" placeholder="Search contacts"/></div>
                    </div>
                </div>
                <div className="new_chats_scroll overflow-x-scroll">
                    <div className="flex hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#a52729] flex items-center justify-center">
                                <svg viewBox="0 0 212 212" height="36" width="36" preserveAspectRatio="xMidYMid meet" class="" fill="white">
                                    <path class="background" d="M105.946 0.25C164.318 0.25 211.64 47.596 211.64 106C211.64 164.404 164.318 211.75 105.945 211.75C47.571 211.75 0.25 164.404 0.25 106C0.25 47.596 47.571 0.25 105.946 0.25Z" fill="#a52729"></path>
                                    <path class="primary" fill-rule="evenodd" clip-rule="evenodd" d="M102.282 77.2856C102.282 87.957 93.8569 96.5713 83.3419 96.5713C72.827 96.5713 64.339 87.957 64.339 77.2856C64.339 66.6143 72.827 58 83.3419 58C93.8569 58 102.282 66.6143 102.282 77.2856ZM150.35 80.1427C150.35 89.9446 142.612 97.857 132.954 97.857C123.296 97.857 115.5 89.9446 115.5 80.1427C115.5 70.3409 123.296 62.4285 132.954 62.4285C142.612 62.4285 150.35 70.3409 150.35 80.1427ZM83.3402 109.428C68.5812 109.428 39 116.95 39 131.928V143.714C39 147.25 41.8504 148 45.3343 148H121.346C124.83 148 127.68 147.25 127.68 143.714V131.928C127.68 116.95 98.0991 109.428 83.3402 109.428ZM126.804 110.853C127.707 110.871 128.485 110.886 129 110.886C143.759 110.886 174 116.95 174 131.929V141.571C174 145.107 171.15 148 167.666 148H134.854C135.551 146.007 135.995 143.821 135.995 141.571L135.75 131.071C135.75 121.51 130.136 117.858 124.162 113.971C122.772 113.067 121.363 112.15 120 111.143C119.981 111.123 119.962 111.098 119.941 111.07C119.893 111.007 119.835 110.931 119.747 110.886C121.343 110.747 124.485 110.808 126.804 110.853Z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px]">
                            New group
                        </div>
                    </div>
                    <div className="flex hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#a52729] flex items-center justify-center">
                                <svg viewBox="0 0 28 19" height="19" width="28" preserveAspectRatio="xMidYMid meet" class="" fill="#a52729">
                                    <path class="primary" fill-rule="evenodd" clip-rule="evenodd" d="M20.0836 6.83416C20.0967 6.92827 20.1139 7.01977 20.1351 7.10996C20.1457 7.1557 20.1573 7.20014 20.1699 7.24328C20.1948 7.33103 20.2238 7.41741 20.257 7.50208C20.3057 7.62659 20.3631 7.74717 20.4287 7.86283C20.4722 7.93865 20.5191 8.01315 20.5692 8.08373C20.7191 8.29755 20.8986 8.48655 21.1018 8.64447C21.2385 8.74999 21.3846 8.84147 21.538 8.91765C21.6555 8.97548 21.7769 9.0244 21.9011 9.06404C21.9848 9.09019 22.0705 9.11241 22.1581 9.13071C22.3376 9.16709 22.52 9.18547 22.7028 9.1856C24.1656 9.1856 25.3514 7.93912 25.3514 6.40152C25.3514 4.86391 24.1656 3.61742 22.7028 3.61742C22.52 3.61691 22.3375 3.6353 22.1581 3.67233C22.0713 3.68975 21.9855 3.712 21.9011 3.73899C21.7769 3.77819 21.6556 3.82668 21.538 3.88408C21.1547 4.07401 20.8219 4.36045 20.5692 4.71799C20.5195 4.78988 20.4722 4.86308 20.4287 4.9402C20.3629 5.05573 20.3055 5.17632 20.257 5.30095C20.2243 5.38461 20.1948 5.47087 20.1699 5.55845C20.1573 5.60289 20.1457 5.64733 20.1351 5.69177C20.1139 5.78196 20.0967 5.87346 20.0836 5.96757C20.0442 6.25494 20.0442 6.54678 20.0836 6.83416ZM7.91635 6.83416C7.90392 6.92827 7.88614 7.01977 7.865 7.10996C7.85439 7.1557 7.84278 7.20014 7.83018 7.24328C7.80534 7.33103 7.77629 7.41741 7.74314 7.50208C7.69429 7.62657 7.63685 7.74714 7.57129 7.86283C7.52789 7.93865 7.48101 8.01315 7.4309 8.08373C7.28093 8.29748 7.10143 8.48648 6.89832 8.64447C6.76157 8.74999 6.6155 8.84147 6.46212 8.91765C6.34456 8.97548 6.22322 9.0244 6.09902 9.06404C6.01521 9.09019 5.92954 9.11241 5.842 9.13071C5.66247 9.16708 5.48007 9.18546 5.29723 9.1856C3.83446 9.1856 2.64865 7.93912 2.64865 6.40152C2.64865 4.86391 3.83446 3.61742 5.29723 3.61742C5.4801 3.61692 5.66256 3.63531 5.842 3.67233C5.92873 3.68976 6.01453 3.71202 6.09902 3.73899C6.22319 3.77819 6.34453 3.82668 6.46212 3.88407C6.84541 4.07401 7.17818 4.36045 7.4309 4.71799C7.48064 4.78988 7.52789 4.86308 7.57129 4.9402C7.63709 5.05575 7.69454 5.17634 7.74314 5.30095C7.77584 5.38461 7.80531 5.47087 7.83018 5.55845C7.8427 5.60289 7.8543 5.64733 7.865 5.69177C7.88614 5.78196 7.90342 5.87345 7.91635 5.96756C7.95581 6.25494 7.95581 6.54678 7.91635 6.83416ZM27.8468 13.6264C27.8143 13.5695 27.7783 13.5074 27.7345 13.4386C27.6874 13.3645 27.6342 13.2852 27.5732 13.2006C27.5122 13.1159 27.4447 13.026 27.3688 12.9334C27.2929 12.8409 27.21 12.7456 27.1189 12.6478C26.7459 12.251 26.3196 11.9112 25.8531 11.6388C25.7058 11.5515 25.5492 11.4695 25.3839 11.3915C25.3789 11.3888 25.3745 11.3875 25.3698 11.3848C23.4911 10.5737 21.3746 10.5737 19.4959 11.3848C19.4694 11.3967 19.4445 11.41 19.4188 11.4232C19.3767 11.443 19.3381 11.4655 19.2973 11.4867C19.3202 11.4999 19.3434 11.5118 19.3661 11.525C19.8316 11.7975 20.2733 12.1107 20.6865 12.4613C20.9563 12.6896 21.213 12.9338 21.4555 13.1926C21.6054 13.3513 21.7424 13.5087 21.8677 13.6621C21.9961 13.8195 22.1086 13.9663 22.2091 14.1064C22.3125 14.2506 22.4017 14.3842 22.4814 14.5071C22.5568 14.6262 22.6206 14.732 22.6757 14.8298C22.7802 15.0091 22.8581 15.2035 22.9069 15.4064L22.9274 15.5492H28V13.9319C27.9558 13.8266 27.9046 13.7245 27.8468 13.6264ZM18.1157 4.52771C18.0952 4.37973 18.0682 4.23574 18.0348 4.09441C18.0182 4.02375 17.9999 3.95309 17.9801 3.88376C17.9407 3.74511 17.895 3.61045 17.8436 3.47846C17.767 3.28285 17.6768 3.09346 17.5736 2.91184C17.5053 2.79185 17.4318 2.67585 17.3529 2.56386C16.957 2.00113 16.4338 1.55112 15.8306 1.25463C15.646 1.16345 15.4552 1.0868 15.2598 1.02531C15.1281 0.983983 14.9934 0.947986 14.8559 0.919988C14.5739 0.86243 14.2872 0.833328 13.9999 0.833328C11.6415 0.833328 9.83784 2.72918 9.83784 5.209C9.83784 7.68881 11.6415 9.58333 13.9999 9.58333C14.2872 9.58333 14.5739 9.55423 14.8559 9.49667C14.9934 9.46867 15.1281 9.43267 15.2598 9.39134C15.4552 9.32986 15.646 9.25321 15.8306 9.16203C16.4338 8.86554 16.957 8.41553 17.3529 7.85279C17.4317 7.7408 17.5052 7.62481 17.5736 7.50482C17.6768 7.3232 17.767 7.13381 17.8436 6.9382C17.8944 6.80621 17.9407 6.67022 17.9801 6.5329C17.9999 6.46357 18.0182 6.39291 18.0348 6.32224C18.0682 6.18092 18.0952 6.03693 18.1157 5.88894C18.1776 5.43753 18.1776 4.97913 18.1157 4.52771ZM21.7225 15.3648C21.6762 15.281 21.6229 15.1891 21.5605 15.0877C21.4934 14.9795 21.4164 14.8619 21.3294 14.7376C21.2424 14.6132 21.1454 14.4807 21.0376 14.3455C20.9298 14.2104 20.8111 14.0684 20.6809 13.9265C20.4718 13.6967 20.2507 13.4796 20.0186 13.2763C19.661 12.9642 19.2789 12.6852 18.8765 12.4422C18.6664 12.3152 18.4434 12.1935 18.2074 12.0799C18.2009 12.0758 18.1942 12.0722 18.1872 12.0691C17.0911 11.5419 15.713 11.1742 13.9997 11.1742C12.2865 11.1742 10.9082 11.5419 9.81226 12.0691C9.77405 12.0867 9.73928 12.107 9.70208 12.1259C9.54196 12.2057 9.38809 12.2895 9.2402 12.3746C9.16004 12.4219 9.08166 12.4693 9.00506 12.5166C8.64626 12.7423 8.30392 12.9962 7.98093 13.2763C7.74876 13.4796 7.52762 13.6967 7.31855 13.9265C7.18863 14.0684 7.07003 14.209 6.96189 14.3455C6.85374 14.4821 6.75694 14.6118 6.66994 14.7376C6.58293 14.8633 6.50612 14.9795 6.439 15.0877C6.37658 15.1891 6.32333 15.281 6.2771 15.3648C6.27277 15.3713 6.26882 15.3781 6.26525 15.3851C6.21659 15.4729 6.17698 15.55 6.14564 15.6135C6.08297 15.7406 6.05405 15.8122 6.05405 15.8122V18.3333H21.9459V15.8122C21.8797 15.6586 21.8051 15.5092 21.7225 15.3648ZM5.08137 15.4078C5.09313 15.3077 5.1252 15.2113 5.17549 15.1248C5.2147 15.0481 5.24415 14.9556 5.30522 14.8485C5.37299 14.7308 5.42635 14.6263 5.50041 14.5087C5.57974 14.3844 5.66499 14.2508 5.76708 14.1094C5.86918 13.9679 5.98079 13.8185 6.10628 13.6651C6.23177 13.5117 6.36961 13.3531 6.52044 13.1918C7.09885 12.5757 7.75594 12.0433 8.4737 11.6091C8.54828 11.5641 8.62517 11.5192 8.7027 11.4756C8.66914 11.4584 8.63841 11.4399 8.60357 11.424C8.57785 11.4108 8.55213 11.3975 8.52642 11.3856C7.60024 10.9683 6.59752 10.7608 5.58643 10.7774C4.57538 10.7608 3.57271 10.9683 2.64657 11.3856C2.64168 11.3883 2.63731 11.3896 2.63243 11.3923C2.46681 11.4703 2.31007 11.5522 2.16259 11.6395C1.88006 11.8047 1.6118 11.9945 1.36077 12.2067C1.19789 12.345 1.04254 12.4925 0.895433 12.6483C0.804141 12.7462 0.720736 12.8414 0.645216 12.9339C0.569482 13.0265 0.501335 13.1164 0.440259 13.201C0.379183 13.2856 0.32518 13.365 0.277991 13.439C0.234273 13.5078 0.192871 13.5699 0.16034 13.6268C0.0524608 13.8145 0 13.9322 0 13.9322V15.5492H5.07198L5.08137 15.4078Z" fill="white"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px]">
                            New community
                        </div>
                    </div>
                    <div className="h-[72px] flex items-center text-[#a52729] text-[16px] pl-8">
                        CONTACTS ON WHATSAPP
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#a52729] flex items-center justify-center">
                                <img src={dp} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">Arman (You)</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Message yourself</div>
                        </div>
                    </div>
                    <div className="h-[72px] flex items-center pl-8 text-[#a52729] text-[16px]">#</div>
                    <div className="flex  hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 212 212" height="212" width="212" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                                    <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                                    <g>
                                        <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                        <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">+917456998001</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]"></div>
                        </div>
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={lm} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">+919560132730</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Hey there! I am using Whatsapp</div>
                        </div>
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={car} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">3747</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Hey there! I am using Whatsapp</div>
                        </div>
                    </div>
                    <div className="h-[72px] flex items-center pl-8 text-[#a52729] text-[16px]">A</div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={dp} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">Arman (You)</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Message yourself</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ settings === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : settings ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                    <div className="h-[54px] w-full flex items-center">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" onClick={setSettingsFalse}>
                            <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>
                        <p className="text-[19px] text-[#ffffffe6] font-medium">Settings</p>
                    </div>
                </div>
                <div className="h-[50px] flex items-center px-[10px] grow-0 shrink-0">
                    <div className="flex items-center bg-[#F0F2F5] rounded-lg w-full h-[35px] px-4">
                        <svg viewBox="0 0 24 24" height="20" width="20" class="fill-[#54656f]">
                            <path fill="#54656f" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                        </svg>
                        <div className="w-full"><input type="text" className="bg-[#F0F2F5] outline-none placeholder:text-[#3b4a54] text-[14px] placeholder:leading-[35px] px-7 w-full" placeholder="Search contacts"/></div>
                    </div>
                </div>
                <div className="new_chats_scroll overflow-x-scroll">
                    <div className="flex hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#a52729] flex items-center justify-center">
                                <svg viewBox="0 0 212 212" height="36" width="36" preserveAspectRatio="xMidYMid meet" class="" fill="white">
                                    <path class="background" d="M105.946 0.25C164.318 0.25 211.64 47.596 211.64 106C211.64 164.404 164.318 211.75 105.945 211.75C47.571 211.75 0.25 164.404 0.25 106C0.25 47.596 47.571 0.25 105.946 0.25Z" fill="#a52729"></path>
                                    <path class="primary" fill-rule="evenodd" clip-rule="evenodd" d="M102.282 77.2856C102.282 87.957 93.8569 96.5713 83.3419 96.5713C72.827 96.5713 64.339 87.957 64.339 77.2856C64.339 66.6143 72.827 58 83.3419 58C93.8569 58 102.282 66.6143 102.282 77.2856ZM150.35 80.1427C150.35 89.9446 142.612 97.857 132.954 97.857C123.296 97.857 115.5 89.9446 115.5 80.1427C115.5 70.3409 123.296 62.4285 132.954 62.4285C142.612 62.4285 150.35 70.3409 150.35 80.1427ZM83.3402 109.428C68.5812 109.428 39 116.95 39 131.928V143.714C39 147.25 41.8504 148 45.3343 148H121.346C124.83 148 127.68 147.25 127.68 143.714V131.928C127.68 116.95 98.0991 109.428 83.3402 109.428ZM126.804 110.853C127.707 110.871 128.485 110.886 129 110.886C143.759 110.886 174 116.95 174 131.929V141.571C174 145.107 171.15 148 167.666 148H134.854C135.551 146.007 135.995 143.821 135.995 141.571L135.75 131.071C135.75 121.51 130.136 117.858 124.162 113.971C122.772 113.067 121.363 112.15 120 111.143C119.981 111.123 119.962 111.098 119.941 111.07C119.893 111.007 119.835 110.931 119.747 110.886C121.343 110.747 124.485 110.808 126.804 110.853Z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px]">
                            New group
                        </div>
                    </div>
                    <div className="flex hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#a52729] flex items-center justify-center">
                                <svg viewBox="0 0 28 19" height="19" width="28" preserveAspectRatio="xMidYMid meet" class="" fill="#a52729">
                                    <path class="primary" fill-rule="evenodd" clip-rule="evenodd" d="M20.0836 6.83416C20.0967 6.92827 20.1139 7.01977 20.1351 7.10996C20.1457 7.1557 20.1573 7.20014 20.1699 7.24328C20.1948 7.33103 20.2238 7.41741 20.257 7.50208C20.3057 7.62659 20.3631 7.74717 20.4287 7.86283C20.4722 7.93865 20.5191 8.01315 20.5692 8.08373C20.7191 8.29755 20.8986 8.48655 21.1018 8.64447C21.2385 8.74999 21.3846 8.84147 21.538 8.91765C21.6555 8.97548 21.7769 9.0244 21.9011 9.06404C21.9848 9.09019 22.0705 9.11241 22.1581 9.13071C22.3376 9.16709 22.52 9.18547 22.7028 9.1856C24.1656 9.1856 25.3514 7.93912 25.3514 6.40152C25.3514 4.86391 24.1656 3.61742 22.7028 3.61742C22.52 3.61691 22.3375 3.6353 22.1581 3.67233C22.0713 3.68975 21.9855 3.712 21.9011 3.73899C21.7769 3.77819 21.6556 3.82668 21.538 3.88408C21.1547 4.07401 20.8219 4.36045 20.5692 4.71799C20.5195 4.78988 20.4722 4.86308 20.4287 4.9402C20.3629 5.05573 20.3055 5.17632 20.257 5.30095C20.2243 5.38461 20.1948 5.47087 20.1699 5.55845C20.1573 5.60289 20.1457 5.64733 20.1351 5.69177C20.1139 5.78196 20.0967 5.87346 20.0836 5.96757C20.0442 6.25494 20.0442 6.54678 20.0836 6.83416ZM7.91635 6.83416C7.90392 6.92827 7.88614 7.01977 7.865 7.10996C7.85439 7.1557 7.84278 7.20014 7.83018 7.24328C7.80534 7.33103 7.77629 7.41741 7.74314 7.50208C7.69429 7.62657 7.63685 7.74714 7.57129 7.86283C7.52789 7.93865 7.48101 8.01315 7.4309 8.08373C7.28093 8.29748 7.10143 8.48648 6.89832 8.64447C6.76157 8.74999 6.6155 8.84147 6.46212 8.91765C6.34456 8.97548 6.22322 9.0244 6.09902 9.06404C6.01521 9.09019 5.92954 9.11241 5.842 9.13071C5.66247 9.16708 5.48007 9.18546 5.29723 9.1856C3.83446 9.1856 2.64865 7.93912 2.64865 6.40152C2.64865 4.86391 3.83446 3.61742 5.29723 3.61742C5.4801 3.61692 5.66256 3.63531 5.842 3.67233C5.92873 3.68976 6.01453 3.71202 6.09902 3.73899C6.22319 3.77819 6.34453 3.82668 6.46212 3.88407C6.84541 4.07401 7.17818 4.36045 7.4309 4.71799C7.48064 4.78988 7.52789 4.86308 7.57129 4.9402C7.63709 5.05575 7.69454 5.17634 7.74314 5.30095C7.77584 5.38461 7.80531 5.47087 7.83018 5.55845C7.8427 5.60289 7.8543 5.64733 7.865 5.69177C7.88614 5.78196 7.90342 5.87345 7.91635 5.96756C7.95581 6.25494 7.95581 6.54678 7.91635 6.83416ZM27.8468 13.6264C27.8143 13.5695 27.7783 13.5074 27.7345 13.4386C27.6874 13.3645 27.6342 13.2852 27.5732 13.2006C27.5122 13.1159 27.4447 13.026 27.3688 12.9334C27.2929 12.8409 27.21 12.7456 27.1189 12.6478C26.7459 12.251 26.3196 11.9112 25.8531 11.6388C25.7058 11.5515 25.5492 11.4695 25.3839 11.3915C25.3789 11.3888 25.3745 11.3875 25.3698 11.3848C23.4911 10.5737 21.3746 10.5737 19.4959 11.3848C19.4694 11.3967 19.4445 11.41 19.4188 11.4232C19.3767 11.443 19.3381 11.4655 19.2973 11.4867C19.3202 11.4999 19.3434 11.5118 19.3661 11.525C19.8316 11.7975 20.2733 12.1107 20.6865 12.4613C20.9563 12.6896 21.213 12.9338 21.4555 13.1926C21.6054 13.3513 21.7424 13.5087 21.8677 13.6621C21.9961 13.8195 22.1086 13.9663 22.2091 14.1064C22.3125 14.2506 22.4017 14.3842 22.4814 14.5071C22.5568 14.6262 22.6206 14.732 22.6757 14.8298C22.7802 15.0091 22.8581 15.2035 22.9069 15.4064L22.9274 15.5492H28V13.9319C27.9558 13.8266 27.9046 13.7245 27.8468 13.6264ZM18.1157 4.52771C18.0952 4.37973 18.0682 4.23574 18.0348 4.09441C18.0182 4.02375 17.9999 3.95309 17.9801 3.88376C17.9407 3.74511 17.895 3.61045 17.8436 3.47846C17.767 3.28285 17.6768 3.09346 17.5736 2.91184C17.5053 2.79185 17.4318 2.67585 17.3529 2.56386C16.957 2.00113 16.4338 1.55112 15.8306 1.25463C15.646 1.16345 15.4552 1.0868 15.2598 1.02531C15.1281 0.983983 14.9934 0.947986 14.8559 0.919988C14.5739 0.86243 14.2872 0.833328 13.9999 0.833328C11.6415 0.833328 9.83784 2.72918 9.83784 5.209C9.83784 7.68881 11.6415 9.58333 13.9999 9.58333C14.2872 9.58333 14.5739 9.55423 14.8559 9.49667C14.9934 9.46867 15.1281 9.43267 15.2598 9.39134C15.4552 9.32986 15.646 9.25321 15.8306 9.16203C16.4338 8.86554 16.957 8.41553 17.3529 7.85279C17.4317 7.7408 17.5052 7.62481 17.5736 7.50482C17.6768 7.3232 17.767 7.13381 17.8436 6.9382C17.8944 6.80621 17.9407 6.67022 17.9801 6.5329C17.9999 6.46357 18.0182 6.39291 18.0348 6.32224C18.0682 6.18092 18.0952 6.03693 18.1157 5.88894C18.1776 5.43753 18.1776 4.97913 18.1157 4.52771ZM21.7225 15.3648C21.6762 15.281 21.6229 15.1891 21.5605 15.0877C21.4934 14.9795 21.4164 14.8619 21.3294 14.7376C21.2424 14.6132 21.1454 14.4807 21.0376 14.3455C20.9298 14.2104 20.8111 14.0684 20.6809 13.9265C20.4718 13.6967 20.2507 13.4796 20.0186 13.2763C19.661 12.9642 19.2789 12.6852 18.8765 12.4422C18.6664 12.3152 18.4434 12.1935 18.2074 12.0799C18.2009 12.0758 18.1942 12.0722 18.1872 12.0691C17.0911 11.5419 15.713 11.1742 13.9997 11.1742C12.2865 11.1742 10.9082 11.5419 9.81226 12.0691C9.77405 12.0867 9.73928 12.107 9.70208 12.1259C9.54196 12.2057 9.38809 12.2895 9.2402 12.3746C9.16004 12.4219 9.08166 12.4693 9.00506 12.5166C8.64626 12.7423 8.30392 12.9962 7.98093 13.2763C7.74876 13.4796 7.52762 13.6967 7.31855 13.9265C7.18863 14.0684 7.07003 14.209 6.96189 14.3455C6.85374 14.4821 6.75694 14.6118 6.66994 14.7376C6.58293 14.8633 6.50612 14.9795 6.439 15.0877C6.37658 15.1891 6.32333 15.281 6.2771 15.3648C6.27277 15.3713 6.26882 15.3781 6.26525 15.3851C6.21659 15.4729 6.17698 15.55 6.14564 15.6135C6.08297 15.7406 6.05405 15.8122 6.05405 15.8122V18.3333H21.9459V15.8122C21.8797 15.6586 21.8051 15.5092 21.7225 15.3648ZM5.08137 15.4078C5.09313 15.3077 5.1252 15.2113 5.17549 15.1248C5.2147 15.0481 5.24415 14.9556 5.30522 14.8485C5.37299 14.7308 5.42635 14.6263 5.50041 14.5087C5.57974 14.3844 5.66499 14.2508 5.76708 14.1094C5.86918 13.9679 5.98079 13.8185 6.10628 13.6651C6.23177 13.5117 6.36961 13.3531 6.52044 13.1918C7.09885 12.5757 7.75594 12.0433 8.4737 11.6091C8.54828 11.5641 8.62517 11.5192 8.7027 11.4756C8.66914 11.4584 8.63841 11.4399 8.60357 11.424C8.57785 11.4108 8.55213 11.3975 8.52642 11.3856C7.60024 10.9683 6.59752 10.7608 5.58643 10.7774C4.57538 10.7608 3.57271 10.9683 2.64657 11.3856C2.64168 11.3883 2.63731 11.3896 2.63243 11.3923C2.46681 11.4703 2.31007 11.5522 2.16259 11.6395C1.88006 11.8047 1.6118 11.9945 1.36077 12.2067C1.19789 12.345 1.04254 12.4925 0.895433 12.6483C0.804141 12.7462 0.720736 12.8414 0.645216 12.9339C0.569482 13.0265 0.501335 13.1164 0.440259 13.201C0.379183 13.2856 0.32518 13.365 0.277991 13.439C0.234273 13.5078 0.192871 13.5699 0.16034 13.6268C0.0524608 13.8145 0 13.9322 0 13.9322V15.5492H5.07198L5.08137 15.4078Z" fill="white"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px]">
                            New community
                        </div>
                    </div>
                    <div className="h-[72px] flex items-center text-[#a52729] text-[16px] pl-8">
                        CONTACTS ON WHATSAPP
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#a52729] flex items-center justify-center">
                                <img src={dp} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">Arman (You)</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Message yourself</div>
                        </div>
                    </div>
                    <div className="h-[72px] flex items-center pl-8 text-[#a52729] text-[16px]">#</div>
                    <div className="flex  hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 212 212" height="212" width="212" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                                    <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                                    <g>
                                        <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                        <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">+917456998001</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]"></div>
                        </div>
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={lm} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">+919560132730</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Hey there! I am using Whatsapp</div>
                        </div>
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={car} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">3747</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Hey there! I am using Whatsapp</div>
                        </div>
                    </div>
                    <div className="h-[72px] flex items-center pl-8 text-[#a52729] text-[16px]">A</div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={dp} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">Arman (You)</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Message yourself</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ community === "" ? "h-screen w-[400px] fixed left-[-800px] z-10 bg-white" : community ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <div className="h-[108px] bg-[#a52729] flex flex-col justify-end">
                    <div className="h-[54px] w-full flex items-center ">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" onClick={setCommunityFalse}>
                            <path fill="#ffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>
                        <p className="text-[19px] text-[#ffffffe6] font-medium">Communities</p>
                    </div>
                </div>
                <div className="communities overflow-x-scroll">
                    <div className="flex hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#a52729] flex items-center justify-center">
                                <svg viewBox="0 0 212 212" height="36" width="36" preserveAspectRatio="xMidYMid meet" class="" fill="white">
                                    <path class="background" d="M105.946 0.25C164.318 0.25 211.64 47.596 211.64 106C211.64 164.404 164.318 211.75 105.945 211.75C47.571 211.75 0.25 164.404 0.25 106C0.25 47.596 47.571 0.25 105.946 0.25Z" fill="#a52729"></path>
                                    <path class="primary" fill-rule="evenodd" clip-rule="evenodd" d="M102.282 77.2856C102.282 87.957 93.8569 96.5713 83.3419 96.5713C72.827 96.5713 64.339 87.957 64.339 77.2856C64.339 66.6143 72.827 58 83.3419 58C93.8569 58 102.282 66.6143 102.282 77.2856ZM150.35 80.1427C150.35 89.9446 142.612 97.857 132.954 97.857C123.296 97.857 115.5 89.9446 115.5 80.1427C115.5 70.3409 123.296 62.4285 132.954 62.4285C142.612 62.4285 150.35 70.3409 150.35 80.1427ZM83.3402 109.428C68.5812 109.428 39 116.95 39 131.928V143.714C39 147.25 41.8504 148 45.3343 148H121.346C124.83 148 127.68 147.25 127.68 143.714V131.928C127.68 116.95 98.0991 109.428 83.3402 109.428ZM126.804 110.853C127.707 110.871 128.485 110.886 129 110.886C143.759 110.886 174 116.95 174 131.929V141.571C174 145.107 171.15 148 167.666 148H134.854C135.551 146.007 135.995 143.821 135.995 141.571L135.75 131.071C135.75 121.51 130.136 117.858 124.162 113.971C122.772 113.067 121.363 112.15 120 111.143C119.981 111.123 119.962 111.098 119.941 111.07C119.893 111.007 119.835 110.931 119.747 110.886C121.343 110.747 124.485 110.808 126.804 110.853Z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px]">
                            New group
                        </div>
                    </div>
                    <div className="flex hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#a52729] flex items-center justify-center">
                                <svg viewBox="0 0 28 19" height="19" width="28" preserveAspectRatio="xMidYMid meet" class="" fill="#a52729">
                                    <path class="primary" fill-rule="evenodd" clip-rule="evenodd" d="M20.0836 6.83416C20.0967 6.92827 20.1139 7.01977 20.1351 7.10996C20.1457 7.1557 20.1573 7.20014 20.1699 7.24328C20.1948 7.33103 20.2238 7.41741 20.257 7.50208C20.3057 7.62659 20.3631 7.74717 20.4287 7.86283C20.4722 7.93865 20.5191 8.01315 20.5692 8.08373C20.7191 8.29755 20.8986 8.48655 21.1018 8.64447C21.2385 8.74999 21.3846 8.84147 21.538 8.91765C21.6555 8.97548 21.7769 9.0244 21.9011 9.06404C21.9848 9.09019 22.0705 9.11241 22.1581 9.13071C22.3376 9.16709 22.52 9.18547 22.7028 9.1856C24.1656 9.1856 25.3514 7.93912 25.3514 6.40152C25.3514 4.86391 24.1656 3.61742 22.7028 3.61742C22.52 3.61691 22.3375 3.6353 22.1581 3.67233C22.0713 3.68975 21.9855 3.712 21.9011 3.73899C21.7769 3.77819 21.6556 3.82668 21.538 3.88408C21.1547 4.07401 20.8219 4.36045 20.5692 4.71799C20.5195 4.78988 20.4722 4.86308 20.4287 4.9402C20.3629 5.05573 20.3055 5.17632 20.257 5.30095C20.2243 5.38461 20.1948 5.47087 20.1699 5.55845C20.1573 5.60289 20.1457 5.64733 20.1351 5.69177C20.1139 5.78196 20.0967 5.87346 20.0836 5.96757C20.0442 6.25494 20.0442 6.54678 20.0836 6.83416ZM7.91635 6.83416C7.90392 6.92827 7.88614 7.01977 7.865 7.10996C7.85439 7.1557 7.84278 7.20014 7.83018 7.24328C7.80534 7.33103 7.77629 7.41741 7.74314 7.50208C7.69429 7.62657 7.63685 7.74714 7.57129 7.86283C7.52789 7.93865 7.48101 8.01315 7.4309 8.08373C7.28093 8.29748 7.10143 8.48648 6.89832 8.64447C6.76157 8.74999 6.6155 8.84147 6.46212 8.91765C6.34456 8.97548 6.22322 9.0244 6.09902 9.06404C6.01521 9.09019 5.92954 9.11241 5.842 9.13071C5.66247 9.16708 5.48007 9.18546 5.29723 9.1856C3.83446 9.1856 2.64865 7.93912 2.64865 6.40152C2.64865 4.86391 3.83446 3.61742 5.29723 3.61742C5.4801 3.61692 5.66256 3.63531 5.842 3.67233C5.92873 3.68976 6.01453 3.71202 6.09902 3.73899C6.22319 3.77819 6.34453 3.82668 6.46212 3.88407C6.84541 4.07401 7.17818 4.36045 7.4309 4.71799C7.48064 4.78988 7.52789 4.86308 7.57129 4.9402C7.63709 5.05575 7.69454 5.17634 7.74314 5.30095C7.77584 5.38461 7.80531 5.47087 7.83018 5.55845C7.8427 5.60289 7.8543 5.64733 7.865 5.69177C7.88614 5.78196 7.90342 5.87345 7.91635 5.96756C7.95581 6.25494 7.95581 6.54678 7.91635 6.83416ZM27.8468 13.6264C27.8143 13.5695 27.7783 13.5074 27.7345 13.4386C27.6874 13.3645 27.6342 13.2852 27.5732 13.2006C27.5122 13.1159 27.4447 13.026 27.3688 12.9334C27.2929 12.8409 27.21 12.7456 27.1189 12.6478C26.7459 12.251 26.3196 11.9112 25.8531 11.6388C25.7058 11.5515 25.5492 11.4695 25.3839 11.3915C25.3789 11.3888 25.3745 11.3875 25.3698 11.3848C23.4911 10.5737 21.3746 10.5737 19.4959 11.3848C19.4694 11.3967 19.4445 11.41 19.4188 11.4232C19.3767 11.443 19.3381 11.4655 19.2973 11.4867C19.3202 11.4999 19.3434 11.5118 19.3661 11.525C19.8316 11.7975 20.2733 12.1107 20.6865 12.4613C20.9563 12.6896 21.213 12.9338 21.4555 13.1926C21.6054 13.3513 21.7424 13.5087 21.8677 13.6621C21.9961 13.8195 22.1086 13.9663 22.2091 14.1064C22.3125 14.2506 22.4017 14.3842 22.4814 14.5071C22.5568 14.6262 22.6206 14.732 22.6757 14.8298C22.7802 15.0091 22.8581 15.2035 22.9069 15.4064L22.9274 15.5492H28V13.9319C27.9558 13.8266 27.9046 13.7245 27.8468 13.6264ZM18.1157 4.52771C18.0952 4.37973 18.0682 4.23574 18.0348 4.09441C18.0182 4.02375 17.9999 3.95309 17.9801 3.88376C17.9407 3.74511 17.895 3.61045 17.8436 3.47846C17.767 3.28285 17.6768 3.09346 17.5736 2.91184C17.5053 2.79185 17.4318 2.67585 17.3529 2.56386C16.957 2.00113 16.4338 1.55112 15.8306 1.25463C15.646 1.16345 15.4552 1.0868 15.2598 1.02531C15.1281 0.983983 14.9934 0.947986 14.8559 0.919988C14.5739 0.86243 14.2872 0.833328 13.9999 0.833328C11.6415 0.833328 9.83784 2.72918 9.83784 5.209C9.83784 7.68881 11.6415 9.58333 13.9999 9.58333C14.2872 9.58333 14.5739 9.55423 14.8559 9.49667C14.9934 9.46867 15.1281 9.43267 15.2598 9.39134C15.4552 9.32986 15.646 9.25321 15.8306 9.16203C16.4338 8.86554 16.957 8.41553 17.3529 7.85279C17.4317 7.7408 17.5052 7.62481 17.5736 7.50482C17.6768 7.3232 17.767 7.13381 17.8436 6.9382C17.8944 6.80621 17.9407 6.67022 17.9801 6.5329C17.9999 6.46357 18.0182 6.39291 18.0348 6.32224C18.0682 6.18092 18.0952 6.03693 18.1157 5.88894C18.1776 5.43753 18.1776 4.97913 18.1157 4.52771ZM21.7225 15.3648C21.6762 15.281 21.6229 15.1891 21.5605 15.0877C21.4934 14.9795 21.4164 14.8619 21.3294 14.7376C21.2424 14.6132 21.1454 14.4807 21.0376 14.3455C20.9298 14.2104 20.8111 14.0684 20.6809 13.9265C20.4718 13.6967 20.2507 13.4796 20.0186 13.2763C19.661 12.9642 19.2789 12.6852 18.8765 12.4422C18.6664 12.3152 18.4434 12.1935 18.2074 12.0799C18.2009 12.0758 18.1942 12.0722 18.1872 12.0691C17.0911 11.5419 15.713 11.1742 13.9997 11.1742C12.2865 11.1742 10.9082 11.5419 9.81226 12.0691C9.77405 12.0867 9.73928 12.107 9.70208 12.1259C9.54196 12.2057 9.38809 12.2895 9.2402 12.3746C9.16004 12.4219 9.08166 12.4693 9.00506 12.5166C8.64626 12.7423 8.30392 12.9962 7.98093 13.2763C7.74876 13.4796 7.52762 13.6967 7.31855 13.9265C7.18863 14.0684 7.07003 14.209 6.96189 14.3455C6.85374 14.4821 6.75694 14.6118 6.66994 14.7376C6.58293 14.8633 6.50612 14.9795 6.439 15.0877C6.37658 15.1891 6.32333 15.281 6.2771 15.3648C6.27277 15.3713 6.26882 15.3781 6.26525 15.3851C6.21659 15.4729 6.17698 15.55 6.14564 15.6135C6.08297 15.7406 6.05405 15.8122 6.05405 15.8122V18.3333H21.9459V15.8122C21.8797 15.6586 21.8051 15.5092 21.7225 15.3648ZM5.08137 15.4078C5.09313 15.3077 5.1252 15.2113 5.17549 15.1248C5.2147 15.0481 5.24415 14.9556 5.30522 14.8485C5.37299 14.7308 5.42635 14.6263 5.50041 14.5087C5.57974 14.3844 5.66499 14.2508 5.76708 14.1094C5.86918 13.9679 5.98079 13.8185 6.10628 13.6651C6.23177 13.5117 6.36961 13.3531 6.52044 13.1918C7.09885 12.5757 7.75594 12.0433 8.4737 11.6091C8.54828 11.5641 8.62517 11.5192 8.7027 11.4756C8.66914 11.4584 8.63841 11.4399 8.60357 11.424C8.57785 11.4108 8.55213 11.3975 8.52642 11.3856C7.60024 10.9683 6.59752 10.7608 5.58643 10.7774C4.57538 10.7608 3.57271 10.9683 2.64657 11.3856C2.64168 11.3883 2.63731 11.3896 2.63243 11.3923C2.46681 11.4703 2.31007 11.5522 2.16259 11.6395C1.88006 11.8047 1.6118 11.9945 1.36077 12.2067C1.19789 12.345 1.04254 12.4925 0.895433 12.6483C0.804141 12.7462 0.720736 12.8414 0.645216 12.9339C0.569482 13.0265 0.501335 13.1164 0.440259 13.201C0.379183 13.2856 0.32518 13.365 0.277991 13.439C0.234273 13.5078 0.192871 13.5699 0.16034 13.6268C0.0524608 13.8145 0 13.9322 0 13.9322V15.5492H5.07198L5.08137 15.4078Z" fill="white"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px]">
                            New community
                        </div>
                    </div>
                    <div className="h-[72px] flex items-center text-[#a52729] text-[16px] pl-8">
                        CONTACTS ON WHATSAPP
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={dp} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">Arman (You)</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Message yourself</div>
                        </div>
                    </div>
                    <div className="h-[72px] flex items-center pl-8 text-[#a52729] text-[16px]">#</div>
                    <div className="flex  hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 212 212" height="212" width="212" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                                    <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                                    <g>
                                        <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                        <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">+917456998001</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]"></div>
                        </div>
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={lm} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">+919560132730</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Hey there! I am using Whatsapp</div>
                        </div>
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={car} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">3747</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Hey there! I am using Whatsapp</div>
                        </div>
                    </div>
                    <div className="h-[72px] flex items-center pl-8 text-[#a52729] text-[16px]">A</div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={dp} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">Arman (You)</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Message yourself</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ starredMessages === "" ? "h-screen w-[400px] fixed left-[-800px] z-10 bg-white" : starredMessages ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-[#f0f2f5] z-10" }>
                <div className="h-[60px] bg-[#f0f2f5] pl-[25px] pr-[20px] flex items-center justify-between">
                    <div className="h-[54px] w-full flex items-center cursor-pointer" onClick={setStarredMessagesFalse}>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <path fill="#54656f" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>
                        <p className="text-[16px] text-[#111b21] pl-7">Starred messages</p>
                    </div>
                    <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full hover:bg-[#8a8a8a] hover:transition-all cursor-pointer shrink-0">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <path fill="#54656f" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
                        </svg>
                    </div>
                </div>
                <div className="starred_messages overflow-y-scroll bg-[#f0f2f5] flex flex-col">
                    <div className="grow shrink flex items-center justify-center">
                        <p className="text-[14px] text-[#8696a0]">No starred messages</p>
                    </div>
                    <div className="grow-0 shrink-0 pt-[22px] pb-[12px] px-[16px] text-[#8696a0] text-[14px]">Use Whatsapp on your phone to see older chats and messages.</div>
                </div>
            </div>

            <div className="w-[400px] border-r border-[#919599]">
                <div className="h-[60px] bg-[#1E2321] flex items-center justify-between px-4 border-b border-white/50">
                    <div className="rounded-full h-[40px] w-[40px] bg-cover bg-center cursor-pointer" style={{backgroundImage:`url(${dp})`}}></div>
                    <div className="flex items-center">
                        <div className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-full active:bg-[#0F1110]" title="Communities" onClick={SetCommunityTrue}>
                            <svg viewBox="0 0 24 24" height="24" width="24"  class="fill-[#ffffffe6]  relative top-[-3px] left-[-2px]">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2146 12.1436C19.2257 12.2242 19.2405 12.3027 19.2587 12.38C19.2678 12.4192 19.2777 12.4573 19.2885 12.4942C19.3098 12.5695 19.3347 12.6435 19.3631 12.7161C19.4049 12.8228 19.4541 12.9261 19.5103 13.0253C19.5476 13.0903 19.5878 13.1541 19.6308 13.2146C19.7592 13.3979 19.9131 13.5599 20.0872 13.6953C20.2045 13.7857 20.3297 13.8641 20.4611 13.9294C20.5619 13.979 20.6659 14.0209 20.7723 14.0549C20.8441 14.0773 20.9175 14.0964 20.9926 14.112C21.1465 14.1432 21.3029 14.159 21.4596 14.1591C22.7133 14.1591 23.7297 13.0907 23.7297 11.7727C23.7297 10.4548 22.7133 9.38636 21.4596 9.38636C21.3028 9.38593 21.1464 9.40169 20.9926 9.43343C20.9183 9.44836 20.8448 9.46743 20.7723 9.49057C20.6659 9.52417 20.5619 9.56573 20.4611 9.61493C20.1326 9.77773 19.8474 10.0232 19.6308 10.3297C19.5881 10.3913 19.5476 10.4541 19.5103 10.5202C19.4539 10.6192 19.4047 10.7226 19.3631 10.8294C19.3351 10.9011 19.3098 10.975 19.2885 11.0501C19.2776 11.0882 19.2677 11.1263 19.2587 11.1644C19.2405 11.2417 19.2257 11.3201 19.2146 11.4008C19.1807 11.6471 19.1807 11.8972 19.2146 12.1436ZM8.78544 12.1436C8.77479 12.2242 8.75955 12.3027 8.74143 12.38C8.73233 12.4192 8.72238 12.4573 8.71158 12.4942C8.69029 12.5695 8.66539 12.6435 8.63697 12.7161C8.5951 12.8228 8.54587 12.9261 8.48968 13.0253C8.45248 13.0903 8.4123 13.1541 8.36935 13.2146C8.2408 13.3978 8.08694 13.5598 7.91285 13.6953C7.79563 13.7857 7.67043 13.8641 7.53896 13.9294C7.43819 13.979 7.33419 14.0209 7.22773 14.0549C7.1559 14.0773 7.08246 14.0964 7.00743 14.112C6.85355 14.1432 6.6972 14.159 6.54049 14.1591C5.28668 14.1591 4.27027 13.0907 4.27027 11.7727C4.27027 10.4548 5.28668 9.38636 6.54049 9.38636C6.69722 9.38594 6.85362 9.4017 7.00743 9.43343C7.08177 9.44837 7.15531 9.46745 7.22773 9.49057C7.33416 9.52417 7.43817 9.56573 7.53896 9.61493C7.86749 9.77773 8.15273 10.0232 8.36935 10.3297C8.41198 10.3913 8.45248 10.4541 8.48968 10.5202C8.54608 10.6192 8.59532 10.7226 8.63697 10.8294C8.66501 10.9011 8.69027 10.975 8.71158 11.0501C8.72231 11.0882 8.73226 11.1263 8.74143 11.1644C8.75955 11.2417 8.77436 11.3201 8.78544 11.4008C8.81927 11.6471 8.81927 11.8972 8.78544 12.1436ZM25.8687 17.9655C25.8408 17.9167 25.81 17.8635 25.7724 17.8045C25.732 17.741 25.6864 17.673 25.6341 17.6005C25.5818 17.5279 25.524 17.4509 25.459 17.3715C25.3939 17.2922 25.3229 17.2106 25.2447 17.1267C24.925 16.7866 24.5597 16.4953 24.1598 16.2618C24.0335 16.187 23.8993 16.1167 23.7576 16.0498C23.7533 16.0476 23.7496 16.0464 23.7455 16.0442C22.1352 15.3489 20.3211 15.3489 18.7108 16.0442C18.6881 16.0544 18.6667 16.0657 18.6447 16.077C18.6086 16.094 18.5756 16.1133 18.5405 16.1314C18.5601 16.1428 18.5801 16.153 18.5996 16.1643C18.9985 16.3978 19.3771 16.6663 19.7312 16.9668C19.9625 17.1625 20.1826 17.3718 20.3904 17.5937C20.5189 17.7297 20.6364 17.8646 20.7437 17.9961C20.8538 18.131 20.9503 18.2568 21.0364 18.377C21.125 18.5005 21.2015 18.615 21.2698 18.7204C21.3344 18.8224 21.3891 18.9131 21.4363 18.997C21.5259 19.1507 21.5927 19.3172 21.6345 19.4912L21.652 19.6136H26V18.2273C25.9621 18.1371 25.9182 18.0496 25.8687 17.9655ZM17.5278 10.1666C17.5102 10.0398 17.487 9.91635 17.4584 9.79522C17.4442 9.73465 17.4285 9.67408 17.4115 9.61466C17.3777 9.49581 17.3386 9.38039 17.2945 9.26726C17.2289 9.09959 17.1515 8.93725 17.0631 8.78158C17.0046 8.67873 16.9415 8.57931 16.8739 8.48332C16.5346 8.00097 16.0861 7.61525 15.5691 7.36112C15.4109 7.28296 15.2473 7.21726 15.0798 7.16456C14.967 7.12913 14.8515 7.09828 14.7337 7.07428C14.4919 7.02494 14.2462 7 13.9999 7C11.9785 7 10.4324 8.62502 10.4324 10.7506C10.4324 12.8761 11.9785 14.5 13.9999 14.5C14.2462 14.5 14.4919 14.4751 14.7337 14.4257C14.8515 14.4017 14.967 14.3709 15.0798 14.3354C15.2473 14.2827 15.4109 14.217 15.5691 14.1389C16.0861 13.8847 16.5346 13.499 16.8739 13.0167C16.9414 12.9207 17.0045 12.8213 17.0631 12.7184C17.1515 12.5627 17.2289 12.4004 17.2945 12.2327C17.338 12.1196 17.3777 12.003 17.4115 11.8853C17.4285 11.8259 17.4442 11.7654 17.4584 11.7048C17.487 11.5837 17.5102 11.4602 17.5278 11.3334C17.5808 10.9465 17.5808 10.5535 17.5278 10.1666ZM20.6193 19.4555C20.5796 19.3837 20.5339 19.3049 20.4804 19.218C20.4229 19.1253 20.3569 19.0245 20.2824 18.9179C20.2078 18.8113 20.1246 18.6978 20.0322 18.5819C19.9399 18.466 19.8381 18.3444 19.7265 18.2227C19.5473 18.0258 19.3577 17.8397 19.1588 17.6654C18.8523 17.3979 18.5247 17.1587 18.1798 16.9505C17.9998 16.8416 17.8086 16.7373 17.6063 16.64C17.6008 16.6364 17.595 16.6333 17.5891 16.6307C16.6495 16.1788 15.4683 15.8636 13.9998 15.8636C12.5313 15.8636 11.3499 16.1788 10.4105 16.6307C10.3778 16.6457 10.348 16.6631 10.3161 16.6793C10.1788 16.7477 10.0469 16.8195 9.92017 16.8925C9.85146 16.9331 9.78428 16.9737 9.71862 17.0142C9.41108 17.2077 9.11765 17.4253 8.84079 17.6654C8.6418 17.8397 8.45224 18.0257 8.27305 18.2227C8.16168 18.3444 8.06003 18.4649 7.96733 18.5819C7.87464 18.6989 7.79166 18.8102 7.71709 18.9179C7.64252 19.0257 7.57668 19.1253 7.51914 19.218C7.46564 19.3049 7.42 19.3837 7.38037 19.4555C7.37666 19.4611 7.37327 19.4669 7.37021 19.4729C7.32851 19.5482 7.29455 19.6143 7.26769 19.6687C7.21397 19.7777 7.18919 19.8391 7.18919 19.8391V22H20.8108V19.8391C20.754 19.7074 20.6901 19.5793 20.6193 19.4555ZM6.35546 19.4924C6.36554 19.4066 6.39303 19.324 6.43613 19.2498C6.46975 19.1841 6.49499 19.1048 6.54734 19.013C6.60542 18.9121 6.65115 18.8226 6.71464 18.7217C6.78264 18.6152 6.85571 18.5007 6.94322 18.3795C7.03072 18.2582 7.12639 18.1301 7.23395 17.9987C7.34152 17.8672 7.45967 17.7312 7.58895 17.5929C8.08473 17.0649 8.64795 16.6085 9.26317 16.2364C9.3271 16.1978 9.393 16.1593 9.45946 16.1219C9.43069 16.1072 9.40435 16.0913 9.37449 16.0777C9.35244 16.0664 9.3304 16.055 9.30836 16.0448C8.51449 15.6871 7.65502 15.5093 6.78837 15.5235C5.92176 15.5093 5.06232 15.6871 4.26849 16.0448C4.2643 16.0471 4.26055 16.0482 4.25636 16.0505C4.11441 16.1174 3.98006 16.1876 3.85365 16.2624C3.61148 16.404 3.38154 16.5667 3.16637 16.7486C3.02676 16.8672 2.89361 16.9935 2.76751 17.1272C2.68926 17.211 2.61777 17.2926 2.55304 17.372C2.48813 17.4513 2.42972 17.5283 2.37736 17.6009C2.32501 17.6734 2.27873 17.7414 2.23828 17.8049C2.20081 17.8638 2.16532 17.9171 2.13743 17.9658C2.04497 18.1267 2 18.2276 2 18.2276V19.6136H6.34741L6.35546 19.4924Z" fill="#ffffffe6"></path>
                            </svg>
                        </div>
                        <Link to="status" className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full active:bg-[#0F1110]" title="status">
                            <svg viewBox="0 0 24 24" height="24" width="24"  class="fill-[#ffffffe6]" >
                                <path fill="#ffffffe6" d="M12.072,1.761c-3.941-0.104-7.579,2.105-9.303,5.65c-0.236,0.486-0.034,1.07,0.452,1.305 c0.484,0.235,1.067,0.034,1.304-0.45c1.39-2.857,4.321-4.637,7.496-4.553c0.539,0.02,0.992-0.4,1.013-0.939s-0.4-0.992-0.939-1.013 C12.087,1.762,12.079,1.762,12.072,1.761z M1.926,13.64c0.718,3.876,3.635,6.975,7.461,7.925c0.523,0.13,1.053-0.189,1.183-0.712 c0.13-0.523-0.189-1.053-0.712-1.183c-3.083-0.765-5.434-3.262-6.012-6.386c-0.098-0.53-0.608-0.88-1.138-0.782 C2.178,12.6,1.828,13.11,1.926,13.64z M15.655,21.094c3.642-1.508,6.067-5.006,6.201-8.946c0.022-0.539-0.396-0.994-0.935-1.016 c-0.539-0.022-0.994,0.396-1.016,0.935c0,0.005,0,0.009,0,0.014c-0.107,3.175-2.061,5.994-4.997,7.209 c-0.501,0.201-0.743,0.769-0.543,1.27c0.201,0.501,0.769,0.743,1.27,0.543C15.642,21.1,15.648,21.097,15.655,21.094z"></path>
                                <path fill="#009588" d="M19,1.5c1.657,0,3,1.343,3,3s-1.343,3-3,3s-3-1.343-3-3S17.343,1.5,19,1.5z"></path>
                            </svg>
                        </Link>
                        <div className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full active:bg-[#0F1110]" title="New chat" onClick={SetNewChatsTrue}>
                            <svg viewBox="0 0 24 24" height="24" width="24"  class="fill-[#ffffffe6]" >
                                <path fill="#ffffffe6" enable-background="new    " d="M19.005,3.175H4.674C3.642,3.175,3,3.789,3,4.821V21.02 l3.544-3.514h12.461c1.033,0,2.064-1.06,2.064-2.093V4.821C21.068,3.789,20.037,3.175,19.005,3.175z M14.016,13.044H7.041V11.1 h6.975V13.044z M17.016,9.044H7.041V7.1h9.975V9.044z"></path>
                            </svg>
                        </div>
                        <div className="relative">
                                <div className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full active:bg-[#0F1110]" title="Menu" onClick={SetMenuChats}>
                                    <svg viewBox="0 0 24 24" height="24" width="24"  class="fill-[#ffffffe6]" >
                                        <path fill="#ffffffe6" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
                                    </svg>
                                </div>
                                <div className={ menu ? "bg-white rounded-sm shadow-md py-[6px] absolute top-[46px] left-[-130px] w-[180px] h-[252px] animate-chats_menu overflow-hidden" : "w-0 h-0 overflow-hidden" }>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={SetNewGroupTrue}>New group</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={SetNewCommunityTrue}>New community</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={SetArchivedTrue}>Archived</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={setStarredMessagesTrue}>Starred messages</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={setSettingsTrue}>Settings</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Log out</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white">
                    <div className="h-[50px] flex items-center pl-[10px] grow-0 shrink-0 bg-[#1e2321]">
                        <div className="flex items-center bg-[#0f1110] rounded-lg w-full h-[35px] px-4">
                            <svg viewBox="0 0 24 24" height="20" width="20" class="fill-[#54656f]">
                                <path fill="#ffffffe6" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                            </svg>
                            <div className="w-full">
                                <input type="text" className={ filter ? "hidden" : "bg-[#0f1110]  outline-none placeholder:text-white/70 text-[13px] px-7 w-full h-[35px]" }  placeholder="Search or start a new chat" title="Search input textbox"/>
                                <input type="text" className={ filter ? "bg-[#0f1110] outline-none placeholder:text-white/70 text-[13px] px-7 w-full" : "hidden" } placeholder="Search unread chats" title="Search input textbox"/>
                            </div>
                        </div>
                        <div className="w-[50px] h-[40px] flex items-center justify-center cursor-pointer" title="Unread chats filter" onClick={alterFilter}>
                            <div className={ filter ? "flex items-center justify-center h-[28px] w-[28px] rounded-full bg-[#a52729]" : "flex items-center justify-center h-[30px] w-[30px] rounded-full" }>
                                <svg viewBox="0 0 24 24" height="20" width="20"  class="fill-[#54656f]">
                                    <path fill="#ffffffe6" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={ (filter || notified) ? "hidden" : "flex items-center h-[89px] bg-[#a52729] px-[15px] grow-0 shrink-0" } >
                        <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell-slash-fill fill-[#a52729]" viewBox="0 0 16 16" style={{transform: "rotateY(180deg)"}}>
                                <path d="M5.164 14H15c-1.5-1-2-5.902-2-7 0-.264-.02-.523-.06-.776L5.164 14zm6.288-10.617A4.988 4.988 0 0 0 8.995 2.1a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 7c0 .898-.335 4.342-1.278 6.113l9.73-9.73zM10 15a2 2 0 1 1-4 0h4zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75L.625 15.625z"/>
                            </svg>
                        </div>
                        <div className="grow shrink h-[48px] px-3 flex flex-col justify-evenly">
                            <p className="text-[16px] leading-[21px] text-white/90">Get notified of new messages</p>
                            <a href="" className="hover:underline text-[14px] text-white/70 flex items-center">
                                <p>Turn on desktop notifications</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-chevron-right fill-white/70 mt-1" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </a>
                        </div>
                        <div className="cursor-pointer" onClick={setNotifiedTrue}>
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="#ffffffe6" enable-background="new 0 0 24 24" >
                                <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className={ filter ? "hidden" : notified ? "chats_container_notified overflow-y-scroll chats_scroll" : "chats_container overflow-y-scroll chats_scroll" }>
                        <Chats_component/>
                    </div>
                    <div className={ filter ? "chats_container unread_chats_container overflow-y-scroll chats_scroll" : "hidden" }>
                        <Unread_chats_component/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Chats;