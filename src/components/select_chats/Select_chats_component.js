import dp from "./../images/dp.jfif";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { chats } from './../Chats_details';
import { Community_icon_new_chats, New_chats_icon, Status_icon, Menu_icon, Select_Chats_Menu_icon } from "../Svg";
import { Contact_icon, Gif_icon, Location_icon, Image_icon, Sticker_icon, Document_icon, Video_icon, Audio_icon, Seen_icon, Unseen_icon, Undelivered_icon, Unsent_icon }  from "./../Svg";
import { contactIconDefault } from "./../Contacts_collection";
import "./Select_chats.css";

function Select_chats_component(props){
    const [ menu, setMenu ] = useState(false);
    const [ menuSelectChats, setMenuSelectChats ] = useState(false);
    const [ notified, setNotified ] = useState(false);
    const [ selectChats, setSelectChats ] = useState(false);
    const [ logout, setLogout ] = useState(false);
    //unread chats filter
    
    const [ filter, setFilter ] = useState("");
   return(
        <div>
            <div className={ logout ? "fixed w-screen min-h-screen flex items-center justify-center bg-white/90 z-10 opacity-0 animate-opacity" : "hidden"}>
                <div className="bg-white p-6 rounded-md shadow-xl w-[480px]">
                    <p className="text-[20px] leading-[25px] text-[#3b4a54]">Log out?</p>
                    <p className="text-[14px] leading-[20px] text-[#3b4a54] mt-4">Are you sure you want to logout?</p>
                    <div className="mt-10 flex w-full justify-end">
                        <button className="h-[36px] rounded-sm text-[#A52729] px-4 leading-[36px] border mr-2" onClick={()=>setLogout(false)}>CANCEL</button>
                        <button className="h-[36px] leading-[36px] bg-[#A52729] text-white px-4 font-medium rounded-sm">LOG OUT</button>
                    </div>
                </div>
            </div>

            <div className="w-[400px] border-r border-[#919599] h-screen">
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
                    <div className="flex items-center justify-between h-[54px] bg-[#f0f2f5]">
                        <div className="flex items-center">
                            <Link to="/" className="mx-5 cursor-pointer">
                                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="#3b4a54" enable-background="new 0 0 24 24">
                                    <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                                </svg>
                            </Link>
                            <div className="text-[16px] text-[#3b4a54]">0 selected</div>
                        </div>
                        <div className="relative mr-3">
                                <div className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full active:bg-[#0F1110] rotate-90" title="Menu" onClick={()=>setMenuSelectChats(!menuSelectChats)}>{Select_Chats_Menu_icon}</div>
                                <div className={ menuSelectChats ? "bg-white rounded-sm shadow-md py-[6px] absolute top-[46px] left-[-130px] w-[180px] h-[252px] animate-select_chats_menu overflow-hidden" : "w-0 h-0 overflow-hidden" }>
                                    <div>
                                        <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Mark as unread</p>
                                    </div>
                                    <div>
                                        <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Mute notifications</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="h-[calc(100vh-114px)] overflow-y-scroll select_chats">
                    <div className="">
{chats.map((chat_item) => {return(
    <div className="h-[72px] cursor-pointer w-full flex items-center pr-[8px] hover:bg-[#F0F2F5] hover:transition-all" onclick={() => props.contact(chat_item.name)}>
        <div className="w-[60px] h-full flex items-center justify-center">
            <input type="checkbox" name="" id=""  className="border-2 border-black w-[16px] h-[16px] rounded-sm outline-none"/>
        </div>

        <div className="w-[49px] h-[49px] mr-[15px] flex items-center bg-[#DFE5E7] overflow-hidden rounded-full justify-center">
            {
                chat_item.dp === "" ? (contactIconDefault):(<img src={chat_item.dp} alt="" className="h-[49px] w-[49px] rounded-full"/>)
            }
        </div>

        <div className="grow border-b h-[72px] flex items-center">
            <div className="h-[42px] w-full pr-[10px]">

                <div className="h-[22px] flex items-center justify-between">
                    <div className="text-[#111b21] text-[17px]">{chat_item.name}</div>
                    <div className="text-[12px] text-[#667781]">{chat_item.last_message.time}</div>
                </div>
                
                <div className="h-[20px]">
                    <div className="flex items-center">
                    {
                        chat_item.last_message.is_sent_by_me ? 
                        (
                            <div className="mr-1">
                            {
                                chat_item.last_message.is_sent ? 
                                (
                                    <div>
                                    {
                                        chat_item.last_message.is_delivered ? 
                                        (
                                            <div>
                                            {
                                                chat_item.last_message.is_seen ? 
                                                (Seen_icon) : (Unseen_icon)
                                            }
                                            </div>
                                        ) : (Undelivered_icon)
                                    }
                                    </div>
                                ) : (Unsent_icon)
                            }
                            </div>                                                              
                        ) : null
                    }
                        
                    <div>
                    {
                        (chat_item.last_message.is_text) ? (<div><p className="text-[#3b4a54] text-[15px]">{chat_item.last_message.message}</p></div>) : (
<div>
{
    chat_item.last_message.is_audio ? (
    <div className="flex items-center">
        {Audio_icon}
        <p className="text-[#3b4a54] text-[15px]">{chat_item.last_message.audio_duration}</p>
    </div>) : null
}
{
    chat_item.last_message.is_video ? (
    <div className="flex items-center">
        {Video_icon}
        <p className="text-[#3b4a54] text-[15px]">Video</p>
    </div>) : null
}
{
    chat_item.last_message.is_document ? (
    <div className="flex items-center">
        {Document_icon}
        <p className="text-[#3b4a54] text-[15px]">{chat_item.last_message.document_name}</p>
    </div>) : null
}
{
    chat_item.last_message.is_sticker ? (
    <div className="flex items-center">
        {Sticker_icon}
        <p className="text-[#3b4a54] text-[15px]">Sticker</p>
    </div>) : null
}
{
    chat_item.last_message.is_image ? (
    <div className="flex items-center">
        {Image_icon}
        <p className="text-[#3b4a54] text-[15px]">Photo</p>
    </div>) : null
}
{
    chat_item.last_message.is_gif ? (
    <div className="flex items-center">
        {Gif_icon}
        <p className="text-[#3b4a54] text-[15px]">GIF</p>
    </div>) : null
}
{
    chat_item.last_message.is_contact ? (
    <div className="flex items-center">
        {Contact_icon}
        <p className="text-[#3b4a54] text-[15px]">{chat_item.last_message.contact_name}</p>
    </div>) : null
}
{
    chat_item.last_message.is_location ? (
    <div className="flex items-center">
        {Location_icon}
        <p className="text-[#3b4a54] text-[15px]">Live Location</p>
    </div>) : null
}
{
    chat_item.last_message.is_audio_call ? (
    <div>

    </div>) : null
}
{
    chat_item.last_message.is_video_call ? (
    <div>

    </div>) : null
}
</div>)
                    }
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    </div>)})}
            </div>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default Select_chats_component;