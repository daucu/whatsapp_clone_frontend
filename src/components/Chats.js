import Chats_component from "./Chats_component";
import dp from "./images/dp.jfif";
import neeraj_dp from "./images/neeraj_dp.jpeg";
import { useState } from "react";
import lm from "./images/lm.jfif";
import car from "./images/car.jfif";
import New_chats from "./New_chats";
import { Link } from "react-router-dom";
import Unread_chats_component from "./Unread_chats_component";
import Select_chats from "./Select_chats";

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
    const [ selectChats, setSelectChats ] = useState(false);

    //unread chats filter
    
    const [ filter, setFilter ] = useState("");
    return(
        <div>
            <div className={ newGroup === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : newGroup ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                    <div className="h-[54px] w-full flex items-center">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" onClick={()=>setNewGroup(false)}>
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
                <div>

                </div>
                <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                    <div className="h-[54px] w-full flex items-center">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" onClick={()=>setNewCommunity(false)}>
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
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" onClick={()=>setArchived(false)}>
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
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" onClick={()=>setNewChats(false)}>
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
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" onClick={()=>setSettings(false)}>
                            <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>
                        <p className="text-[19px] text-[#ffffffe6] font-medium">Settings</p>
                    </div>
                </div>
                
                <div className="settings_scroll_container overflow-y-scroll">
                    <div className="h-[50px] flex items-center px-[10px] grow-0 shrink-0">
                        <div className="flex items-center bg-[#F0F2F5] rounded-lg w-full h-[35px] px-4">
                            <svg viewBox="0 0 24 24" height="20" width="20" class="fill-[#54656f]">
                                <path fill="#54656f" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                            </svg>
                            <div className="w-full">
                                <input type="text" className="bg-[#F0F2F5] outline-none placeholder:text-[#3b4a54] text-[14px] placeholder:leading-[35px] px-7 w-full"/>
                            </div>
                        </div>
                    </div>
                    <div className="h-[114px] flex my-2">
                        <div className="w-[120px] h-[114px] grow-0 shrink-0 flex items-center justify-center">
                            <img src={dp} alt=""  className="h-[82px] w-[82px] rounded-full"/>
                        </div>
                        <div className="grow shrink flex items-center">
                            <div className="h-[48px]">
                                <div className="h-[28px] text-[#111b21] text-[19px] leading-[28px]">Arman Khan (You)</div>
                                <div className="h-[20px] text-[#667781] text-[13px] leading-[20px]">Waiting for u..... My Life.</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-[60px] flex items-center">
                            <div className="w-[74px] flex items-center justify-center">
                                <svg viewBox="0 0 16 21" height="21" width="16" preserveAspectRatio="xMidYMid meet" class="" fill="#8696a0">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.71003V2.50003C12.42 2.50003 16 6.08003 16 10.5C16 11.54 15.8 12.54 15.43 13.45C15.16 14.12 14.3 14.3 13.79 13.79C13.52 13.52 13.41 13.11 13.56 12.75C13.85 12.06 14 11.29 14 10.5C14 7.19003 11.31 4.50003 8 4.50003V6.29003C8 6.74003 7.46 6.96003 7.14 6.65003L4.35 3.86003C4.15 3.66003 4.15 3.35003 4.35 3.15003L7.15 0.360031C7.46 0.0400305 8 0.260031 8 0.71003ZM2 10.5C2 13.81 4.69 16.5 8 16.5V14.71C8 14.26 8.54 14.04 8.85 14.35L11.64 17.14C11.84 17.34 11.84 17.65 11.64 17.85L8.85 20.64C8.54 20.96 8 20.74 8 20.29V18.5C3.58 18.5 0 14.92 0 10.5C0 9.46003 0.2 8.46003 0.57 7.55003C0.84 6.88003 1.7 6.70003 2.21 7.21003C2.48 7.48003 2.59 7.89003 2.44 8.25003C2.15 8.94003 2 9.71003 2 10.5Z" fill="#8696A0"></path>
                                </svg>
                            </div>
                            <div className="text-[17px] text-[#111b21] h-full flex items-center border-b grow leading-[22px]">
                                <div>
                                    <div className="h-[22px]">Syncing older messages</div>
                                    <div className="h-[20px] text-[#8696a0] text-[14px] leading-[20px]">61% complete</div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[60px] flex items-center">
                            <div className="w-[74px] flex items-center justify-center">
                                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                    <path fill="#8696A0" d="M12,21.7c0.9,0,1.7-0.8,1.7-1.7h-3.4C10.3,20.9,11.1,21.7,12,21.7z M17.6,16.5v-4.7 c0-2.7-1.8-4.8-4.3-5.4V5.8c0-0.7-0.6-1.3-1.3-1.3s-1.3,0.6-1.3,1.3v0.6C8.2,7,6.4,9.1,6.4,11.8v4.7l-1.7,1.7v0.9h14.6v-0.9 L17.6,16.5z"></path>
                                </svg>
                            </div>
                            <div className="text-[17px] text-[#111b21] h-full flex items-center border-b grow">Notifications</div>
                        </div>
                        <div className="h-[60px] flex items-center">
                            <div className="w-[74px] flex items-center justify-center">
                                <svg viewBox="0 0 28 35" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1">
                                    <path d="M14,1.10204082 C18.5689011,1.10204082 22.2727273,4.80586698 22.2727273,9.37476809 L22.272,12.1790408 L22.3564837,12.181606 C24.9401306,12.294858 27,14.4253101 27,17.0368705 L27,29.4665309 C27,32.1506346 24.824104,34.3265306 22.1400003,34.3265306 L5.85999974,34.3265306 C3.175896,34.3265306 1,32.1506346 1,29.4665309 L1,17.0368705 C1,14.3970988 3.10461313,12.2488858 5.72742704,12.178644 L5.72727273,9.37476809 C5.72727273,4.80586698 9.43109889,1.10204082 14,1.10204082 Z M14,19.5600907 C12.0418995,19.5600907 10.4545455,21.2128808 10.4545455,23.2517007 C10.4545455,25.2905206 12.0418995,26.9433107 14,26.9433107 C15.9581005,26.9433107 17.5454545,25.2905206 17.5454545,23.2517007 C17.5454545,21.2128808 15.9581005,19.5600907 14,19.5600907 Z M14,4.79365079 C11.4617216,4.79365079 9.39069048,6.79417418 9.27759175,9.30453585 L9.27272727,9.52092352 L9.272,12.1760408 L18.727,12.1760408 L18.7272727,9.52092352 C18.7272727,6.91012289 16.6108006,4.79365079 14,4.79365079 Z" fill="#8696a0"></path>
                                </svg>
                            </div>
                            <div className="text-[17px] text-[#111b21] h-full flex items-center border-b grow">Privacy</div>
                        </div>
                        <div className="h-[60px] flex items-center">
                            <div className="w-[74px] flex items-center justify-center">
                                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1">
                                    <path d="M12.027027,2 L4,5.56756757 L4,10.9189189 C4,15.8689189 7.42486486,20.4978378 12.027027,21.6216216 C16.6291892,20.4978378 20.0540541,15.8689189 20.0540541,10.9189189 L20.0540541,5.56756757 L12.027027,2 Z M12.027027,11.8018919 L18.2702703,11.8018919 C17.7975676,15.4764865 15.3448649,18.7497297 12.027027,19.7754054 L12.027027,11.8108108 L5.78378378,11.8108108 L5.78378378,6.72702703 L12.027027,3.95324324 L12.027027,11.8018919 Z" fill="#8696a0" fill-rule="nonzero"></path>
                                </svg>
                            </div>
                            <div className="text-[17px] text-[#111b21] h-full flex items-center border-b grow">Security</div>
                        </div>
                        <div className="h-[60px] flex items-center">
                            <div className="w-[74px] flex items-center justify-center">
                                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1">
                                    <path d="M12,1 L15.219275,4.21927498 L19.780725,4.21927498 L19.780725,8.78072502 L23,12 L19.780725,15.219275 L19.780725,19.780725 L15.219275,19.780725 L12,23 L8.78072502,19.780725 L4.21927498,19.780725 L4.21927498,15.219275 L1,12 L4.21927498,8.78072502 L4.21927498,4.21927498 L8.78072502,4.21927498 L12,1 Z M12,6 L12,18 C15.31,18 18,15.31 18,12 C18,8.76522727 15.4308833,6.12259298 12.2246968,6.00414409 L12,6 Z" fill="#8696a0" fill-rule="nonzero"></path>
                                </svg>
                            </div>
                            <div className="text-[17px] text-[#111b21] h-full flex items-center border-b grow">Theme</div>
                        </div>
                        <div className="h-[60px] flex items-center">
                            <div className="w-[74px] flex items-center justify-center">
                                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                    <path fill="#8696a0" d="M4.9,5.9h6.4V4.1H4.9c-1,0-1.8,0.8-1.8,1.8v6.4h1.8V5.9z M10.2,13.9l-3.6,4.4h10.7 l-2.7-3.6l-1.8,2.4L10.2,13.9z M16.4,9.9c0-0.7-0.6-1.3-1.3-1.3s-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3S16.4,10.6,16.4,9.9z M19.1,4.1 h-6.4v1.8h6.4v6.4h1.8V5.9C20.9,4.9,20.1,4.1,19.1,4.1z M19.1,20.1h-6.4v1.8h6.4c1,0,1.8-0.8,1.8-1.8v-6.4h-1.8V20.1z M4.9,13.7H3.1 v6.4c0,1,0.8,1.8,1.8,1.8h6.4v-1.8H4.9V13.7z"></path>
                                </svg>
                            </div>
                            <div className="text-[17px] text-[#111b21] h-full flex items-center border-b grow">Chat Wallpaper</div>
                        </div>
                        <div className="h-[60px] flex items-center">
                            <div className="w-[74px] flex items-center justify-center">
                                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1">
                                    <path d="M19.4725963,12.2 L15.1725963,12.2 L15.1725963,2.9 C15.1725963,2.4 14.7725963,2 14.2725963,2 L9.97259631,2 C9.47259631,2 9.07259631,2.4 9.07259631,2.9 L9.07259631,12.2 L4.77259631,12.2 C3.97259631,12.2 3.77259631,12.7 4.27259631,13.3 L11.0725963,20.6 C11.7725963,21.5 12.4725963,21.3 13.1725963,20.6 L19.9725963,13.3 C20.4725963,12.7 20.2725963,12.2 19.4725963,12.2 Z" fill="#8696a0"></path>
                                </svg>
                            </div>
                            <div className="text-[17px] text-[#111b21] h-full flex items-center border-b grow">Media auto-download</div>
                        </div>
                        <div className="h-[60px] flex items-center">
                            <div className="w-[74px] flex items-center justify-center">
                                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.83C20 8.3 19.79 7.79 19.41 7.42L14.58 2.59C14.21 2.21 13.7 2 13.17 2H6ZM13 8V3.5L18.5 9H14C13.45 9 13 8.55 13 8ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H8ZM14 17C14 16.4477 13.5523 16 13 16H8C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H13C13.5523 18 14 17.5523 14 17Z" fill="#8696a0"></path>
                                </svg>
                            </div>
                            <div className="text-[17px] text-[#111b21] h-full flex items-center border-b grow">Request Account Info</div>
                        </div>
                        <div className="h-[60px] flex items-center">
                            <div className="w-[74px] flex items-center justify-center">
                                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1">
                                    <path fill="#8696a0" d="M 10.851562 12.648438 L 13.148438 12.648438 L 12 9 Z M 20 8.691406 L 20 6 C 20 4.898438 19.101562 4 18 4 L 15.308594 4 L 13.410156 2.101562 C 12.628906 1.320312 11.359375 1.320312 10.582031 2.101562 L 8.691406 4 L 6 4 C 4.898438 4 4 4.898438 4 6 L 4 8.691406 L 2.101562 10.589844 C 1.320312 11.371094 1.320312 12.640625 2.101562 13.421875 L 4 15.320312 L 4 18 C 4 19.101562 4.898438 20 6 20 L 8.691406 20 L 10.589844 21.898438 C 11.371094 22.679688 12.640625 22.679688 13.421875 21.898438 L 15.320312 20 L 18 20 C 19.101562 20 20 19.101562 20 18 L 20 15.308594 L 21.898438 13.410156 C 22.679688 12.628906 22.679688 11.359375 21.898438 10.578125 Z M 14.089844 15.398438 L 13.601562 14 L 10.398438 14 L 9.910156 15.398438 C 9.78125 15.761719 9.449219 16 9.070312 16 C 8.449219 16 8.019531 15.390625 8.230469 14.808594 L 10.671875 7.949219 C 10.871094 7.378906 11.398438 7 12 7 C 12.601562 7 13.128906 7.378906 13.339844 7.941406 L 15.78125 14.800781 C 15.988281 15.378906 15.558594 15.988281 14.941406 15.988281 C 14.550781 16 14.21875 15.761719 14.089844 15.398438 Z M 14.089844 15.398438 "></path>
                                </svg>
                            </div>
                            <div className="text-[17px] text-[#111b21] h-full flex items-center border-b grow">Keyboard shortcuts</div>
                        </div>
                        <div className="h-[60px] flex items-center">
                            <div className="w-[74px] flex items-center justify-center">
                                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                    <path fill="#8696a0" d="M12,4.7c-4.5,0-8.2,3.7-8.2,8.2s3.7,8.2,8.2,8.2s8.2-3.7,8.2-8.2S16.5,4.7,12,4.7z  M12.8,18.6h-1.6V17h1.6V18.6z M14.5,12.3L13.8,13c-0.7,0.6-1,1.1-1,2.3h-1.6v-0.4c0-0.9,0.3-1.7,1-2.3l1-1.1 c0.3-0.2,0.5-0.7,0.5-1.1c0-0.9-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6H8.7c0-1.8,1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3 C15.3,11.2,14.9,11.8,14.5,12.3z"></path>
                                </svg>
                            </div>
                            <div className="text-[17px] text-[#111b21] h-full flex items-center border-b grow">Help</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ community === "" ? "h-screen w-[400px] fixed left-[-800px] z-10 bg-white" : community ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <div className="community">
                <div className="h-[108px] bg-[#a52729] flex flex-col justify-end">
                    <div className="h-[54px] w-full flex items-center ">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" onClick={()=>setCommunity(false)}>
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
                <div className="new_community flex flex-col h-screen hidden">
                    <div className="h-[108px] bg-[#a52729] flex flex-col justify-end grow-0 shrink-0">
                        <div className="h-[54px] w-full flex items-center ">
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" onClick={()=>setCommunity(false)}>
                                <path fill="#ffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                            </svg>
                            <p className="text-[19px] text-[#ffffffe6] font-medium">Communities</p>
                        </div>
                    </div>
                    <div className="px-[32px] bg-white grow shrink">
                        <div className="h-[160px] flex flex-col justify-end">
                            <svg viewBox="0 0 214 129" height="129" width="214" preserveAspectRatio="xMidYMid meet" class="mx-auto" fill="#a52729">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M153.238 17.6142C174.898 24.2905 195.316 41.8699 193.825 72.8203C191.561 119.845 147.29 132.807 119.086 119.812C80.825 102.184 75.9581 99.2518 48.9529 100.053C28.8388 100.651 8.06758 91.4389 4.71949 64.9657C2.29269 45.7769 14.9317 26.8101 36.6246 19.3617C86.4308 2.26065 131.579 10.9378 153.238 17.6142Z" fill="#DAF7F3"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M56.8017 27.0502C58.6433 20.9207 63.217 15.0878 65.7923 13.4955C65.28 14.9656 64.6112 16.7972 63.8633 18.7525C70.1866 15.7125 80.8609 15.3429 98.6062 14.7284C143.139 13.1862 143.139 13.1862 144.681 57.7193C145.2 72.6977 145.544 82.6382 144.078 89.294C145.964 87.3411 147.853 85.4323 149.377 83.8929L149.377 83.8927L149.597 83.6711C149.8 83.4658 149.996 83.2677 150.184 83.0776C149.765 86.9239 144.708 94.964 138.356 98.6726C132.361 102.732 121.378 103.113 101.691 103.794C57.1575 105.337 57.1575 105.337 55.6153 60.8036C55.0367 44.0941 54.6751 33.6543 56.8017 27.0502Z" fill="#68DE8E"></path>
                                <path d="M65.7923 13.4955L66.4533 13.7258L67.1026 11.8624L65.4241 12.9001L65.7923 13.4955ZM56.8017 27.0502L57.4682 27.2648L57.4721 27.2516L56.8017 27.0502ZM63.8633 18.7525L63.2095 18.5025L62.5811 20.1457L64.1667 19.3834L63.8633 18.7525ZM144.078 89.294L143.395 89.1434L142.862 91.5618L144.582 89.7802L144.078 89.294ZM149.377 83.8929L148.904 83.3775L148.891 83.3887L148.88 83.4004L149.377 83.8929ZM149.377 83.8927L149.851 84.4081L149.863 84.3969L149.875 84.3852L149.377 83.8927ZM149.597 83.6711L150.094 84.1636L150.094 84.1636L149.597 83.6711ZM150.184 83.0776L150.88 83.1534L151.097 81.1584L149.686 82.5854L150.184 83.0776ZM138.356 98.6726L138.003 98.0681L137.983 98.0799L137.964 98.093L138.356 98.6726ZM65.4241 12.9001C64.0163 13.7706 62.1636 15.7184 60.4483 18.1701C58.7208 20.6393 57.0784 23.6967 56.1313 26.8488L57.4721 27.2516C58.3667 24.2741 59.9319 21.3504 61.5954 18.9727C63.2712 16.5774 64.993 14.8127 66.1604 14.0909L65.4241 12.9001ZM64.5172 19.0026C65.2672 17.0416 65.9384 15.2034 66.4533 13.7258L65.1312 13.2652C64.6216 14.7279 63.9552 16.5528 63.2095 18.5025L64.5172 19.0026ZM98.582 14.0288C89.7176 14.3358 82.5877 14.5824 76.8841 15.1341C71.1886 15.6851 66.8372 16.5461 63.56 18.1217L64.1667 19.3834C67.2127 17.919 71.3601 17.0751 77.0189 16.5276C82.6696 15.981 89.7495 15.7355 98.6304 15.4279L98.582 14.0288ZM145.381 57.695C144.996 46.5789 144.706 38.1824 143.787 31.8964C142.868 25.6155 141.302 21.2881 138.243 18.4338C135.184 15.5795 130.759 14.3169 124.429 13.8347C118.095 13.352 109.698 13.6438 98.582 14.0288L98.6304 15.4279C109.781 15.0418 118.084 14.7553 124.323 15.2306C130.566 15.7063 134.588 16.9379 137.288 19.4574C139.988 21.977 141.495 25.9032 142.401 32.099C143.307 38.2897 143.596 46.5931 143.982 57.7435L145.381 57.695ZM144.762 89.4446C146.252 82.6797 145.898 72.6257 145.381 57.695L143.982 57.7435C144.502 72.7697 144.837 82.5967 143.395 89.1434L144.762 89.4446ZM148.88 83.4004C147.356 84.9395 145.463 86.8513 143.575 88.8078L144.582 89.7802C146.464 87.8309 148.35 85.9251 149.875 84.3853L148.88 83.4004ZM148.904 83.3773L148.904 83.3775L149.851 84.4083L149.851 84.4081L148.904 83.3773ZM149.099 83.1786L148.88 83.4003L149.875 84.3852L150.094 84.1636L149.099 83.1786ZM149.686 82.5854C149.499 82.7753 149.303 82.9733 149.099 83.1786L150.094 84.1636C150.298 83.9582 150.494 83.76 150.682 83.5697L149.686 82.5854ZM138.709 99.2771C141.995 97.3589 144.915 94.342 147.064 91.3337C149.198 88.3467 150.651 85.256 150.88 83.1534L149.488 83.0018C149.298 84.7455 148.013 87.5981 145.925 90.5198C143.853 93.4203 141.07 96.2778 138.003 98.0681L138.709 99.2771ZM101.715 104.494C111.547 104.154 119.248 103.887 125.238 103.196C131.219 102.505 135.605 101.381 138.749 99.2522L137.964 98.093C135.112 100.024 131.01 101.12 125.078 101.805C119.156 102.489 111.521 102.754 101.666 103.095L101.715 104.494ZM54.9157 60.8278C55.3007 71.944 55.5904 80.3404 56.5101 86.6265C57.429 92.9074 58.9947 97.2347 62.0538 100.089C65.1129 102.943 69.5382 104.206 75.8676 104.688C82.2022 105.171 90.5986 104.879 101.715 104.494L101.666 103.095C90.5159 103.481 82.2124 103.768 75.9739 103.292C69.7302 102.817 65.7092 101.585 63.0089 99.0654C60.3085 96.5459 58.8018 92.6196 57.8953 86.4238C56.9896 80.2331 56.701 71.9297 56.3149 60.7793L54.9157 60.8278ZM56.1354 26.8356C55.0396 30.2386 54.5976 34.5838 54.4942 40.1243C54.3906 45.6713 54.6266 52.4799 54.9157 60.8278L56.3149 60.7793C56.0253 52.4177 55.7913 45.6517 55.8939 40.1504C55.9967 34.6427 56.4373 30.4658 57.468 27.2647L56.1354 26.8356Z" fill="#316474"></path>
                                <path d="M104.033 7.20602L103.984 7.20773C92.8918 7.59183 84.5108 7.88205 78.2341 8.80036C71.9532 9.71928 67.6258 11.285 64.7715 14.3441C61.9172 17.4031 60.6546 21.8284 60.1724 28.1579C59.6905 34.4831 59.9807 42.8641 60.3648 53.9558L60.3665 54.005L60.3682 54.0542C60.7523 65.146 61.0425 73.527 61.9608 79.8037C62.8798 86.0846 64.4455 90.412 67.5045 93.2663C70.5636 96.1206 74.9889 97.3832 81.3183 97.8654C87.6435 98.3473 96.0244 98.0571 107.116 97.673L107.166 97.6713L107.215 97.6696C118.307 97.2855 126.687 96.9953 132.964 96.0769C139.245 95.158 143.572 93.5923 146.427 90.5332C149.281 87.4742 150.544 83.0489 151.026 76.7194C151.508 70.3942 151.218 62.0132 150.833 50.9215L150.832 50.8723L150.83 50.8231C150.446 39.7313 150.156 31.3504 149.237 25.0736C148.319 18.7927 146.753 14.4653 143.694 11.611C140.635 8.75674 136.209 7.49413 129.88 7.0119C123.555 6.52999 115.174 6.82022 104.082 7.20432L104.033 7.20602Z" fill="#73F892" stroke="#316474" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M111.958 38.7872C112.258 42.7774 109.243 49.579 104.998 49.9433C100.751 50.3072 96.8817 44.0964 96.5818 40.1059C96.2814 36.1156 99.4799 32.5854 103.726 32.2213C107.972 31.8572 111.657 34.7968 111.958 38.7872Z" fill="white" stroke="#316474" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M125.592 74.1498C125.678 75.0635 125.472 76.5944 124.182 76.7623C119.004 77.4349 113.251 77.8697 107.834 78.1719C101.265 78.5384 95.923 78.7679 91.2532 78.617C89.7642 78.5689 89.4869 77.1351 89.4034 76.2401C88.3549 65.0216 95.6064 55.4594 105.6 54.8821C115.593 54.3051 124.544 62.9316 125.592 74.1498Z" fill="white" stroke="#316474" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M88.8021 38.5084C89.0405 41.3538 87.0896 46.171 84.2544 46.3914C81.419 46.6116 78.773 42.1514 78.5345 39.3058C78.296 36.4607 80.4014 33.9751 83.2365 33.755C86.0718 33.5348 88.5637 35.663 88.8021 38.5084Z" fill="white" stroke="#316474" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M91.0653 51.7948C89.1225 51.0135 86.9018 50.6637 84.5659 50.8758C77.4907 51.5173 72.0543 57.0384 72.4234 63.2071C72.4527 63.6992 72.6009 64.4833 73.6507 64.4618C76.61 64.4011 79.9642 64.1531 83.9886 63.8026C84.7202 59.188 87.2953 54.9651 91.0653 51.7948Z" fill="white" stroke="#316474" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M121.544 36.4276C121.503 39.2827 123.783 43.9534 126.627 43.9772C129.47 44.0007 131.801 39.3682 131.842 36.5129C131.884 33.6581 129.611 31.3241 126.768 31.3006C123.924 31.2771 121.585 33.5725 121.544 36.4276Z" fill="white" stroke="#316474" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M120.206 49.8399C122.09 48.9261 124.281 48.4235 126.626 48.4735C133.729 48.624 139.534 53.7558 139.592 59.9354C139.597 60.4283 139.503 61.2207 138.455 61.272C135.498 61.4161 132.135 61.4007 128.096 61.3295C127.047 56.7765 124.186 52.7419 120.206 49.8399Z" fill="white" stroke="#316474" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M53.7616 66.4347L58.0476 60.7999C58.5362 60.1576 59.1986 59.6695 59.9563 59.3937C61.9444 58.6699 59.7131 61.3124 60.4388 63.3057L71.8532 94.658C72.5931 96.6902 75.9812 97.3224 73.9544 98.0603C73.2402 98.3203 72.4697 98.3857 71.7214 98.2498L65.1534 97.0569C60.8444 96.2743 56.4565 96.16 52.1414 96.7054C51.8387 96.7437 51.6832 97.0856 51.8486 97.342C52.9063 98.9808 53.9831 100.715 54.0504 100.834L56.3256 104.856C57.6481 107.193 56.6765 110.16 54.2309 111.253C52.4889 112.031 50.4453 111.635 49.1159 110.26C47.9138 108.939 41.3181 99.6727 39.4433 100.26C35.2784 101.564 30.7806 99.3625 29.2683 95.2088L27.8071 91.1954C26.2511 86.9214 28.4453 82.1985 32.708 80.6465C33.2969 80.4322 33.8925 80.2269 34.4892 80.0213C41.8165 77.4968 49.0646 72.6099 53.7616 66.4347Z" fill="#42CBA5" stroke="#316474" stroke-width="1.4"></path>
                                <path d="M41.0622 99.5245L41.313 100.178L41.313 100.178L41.0622 99.5245ZM64.5587 97.5402L64.713 96.8574L64.5587 97.5402ZM71.4642 99.1005L71.3099 99.7833L71.3099 99.7833L71.4642 99.1005ZM73.5905 97.6449L73.1921 98.2205L73.1921 98.2205L73.5905 97.6449ZM27.5717 94.044L28.1023 95.5015L29.4179 95.0225L28.8873 93.5651L27.5717 94.044ZM28.1023 95.5015C29.79 100.137 34.9078 102.533 39.5354 100.849L39.0565 99.533C35.1586 100.952 30.8423 98.9349 29.4179 95.0225L28.1023 95.5015ZM39.5354 100.849C40.1309 100.632 40.7248 100.404 41.313 100.178L40.8113 98.8709C40.2212 99.0975 39.6386 99.3211 39.0565 99.533L39.5354 100.849ZM41.313 100.178C48.4357 97.4439 56.988 96.5473 64.4044 98.223L64.713 96.8574C56.9939 95.1133 48.1592 96.0504 40.8113 98.8709L41.313 100.178ZM64.4044 98.223L71.3099 99.7833L71.6185 98.4177L64.713 96.8574L64.4044 98.223ZM71.3099 99.7833C71.7033 99.8722 72.3223 100.01 72.9452 100.088C73.5293 100.162 74.265 100.206 74.8187 100.005L74.3398 98.6892C74.1358 98.7634 73.7075 98.7734 73.1203 98.6994C72.5719 98.6302 72.0122 98.5067 71.6185 98.4177L71.3099 99.7833ZM74.8187 100.005C75.143 99.8866 75.6016 99.6361 75.6852 99.1023C75.7602 98.6233 75.4651 98.2561 75.3085 98.0853C75.1176 97.8771 74.8697 97.6845 74.6474 97.524C74.4268 97.3648 74.171 97.1954 73.9888 97.0693L73.1921 98.2205C73.4141 98.3742 73.6188 98.5082 73.828 98.6592C74.0354 98.8089 74.1866 98.9333 74.2767 99.0315C74.4011 99.1672 74.2691 99.096 74.302 98.8856C74.3436 98.6203 74.555 98.6108 74.3398 98.6892L74.8187 100.005ZM73.9888 97.0693C73.2646 96.5681 72.5845 96.0695 72.3423 95.4044L71.0268 95.8833C71.4484 97.0414 72.5539 97.7788 73.1921 98.2205L73.9888 97.0693Z" fill="#316474"></path>
                                <ellipse cx="66.7941" cy="79.7409" rx="5.50187" ry="21.2215" transform="rotate(-20.0051 66.7941 79.7409)" fill="#1C997D" stroke="#316474" stroke-width="1.4"></ellipse>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M64.9565 87.7771C63.8763 85.6006 62.8299 83.1626 61.8794 80.5519C61.1293 78.4916 60.4942 76.4753 59.9786 74.5561C63.1803 73.555 66.7558 75.5579 68.0585 79.136C69.3411 82.659 67.9544 86.4288 64.9565 87.7771Z" fill="#BBE4DD"></path>
                                <path d="M64.9565 87.7771L64.3295 88.0883L64.6291 88.692L65.2436 88.4155L64.9565 87.7771ZM59.9786 74.5561L59.7697 73.8879L59.1281 74.0885L59.3025 74.7377L59.9786 74.5561ZM65.5835 87.466C64.5156 85.314 63.4792 82.9001 62.5371 80.3124L61.2216 80.7914C62.1805 83.4251 63.2371 85.8872 64.3295 88.0883L65.5835 87.466ZM62.5371 80.3124C61.7937 78.2705 61.1648 76.2735 60.6546 74.3744L59.3025 74.7377C59.8236 76.6771 60.4649 78.7127 61.2216 80.7914L62.5371 80.3124ZM60.1874 75.2242C62.9667 74.3552 66.2011 76.0805 67.4007 79.3755L68.7162 78.8966C67.3104 75.0353 63.394 72.7548 59.7697 73.8879L60.1874 75.2242ZM67.4007 79.3755C68.5814 82.6185 67.2737 85.9674 64.6694 87.1387L65.2436 88.4155C68.6352 86.8901 70.1008 82.6995 68.7162 78.8966L67.4007 79.3755Z" fill="#316474"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.9667 28.0094C4.57512 27.5552 8.07616 26.9073 8.99039 26.0646C10.1173 25.0262 10.4303 21.4254 10.578 18.4254C10.6027 17.9173 11.3354 17.8694 11.4258 18.3702C11.9226 21.1176 12.6331 24.5547 13.6691 25.4595C14.7044 26.3632 18.396 26.5976 21.2498 26.7206C21.7596 26.7425 21.8089 27.4772 21.3067 27.567C18.439 28.081 14.7825 28.8251 13.882 29.9152C13.0323 30.9436 12.8366 34.9595 12.7256 37.8727C12.7062 38.386 11.9635 38.4348 11.8762 37.9288C11.3855 35.0777 10.6676 31.1369 9.71101 30.2289C8.67483 29.2463 4.94968 28.9872 2.01998 28.8566C1.50915 28.8339 1.46272 28.0973 1.9667 28.0094Z" fill="white" stroke="#316474" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9302 14.9584C23.7418 14.5974 28.862 14.0576 30.275 12.9457C32.0165 11.5755 32.8733 6.41971 33.424 2.11139C33.5169 1.38153 34.5786 1.395 34.6524 2.12718C35.0593 6.14402 35.6965 11.1791 37.0882 12.6003C38.479 14.0197 43.7746 14.7733 47.875 15.272C48.6075 15.3609 48.5958 16.4257 47.8617 16.4986C43.6696 16.9167 38.3143 17.5777 36.8934 19.0478C35.5525 20.4348 34.8182 26.2023 34.3302 30.3896C34.2442 31.1275 33.168 31.1142 33.0992 30.3748C32.7129 26.2092 32.1216 20.4471 30.8449 19.0304C29.4617 17.497 24.1205 16.7041 19.9116 16.1858C19.1777 16.0955 19.1937 15.0284 19.9302 14.9584Z" fill="white" stroke="#316474" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M148.272 6.61712C148.757 4.61172 150.776 3.37606 152.782 3.85719L177.328 9.74423C179.335 10.2254 180.568 12.2411 180.084 14.2465L177.358 25.5348C176.874 27.5402 174.855 28.7758 172.849 28.2947L139.62 20.3255C139.531 20.3041 139.486 20.2656 139.459 20.2302C139.427 20.1888 139.404 20.129 139.401 20.0586C139.398 19.9881 139.416 19.9265 139.444 19.8825C139.469 19.8449 139.51 19.8026 139.597 19.7737L142.698 18.7411C144.488 18.1452 145.845 16.6693 146.288 14.8369L148.272 6.61712Z" fill="white" stroke="#316474" stroke-width="1.72407"></path>
                                <path d="M153.339 8.63727C152.876 8.52624 152.41 8.81139 152.298 9.27418C152.187 9.73696 152.471 10.2021 152.934 10.3132L153.339 8.63727ZM174.245 15.4241C174.708 15.5351 175.174 15.25 175.286 14.7872C175.397 14.3244 175.113 13.8592 174.65 13.7482L174.245 15.4241ZM152.934 10.3132L174.245 15.4241L174.65 13.7482L153.339 8.63727L152.934 10.3132Z" fill="#CEE3EA"></path>
                                <path d="M152.363 12.6824C151.9 12.5714 151.434 12.8566 151.322 13.3193C151.21 13.7821 151.495 14.2473 151.958 14.3583L152.363 12.6824ZM173.268 19.4693C173.731 19.5803 174.197 19.2952 174.309 18.8324C174.421 18.3696 174.136 17.9044 173.673 17.7934L173.268 19.4693ZM151.958 14.3583L173.268 19.4693L173.673 17.7934L152.363 12.6824L151.958 14.3583Z" fill="#CEE3EA"></path><path d="M151.385 16.7281C150.922 16.6171 150.457 16.9022 150.345 17.365C150.233 17.8278 150.518 18.293 150.981 18.404L151.385 16.7281ZM172.291 23.5149C172.754 23.626 173.22 23.3408 173.332 22.878C173.444 22.4152 173.159 21.9501 172.696 21.839L172.291 23.5149ZM150.981 18.404L172.291 23.5149L172.696 21.839L151.385 16.7281L150.981 18.404Z" fill="#CEE3EA"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M153.537 110.441C157.212 109.801 162.144 108.888 163.431 107.701C165.019 106.238 165.46 101.166 165.668 96.9396C165.703 96.2237 166.735 96.1563 166.862 96.8618C167.562 100.732 168.563 105.574 170.022 106.849C171.481 108.122 176.681 108.452 180.701 108.625C181.42 108.656 181.489 109.691 180.782 109.817C176.742 110.542 171.591 111.59 170.322 113.125C169.125 114.574 168.85 120.231 168.693 124.335C168.666 125.058 167.62 125.127 167.497 124.414C166.806 120.398 165.794 114.846 164.447 113.567C162.987 112.183 157.739 111.818 153.612 111.634C152.893 111.602 152.827 110.565 153.537 110.441Z" fill="white" stroke="#316474" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M201.351 45.789C201.752 43.7654 200.436 41.8018 198.412 41.4032L164.539 34.7338C162.515 34.3352 160.549 35.6526 160.148 37.6763L158.25 47.2457C157.849 49.2693 159.165 51.2329 161.189 51.6315L206.57 60.5669C206.842 60.6203 207.025 60.2971 206.84 60.0922L201.849 54.578C200.692 53.3002 200.208 51.5506 200.544 49.8589L201.351 45.789Z" fill="#42CBA5" stroke="#316474" stroke-width="1.72407"></path>
                                <path d="M165.71 40.1044C165.243 40.0124 164.789 40.3164 164.696 40.7834C164.604 41.2504 164.907 41.7036 165.374 41.7955L165.71 40.1044ZM193.353 47.3045C193.821 47.3965 194.274 47.0925 194.367 46.6255C194.459 46.1585 194.156 45.7053 193.689 45.6133L193.353 47.3045ZM165.374 41.7955L193.353 47.3045L193.689 45.6133L165.71 40.1044L165.374 41.7955Z" fill="#33AF8D"></path>
                                <path d="M164.656 45.4158C164.189 45.3238 163.736 45.6278 163.643 46.0948C163.55 46.5618 163.854 47.015 164.321 47.1069L164.656 45.4158ZM192.3 52.6159C192.767 52.7079 193.221 52.4039 193.314 51.9369C193.406 51.4699 193.103 51.0167 192.635 50.9247L192.3 52.6159ZM164.321 47.1069L192.3 52.6159L192.635 50.9247L164.656 45.4158L164.321 47.1069Z" fill="#33AF8D"></path>
                            </svg>
                        </div>
                        <p className="mt-6 text-center text-[#111b21] text-[22px] font-bold">Introducing communities</p>
                        <p className="text-[#8696a0] text-[14px] mt-[14px] mb-[28px] text-center">Easily organise your related groups and send announcements. Now, your communities, like neighborhoods or schools, can have their own space.</p>
                        <div className="flex justify-center">
                            <button className="bg-[#a52729] text-white py-[8px] px-[24px] rounded-sm m-auto font-medium">START A COMMUNITY</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ starredMessages === "" ? "h-screen w-[400px] fixed left-[-800px] z-10 bg-white" : starredMessages ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-[#f0f2f5] z-10" }>
                <div className="h-[60px] bg-[#f0f2f5] pl-[25px] pr-[20px] flex items-center justify-between">
                    <div className="h-[54px] w-full flex items-center cursor-pointer" onClick={()=>setStarredMessages(false)}>
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
                        <div className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-full active:bg-[#0F1110]" title="Communities" onClick={()=>setCommunity(true)}>
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
                        <div className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full active:bg-[#0F1110]" title="New chat" onClick={()=>setNewChats(true)}>
                            <svg viewBox="0 0 24 24" height="24" width="24"  class="fill-[#ffffffe6]" >
                                <path fill="#ffffffe6" enable-background="new    " d="M19.005,3.175H4.674C3.642,3.175,3,3.789,3,4.821V21.02 l3.544-3.514h12.461c1.033,0,2.064-1.06,2.064-2.093V4.821C21.068,3.789,20.037,3.175,19.005,3.175z M14.016,13.044H7.041V11.1 h6.975V13.044z M17.016,9.044H7.041V7.1h9.975V9.044z"></path>
                            </svg>
                        </div>
                        <div className="relative">
                                <div className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full active:bg-[#0F1110]" title="Menu" onClick={()=>setMenu(!menu)}>
                                    <svg viewBox="0 0 24 24" height="24" width="24"  class="fill-[#ffffffe6]" >
                                        <path fill="#ffffffe6" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
                                    </svg>
                                </div>
                                <div className={ menu ? "bg-white rounded-sm shadow-md py-[6px] absolute top-[46px] left-[-130px] w-[180px] h-[252px] animate-chats_menu overflow-hidden" : "w-0 h-0 overflow-hidden" }>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={()=>setNewGroup(true)}>New group</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={()=>setNewCommunity(true)}>New community</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={()=>setArchived(true)}>Archived</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={()=>setStarredMessages(true)}>Starred messages</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={()=>setSelectChats(true)}>Select chats</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={()=>setSettings(true)}>Settings</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Log out</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white">
                    <div className={selectChats ? "hidden" : "h-[50px] flex items-center pl-[10px] grow-0 shrink-0 bg-[#1e2321]" }>
                        <div className="flex items-center bg-[#0f1110] rounded-lg w-full h-[35px] px-4">
                            <svg viewBox="0 0 24 24" height="20" width="20" class="fill-[#54656f]">
                                <path fill="#ffffffe6" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                            </svg>
                            <div className="w-full">
                                <input type="text" className={ filter ? "hidden" : "bg-[#0f1110]  outline-none placeholder:text-white/70 text-[13px] px-7 w-full h-[35px]" }  placeholder="Search or start a new chat" title="Search input textbox"/>
                                <input type="text" className={ filter ? "bg-[#0f1110] outline-none placeholder:text-white/70 text-[13px] px-7 w-full" : "hidden" } placeholder="Search unread chats" title="Search input textbox"/>
                            </div>
                        </div>
                        <div className="w-[50px] h-[40px] flex items-center justify-center cursor-pointer" title="Unread chats filter" onClick={()=>setFilter(!filter)}>
                            <div className={ filter ? "flex items-center justify-center h-[28px] w-[28px] rounded-full bg-[#a52729]" : "flex items-center justify-center h-[30px] w-[30px] rounded-full" }>
                                <svg viewBox="0 0 24 24" height="20" width="20"  class="fill-[#54656f]">
                                    <path fill="#ffffffe6" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/* <div className={!selectChats ? "h-[50px] flex items-center pl-[10px] grow-0 shrink-0 bg-[#1e2321]" : "hidden"}>
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
                    </div> */}
                    <div className={ (filter || notified || selectChats) ? "hidden" : "flex items-center h-[89px] bg-[#a52729] px-[15px] grow-0 shrink-0" } >
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
                        <div className="cursor-pointer" onClick={()=>setNotified(true)}>
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="#ffffffe6" enable-background="new 0 0 24 24" >
                                <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className={ (filter || selectChats) ? "hidden" : notified ? "chats_container_notified overflow-y-scroll chats_scroll" : "chats_container overflow-y-scroll chats_scroll" }>
                        <Chats_component/>
                    </div>
                    <div className={ filter  ? "chats_container unread_chats_container overflow-y-scroll chats_scroll" : "hidden" }>
                        <Unread_chats_component/>
                    </div>
                    <div className={ selectChats ? "flex items-center h-[54px] bg-[#f0f2f5]" : "hidden" }>
                            <div className="mx-5 cursor-pointer" onClick={()=>setSelectChats(false)}>
                                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="#3b4a54" enable-background="new 0 0 24 24">
                                    <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                                </svg>
                            </div>
                            <div className="text-[16px] text-[#3b4a54]">0 selected</div>
                    </div>
                    <div className={ selectChats ? ( notified ? ("chats_container_notified overflow-y-scroll chats_scroll select_chats_scroll") : ("chats_container overflow-y-scroll chats_scroll select_chats_scroll") ) : ("hidden") }>
                        <Select_chats/>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default Chats;