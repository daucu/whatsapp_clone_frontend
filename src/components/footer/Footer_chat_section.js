import  Emoji  from "./../Emoji";
import React from 'react';
import { Attach_icon, Emoji_icon, Mic_icon, Seen_icon, Send_icon, Unseen_icon } from "../Svg";

export default function Footer_chat_section() {
  const [send, setSend] = React.useState(true);
  const [emoji, setEmoji] = React.useState(false);

  function handleSend(e) {
    let msg = e.target.value;
    if (!(msg === "")) { setSend(false); } else { setSend(true); }
  }
  const sendMessage = () => {

  }


  return (
    <div className="h-[64px] bg-[#1e2321] flex items-center px-4 shadow-sm grow-0 shrink-0">
      <div className="h-[52px] w-[26px] flex items-center justify-center cursor-pointer mr-[8px] ml-[10px] relative">
        <div className={ emoji ? "absolute top-[-460px] left-0" : "hidden"}><Emoji/></div>
        <div onClick={()=>setEmoji(!emoji)}>{Emoji_icon}</div>
      </div>
      <div className="h-[52px] w-[40px] flex items-center justify-center cursor-pointer mr-[10px]" title="Attach">
        {Attach_icon}
      </div>
      <div className="grow shrink h-[40px] bg-white rounded-xl shadow-sm cursor-pointer" title="Type a message">
        <input type="text" className="outline-none rounded-lg h-[40px] placeholder:text-white/50 text-[15px] px-4 w-full bg-[#0f1110] text-white/60" placeholder="Type a message" onChange={(e) => handleSend(e)} />
      </div>
      <div className="h-[37px] w-[52px] flex items-center justify-center cursor-pointer">
        {send ? (Mic_icon) : (
          <div onClick={sendMessage}>
            Send_icon
          </div>)}
      </div>
    </div>
  )
}
