import dp from "./images/dp.jfif";
import whatsapp_web_bg_light from "./images/whatsapp_web_bg_light.jpg";
import { useEffect, useState, useReducer } from "react";

import { FaVideo } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { Chats } from "./Chats_details";

function Chat_section(props) {
  const [menuSelf, setMenuSelf] = useState(false);
  const [menuBusiness, setMenuBusiness] = useState(false);
  const [menuNormal, setMenuNormal] = useState(false);
  const [menuGroup, setMenuGroup] = useState(false);
  const [profileType, setProfileType] = useState("business");

  const [send, setSend] = useState(false);

  // function handleSend(){
  //   if()
  //   setSend(!send);
  // }

  var chat = [
    {
      name: "John Doe",
      message: "Hello, Rishu how are you?",
      time: "15:30",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: false,
    },
    {
      name: "John Doe",
      message: "Hi, I am fine. What about you? How is your family?",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: true,
    },
    {
      name: "John Doe",
      message: "Are you working right now?",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: false,
    },
    {
      name: "John Doe",
      message: "??",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: false,
    },
    {
      name: "John Doe",
      message: "Yes I am working. I am working on a new project.",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: true,
    },
    {
      name: "John Doe",
      message: "Please don't disturb me right now.",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: true,
    },
    {
      name: "John Doe",
      message: "OKay, I will call you later.",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: false,
    },
    {
      name: "John Doe",
      message: "Bye",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: false,
    },
    {
      name: "John Doe",
      message: "👋",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: false,
    },
    {
      name: "John Doe",
      message: "👋",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: true,
    },
    {
      name: "John Doe",
      message:
        "Hi, are you there? I am waiting for your reply. Please reply me. it's urgent. you have to reply me.",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: false,
      isSentByMe: false,
    },
    {
      name: "John Doe",
      message:
        "Okay I am replying you. I am sorry for the late reply. I was busy in my work.",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: false,
      isSentByMe: true,
    },
    {
      name: "John Doe",
      message: "😀",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: false,
      isSentByMe: true,
    },
  ];
  var contact_name = props.contact_name;
  console.log(contact_name);

//   useEffect(() => {
//     forceUpdate();
//   }, []);

// code to find index of element in array
  // function findIndex() {
  //   for (var i = 0; i < Chats.length; i++) {
  //     if (chat[i].name == contact_name) {
  //       return i;
  //       console.log(i)
  //     }
  //   }
  // }
  // var index = findIndex();
  // console.log(index);
  // chat = chat[index];


  return (
    <div className="h-[100vh] flex flex-col grow shrink">
      {/* {
                Chats.map((val,key) => {
                    if(chat.name == contact_name)
                    {
                        return(
                            <div className="h-[60px] bg-[#1E2321] flex items-center justify-between px-4 shadow-sm grow-0 shrink-0" onClick={()=>props.contact(val.name)}>
                                <div className="flex items-center grow shrink" onClick={props.profileDetails}>
                                    <div className="rounded-full h-[40px] w-[40px] bg-cover bg-center mr-4 cursor-pointer" style={{ backgroundImage:`url(${dp})` }} title="Profile Details"></div>
                                    <div className="h-[40px] flex flex-col cursor-pointer">
                                        <p className="text-[16px] leading-[21px] text-white/90">{val.name}</p>
                                        <p className="text-[13px] leading-[19px] text-white/70">Message yourself</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="h-[40px] w-[40px] flex items-center justify-center cursor-pointer rounded-full active:bg-[#0F1110]" title="Audio call" onClick={props.audioCall}>
                                        <MdCall className="text-[#ffffffe6] text-[20px]"/>
                                    </div>
                                    <div className="h-[40px] w-[40px] flex items-center justify-center cursor-pointer rounded-full active:bg-[#0F1110]" title="Video call" onClick={props.videoCall}>
                                        <FaVideo className="text-[#ffffffe6] text-[20px]"/>
                                    </div>
                                    <div className="h-[40px] w-[40px] flex items-center justify-center cursor-pointer rounded-full active:bg-[#0F1110]" onClick={props.searchMessages} title="Search...">
                                        <svg viewBox="0 0 24 24" height="24" width="24" class="fill-[#ffffffe6]">
                                            <path fill="#ffffffe6" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                                        </svg>
                                    </div>
                                    <div className="relative">
                                        <div className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full hover:bg-[#0F1110]" title="Menu" onClick={()=>setMenu(!menu)}>
                                            <svg viewBox="0 0 24 24" height="24" width="24"  class="fill-[#ffffffe6]" >
                                                <path fill="fffffffe6" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
                                            </svg>
                                        </div>
                                        <div className={ menu ? "bg-white rounded-sm shadow-md py-[6px] absolute top-[46px] left-[-200px] w-[230px] h-[252px] animate-chat_single_menu overflow-hidden" : "w-0 h-0 overflow-hidden" }>
                                            <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={props.profileDetails}>Contact info</p>
                                            <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Select messages</p>
                                            <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Close chat</p>
                                            <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Disappearing messages</p>
                                            <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Clear messages</p>
                                            <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Delete chat</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        
                    }
                    // console.log(props.contact_name)
                })
                } */}
    
        <div className="h-[60px] bg-[#1E2321] flex items-center justify-between px-4 shadow-sm grow-0 shrink-0">
        <div className="flex items-center grow shrink" onClick={props.profileDetails}>
            <div className="rounded-full h-[40px] w-[40px] bg-cover bg-center mr-4 cursor-pointer" style={{ backgroundImage:`url(${dp})` }} title="Profile Details"></div>
            <div className="h-[40px] flex flex-col cursor-pointer">
                <p className="text-[16px] leading-[21px] text-white/90">{chat.name}</p>
                <p className="text-[13px] leading-[19px] text-white/70">Message yourself</p>
            </div>
        </div>
        <div className="flex items-center">
            <div className="h-[40px] w-[40px] flex items-center justify-center cursor-pointer rounded-full active:bg-[#0F1110]" title="Audio call" onClick={props.audioCall}>
                <MdCall className="text-[#ffffffe6] text-[20px]"/>
            </div>
            <div className="h-[40px] w-[40px] flex items-center justify-center cursor-pointer rounded-full active:bg-[#0F1110]" title="Video call" onClick={props.videoCall}>
                <FaVideo className="text-[#ffffffe6] text-[20px]"/>
            </div>
            <div className="h-[40px] w-[40px] flex items-center justify-center cursor-pointer rounded-full active:bg-[#0F1110]" onClick={props.searchMessages} title="Search...">
                <svg viewBox="0 0 24 24" height="24" width="24" class="fill-[#ffffffe6]">
                    <path fill="#ffffffe6" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                </svg>
            </div>
            <div className="relative">
                <div>
                  {
                    profileType === "self" ? (
                    <div className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full hover:bg-[#0F1110]" title="Menu" onClick={()=>setMenuSelf(!menuSelf)}>
                      <svg viewBox="0 0 24 24" height="24" width="24"  class="fill-[#ffffffe6]" >
                        <path fill="fffffffe6" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
                      </svg>
                    </div>) : null
                  }
                  {
                    profileType === "business" ? (
                    <div className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full hover:bg-[#0F1110]" title="Menu" onClick={()=>setMenuBusiness(!menuBusiness)}>
                      <svg viewBox="0 0 24 24" height="24" width="24"  class="fill-[#ffffffe6]" >
                        <path fill="fffffffe6" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
                      </svg>
                    </div>) : null
                  }
                  {
                    profileType === "group" ? (
                    <div className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full hover:bg-[#0F1110]" title="Menu" onClick={()=>setMenuGroup(!menuGroup)}>
                      <svg viewBox="0 0 24 24" height="24" width="24"  class="fill-[#ffffffe6]" >
                        <path fill="fffffffe6" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
                      </svg>
                    </div>) : null
                  }
                  {
                    profileType === "normal" ? (
                    <div className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full hover:bg-[#0F1110]" title="Menu" onClick={()=>setMenuNormal(!menuNormal)}>
                      <svg viewBox="0 0 24 24" height="24" width="24"  class="fill-[#ffffffe6]" >
                        <path fill="fffffffe6" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
                      </svg>
                    </div>) : null
                  }
                </div>
                <div className={ menuSelf ? "bg-white rounded-sm shadow-md py-[6px] absolute top-[46px] left-[-200px] w-[230px] h-[252px] animate-chat_single_menu_self overflow-hidden" : "w-0 h-0 overflow-hidden" }>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={props.profileDetails}>Contact info</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Select messages</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Close chat</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Disappearing messages</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Clear messages</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Delete chat</p>
                </div>
                <div className={ menuGroup ? "bg-white rounded-sm shadow-md py-[6px] absolute top-[46px] left-[-200px] w-[230px] h-[212px] animate-chat_single_menu overflow-hidden" : "w-0 h-0 overflow-hidden" }>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={props.profileDetails}>Group info</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Select messages</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Mute Notifications</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Clear messages</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Exit Group</p>
                </div>
                <div className={ menuBusiness ? "bg-white rounded-sm shadow-md py-[6px] absolute top-[46px] left-[-200px] w-[230px] h-[412px] animate-chat_single_menu overflow-hidden" : "w-0 h-0 overflow-hidden" }>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={props.profileDetails}>Contact info</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Business details</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Select messages</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Close chat</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Mute notifications</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Disappearing messages</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Clear messages</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Delete chat</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Report</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Block</p>
                </div>
                <div className={ menuNormal ? "bg-white rounded-sm shadow-md py-[6px] absolute top-[46px] left-[-200px] w-[230px] h-[372px] animate-chat_single_menu overflow-hidden" : "w-0 h-0 overflow-hidden" }>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={props.profileDetails}>Contact info</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Select messages</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Close chat</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Mute Notifications</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Disappearing messages</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Clear messages</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Delete chat</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Report</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Block</p>
                </div>
            </div>
        </div>
        </div>

      <div className="h-full grow shrink bg-cover bg-no-repeat bg-center flex  bg-white"
        style={{ backgroundImage: `url(${whatsapp_web_bg_light})` }}
      >
        <div className=" w-full px-5 lg:px-[65px] pt-2 chat_section overflow-y-scroll">
          <div className="w-full">
            {chat.map((val, key) => {
              return (
                <>
                  <div
                    className={
                      val.isSentByMe === true
                        ? "w-full flex justify-end my-1"
                        : "w-full flex justify-start my-1"
                    }
                  >
                    <div
                      className={
                        val.isSentByMe === true
                          ? "max-w-[60%] bg-[#A52729] text-[#ffffffe6]  rounded-md text-[14px] flex shadow-sm"
                          : "max-w-[60%] bg-white text-[#111b21] h- text-[14px] rounded-md flex shadow-sm"
                      }
                    >
                      <div className="leading-[20px] px-2 py-[7px]">
                        {val.message}
                      </div>
                      <div className="flex items-end pb-[5px] text-[12px] leading-[15px] pr-2">
                        <div
                          className={
                            val.isSentByMe
                              ? "pr-[2px] text-[#ffffffe6] text-[11px]"
                              : "pr-[2px] text-[#111b21] text-[11px]"
                          }
                        >
                          {val.time}
                        </div>
                        <div>
                          {val.isSentByMe === true ? (
                            <>
                              {val.isMessageRead === true ? (
                                <svg
                                  viewBox="0 0 18 18"
                                  height="18"
                                  width="18"
                                  preserveAspectRatio="xMidYMid meet"
                                  class="mr-1"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  enable-background="new 0 0 18 18"
                                >
                                  <path
                                    fill="#53bdeb"
                                    d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"
                                  ></path>
                                </svg>
                              ) : (
                                <svg
                                  viewBox="0 0 18 18"
                                  height="18"
                                  width="18"
                                  preserveAspectRatio="xMidYMid meet"
                                  class="mr-1"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  enable-background="new 0 0 18 18"
                                >
                                  <path
                                    fill="#ececec"
                                    d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"
                                  ></path>
                                </svg>
                              )}
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="h-[64px] bg-[#1e2321] flex items-center px-4 shadow-sm grow-0 shrink-0">
        <div className="h-[52px] w-[26px] flex items-center justify-center cursor-pointer mr-[8px] ml-[10px]">
          <svg
            viewBox="0 0 24 24"
            height="26"
            width="26"
            class="fill-[#ffffffe6]"
          >
            <path
              fill="#ffffffe6"
              d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"
            ></path>
          </svg>
        </div>
        <div
          className="h-[52px] w-[40px] flex items-center justify-center cursor-pointer mr-[10px]"
          title="Attach"
        >
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            class="fill-[#ffffffe6]"
          >
            <path
              fill="#ffffffe6"
              d="M1.816,15.556v0.002c0,1.502,0.584,2.912,1.646,3.972s2.472,1.647,3.974,1.647 c1.501,0,2.91-0.584,3.972-1.645l9.547-9.548c0.769-0.768,1.147-1.767,1.058-2.817c-0.079-0.968-0.548-1.927-1.319-2.698 c-1.594-1.592-4.068-1.711-5.517-0.262l-7.916,7.915c-0.881,0.881-0.792,2.25,0.214,3.261c0.959,0.958,2.423,1.053,3.263,0.215 c0,0,3.817-3.818,5.511-5.512c0.28-0.28,0.267-0.722,0.053-0.936c-0.08-0.08-0.164-0.164-0.244-0.244 c-0.191-0.191-0.567-0.349-0.957,0.04c-1.699,1.699-5.506,5.506-5.506,5.506c-0.18,0.18-0.635,0.127-0.976-0.214 c-0.098-0.097-0.576-0.613-0.213-0.973l7.915-7.917c0.818-0.817,2.267-0.699,3.23,0.262c0.5,0.501,0.802,1.1,0.849,1.685 c0.051,0.573-0.156,1.111-0.589,1.543l-9.547,9.549c-0.756,0.757-1.761,1.171-2.829,1.171c-1.07,0-2.074-0.417-2.83-1.173 c-0.755-0.755-1.172-1.759-1.172-2.828l0,0c0-1.071,0.415-2.076,1.172-2.83c0,0,5.322-5.324,7.209-7.211 c0.157-0.157,0.264-0.579,0.028-0.814c-0.137-0.137-0.21-0.21-0.342-0.342c-0.2-0.2-0.553-0.263-0.834,0.018 c-1.895,1.895-7.205,7.207-7.205,7.207C2.4,12.645,1.816,14.056,1.816,15.556z"
            ></path>
          </svg>
        </div>
        <div className="grow shrink h-[40px] bg-white rounded-xl shadow-sm cursor-pointer" title="Type a message">
          <input type="text" className="outline-none rounded-lg h-[40px] placeholder:text-white/50 text-[15px] px-4 w-full bg-[#0f1110] text-white/60" placeholder="Type a message" onChange={()=>setSend(true)}/>
        </div>
        <div className="h-[37px] w-[52px] flex items-center justify-center cursor-pointer">
          <svg viewBox="0 0 24 24" height="24" width="24" class={ send ? "hidden" : "fill-[#ffffffe6]" }>
            <path fill="#ffffffe6" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z" ></path>
          </svg>
          <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class={ send ? "#ffffffe6" : "hidden" } version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
            <path fill="#ffffffe6" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Chat_section;
