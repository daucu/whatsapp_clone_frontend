import Chats_component from "../Chats_component";
import dp from "./../images/dp.jfif";
import { useState } from "react";
import { Link } from "react-router-dom";
import Unread_chats_component from "../unread_chats/Unread_chats_component";
import Select_chats from "./../Select_chats";
import '../Chats_details';
import { Community_icon_new_chats, New_chats_icon, Status_icon, Menu_icon } from "../Svg";

function New_chats_component(props){
    const [ menu, setMenu ] = useState(false);
    const [ notified, setNotified ] = useState(false);
    const [ selectChats, setSelectChats ] = useState(false);
    const [ logout, setLogout ] = useState("");

    //unread chats filter
    
    const [ filter, setFilter ] = useState("");
   return(
        <div>
            <div className="w-[400px] border-r border-[#919599]">
                <div className="h-[60px] bg-[#1E2321] flex items-center justify-between px-4 border-b border-white/50">
                    <div className="rounded-full h-[40px] w-[40px] bg-cover bg-center cursor-pointer" style={{backgroundImage:`url(${dp})`}}></div>
                    <div className="flex items-center">
                        <Link to="/community" className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-full active:bg-[#0F1110]" title="Communities">
                            {Community_icon_new_chats}
                        </Link>
                        <Link to="/status" className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full active:bg-[#0F1110]" title="status">
                            {Status_icon}
                        </Link>
                        <Link to ="/" className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full active:bg-[#0F1110]" title="New chat">
                            {New_chats_icon}
                        </Link>
                        <div className="relative">
                                <div className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full active:bg-[#0F1110]" title="Menu" onClick={()=>setMenu(!menu)}>{Menu_icon}</div>
                                <div className={ menu ? "bg-white rounded-sm shadow-md py-[6px] absolute top-[46px] left-[-130px] w-[180px] h-[252px] animate-chats_menu overflow-hidden" : "w-0 h-0 overflow-hidden" }>
                                    <Link to="group">
                                        <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">New group</p>
                                    </Link>
                                    <Link to="/community">
                                        <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">New community</p>
                                    </Link>
                                    <Link to="/archived">
                                        <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Archived</p>
                                    </Link>
                                    <Link to="/starred-messages">
                                        <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Starred messages</p>
                                    </Link>
                                    <Link to="/select-chats">
                                        <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Select chats</p>
                                    </Link>
                                    <Link to="/settings">
                                        <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Settings</p>
                                    </Link>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={()=>setLogout(true)}>Log out</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white">
                    <div className={selectChats ? "hidden" : "h-[50px] flex items-center pl-[10px] grow-0 shrink-0 bg-[#1e2321]"}>
                        <div className="flex items-center bg-[#0f1110] rounded-lg w-full h-[35px] px-4">
                            <svg viewBox="0 0 24 24" height="20" width="20" class="fill-[#54656f]">
                                <path fill="#ffffffe6" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                            </svg>
                            <div className="w-full">
                                <input type="text" className="bg-[#0f1110]  outline-none placeholder:text-white/70 text-[13px] px-7 w-full h-[35px]" placeholder="Search or start a new chat" title="Search input textbox"/>
                            </div>
                        </div>
                        <Link to="/unread-chats" className="w-[50px] h-[40px] flex items-center justify-center cursor-pointer" title="Unread chats filter">
                            <div className="flex items-center justify-center h-[30px] w-[30px] rounded-full">
                                <svg viewBox="0 0 24 24" height="20" width="20"  class="fill-[#54656f]">
                                    <path fill="#ffffffe6" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path>
                                </svg>
                            </div>
                        </Link>
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
            <div className={ logout ? "fixed top-0 w-screen min-h-screen flex items-center justify-center bg-white/90 z-10 animate-opacity" : "hidden"}>
                <div className={ logout === "" ? "hidden" : logout ? "bg-white p-6 rounded-md shadow-xl w-[480px] animate-scale_full" : "bg-white p-6 rounded-md shadow-xl w-[480px] animate-scale_zero" } >
                    <p className="text-[20px] leading-[25px] text-[#3b4a54]">Log out?</p>
                    <p className="text-[14px] leading-[20px] text-[#3b4a54] mt-4">Are you sure you want to logout?</p>
                    <div className="mt-10 flex w-full justify-end">
                        <button className="h-[36px] rounded-sm text-[#A52729] px-4 leading-[36px] border mr-2" onClick={()=>setLogout(false)}>CANCEL</button>
                        <button className="h-[36px] leading-[36px] bg-[#A52729] text-white px-4 font-medium rounded-sm">LOG OUT</button>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default New_chats_component;