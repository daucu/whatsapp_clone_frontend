import dp from "./images/dp.jfif";
import whatsapp_web_bg_light from "./images/whatsapp_web_bg_light.jpg";
import { useEffect, useState } from "react";

function Chat_single(){
    const [ searchMessagesWidth, setSearchMessagesWidth ] = useState("");

    const [ menu, setMenu ] = useState(false);

    function setSearchMessagesWidthTrue(){
        setSearchMessagesWidth(true);
    }
    function setSearchMessagesWidthFalse(){
        setSearchMessagesWidth(false);
    }

    function SetMenuChatSingle(){
        setMenu(!menu);
    }


    return(
        <div className="chat_single flex">
            <div className="h-[100vh] flex flex-col grow shrink">
                <div className="h-[60px] bg-[#f0f2f5] flex items-center justify-between px-4 shadow-sm grow-0 shrink-0">
                    <div className="flex items-center grow shrink">
                        <div className="rounded-full h-[40px] w-[40px] bg-cover bg-center mr-4 cursor-pointer" style={{backgroundImage:`url(${dp})`}} title="Profile details"></div>
                        <div className="h-[40px] flex flex-col cursor-pointer">
                            <p className="text-[16px] leading-[21px] text-[#111b21]">Arman (You)</p>
                            <p className="text-[13px] leading-[19px] text-[#667781]">Message yourself</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                            <div className="h-[40px] w-[40px] flex items-center justify-center cursor-pointer rounded-full active:bg-[#D9DBDE]" onClick={setSearchMessagesWidthTrue} title="Search...">
                                <svg viewBox="0 0 24 24" height="24" width="24" class="fill-[#54656f]">
                                    <path fill="#54656f" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                                </svg>
                            </div>
                            <div className="relative">
                                <div className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full hover:bg-[#D9DBDE]" title="Menu" onClick={SetMenuChatSingle}>
                                    <svg viewBox="0 0 24 24" height="24" width="24"  class="fill-[#54656f]" >
                                        <path fill="#54656f" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
                                    </svg>
                                </div>
                                <div className={ menu ? "bg-white rounded-sm shadow-md py-[6px] absolute top-[46px] left-[-200px] w-[230px] h-[252px] animate-chat_single_menu overflow-hidden" : "w-0 h-0 overflow-hidden" }>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Contact info</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Select messages</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Close chat</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Disappearing messages</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Clear messages</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Delete chat</p>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="h-full grow shrink bg-cover bg-no-repeat bg-center flex" style={{backgroundImage:`url(${whatsapp_web_bg_light})`}}>
                    <div className="w-full">

                    </div>
                </div>

                <div className="h-[64px] bg-[#F0F2F5] flex items-center px-4 shadow-sm grow-0 shrink-0">
                    <div className="h-[52px] w-[26px] flex items-center justify-center cursor-pointer mr-[8px] ml-[10px]">
                        <svg viewBox="0 0 24 24" height="26" width="26" class="fill-[#54656f]">
                            <path fill="#54656f" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
                        </svg>
                    </div>
                    <div className="h-[52px] w-[40px] flex items-center justify-center cursor-pointer mr-[10px]">
                        <svg viewBox="0 0 24 24" height="24" width="24" class="fill-[#54656f]">
                            <path fill="#54656f" d="M1.816,15.556v0.002c0,1.502,0.584,2.912,1.646,3.972s2.472,1.647,3.974,1.647 c1.501,0,2.91-0.584,3.972-1.645l9.547-9.548c0.769-0.768,1.147-1.767,1.058-2.817c-0.079-0.968-0.548-1.927-1.319-2.698 c-1.594-1.592-4.068-1.711-5.517-0.262l-7.916,7.915c-0.881,0.881-0.792,2.25,0.214,3.261c0.959,0.958,2.423,1.053,3.263,0.215 c0,0,3.817-3.818,5.511-5.512c0.28-0.28,0.267-0.722,0.053-0.936c-0.08-0.08-0.164-0.164-0.244-0.244 c-0.191-0.191-0.567-0.349-0.957,0.04c-1.699,1.699-5.506,5.506-5.506,5.506c-0.18,0.18-0.635,0.127-0.976-0.214 c-0.098-0.097-0.576-0.613-0.213-0.973l7.915-7.917c0.818-0.817,2.267-0.699,3.23,0.262c0.5,0.501,0.802,1.1,0.849,1.685 c0.051,0.573-0.156,1.111-0.589,1.543l-9.547,9.549c-0.756,0.757-1.761,1.171-2.829,1.171c-1.07,0-2.074-0.417-2.83-1.173 c-0.755-0.755-1.172-1.759-1.172-2.828l0,0c0-1.071,0.415-2.076,1.172-2.83c0,0,5.322-5.324,7.209-7.211 c0.157-0.157,0.264-0.579,0.028-0.814c-0.137-0.137-0.21-0.21-0.342-0.342c-0.2-0.2-0.553-0.263-0.834,0.018 c-1.895,1.895-7.205,7.207-7.205,7.207C2.4,12.645,1.816,14.056,1.816,15.556z"></path>
                        </svg>
                    </div>
                    <div className="grow shrink h-[40px] bg-white rounded-lg shadow-sm cursor-pointer">
                        <input type="text" className="outline-none rounded-lg h-[40px] placeholder:text-[#3b4a54] text-[15px] px-4" placeholder="Type a message"/>
                    </div>
                    <div className="h-[37px] w-[52px] flex items-center justify-center cursor-pointer">
                        <svg viewBox="0 0 24 24" height="24" width="24" class="fill-[#54656f]">
                            <path fill="#54656f" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={ searchMessagesWidth === "" ? "h-[100vh] w-[0px] overflow-hidden" : searchMessagesWidth ? "animate-search_messages_full overflow-hidden" : "animate-search_messages_zero overflow-hidden"  }>
                <div className="h-[60px] bg-[#f0f2f5] flex items-center px-4 shadow-sm grow-0 shrink-0 border-l border-[#D1D7DB]">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#54656f" enable-background="new 0 0 24 24" onClick={setSearchMessagesWidthFalse}>
                        <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                    </svg>
                    <p className="text-[#111b21] text-[16px]">Search Messages</p>
                </div>
                <div className="h-[50px] flex items-center px-[10px] grow-0 shrink-0 border-b border-[#E9EDEF]">
                    <div className="flex items-center bg-[#F0F2F5] rounded-lg w-full h-[35px] px-4">
                        <svg viewBox="0 0 24 24" height="20" width="20" class="fill-[#54656f]">
                            <path fill="#54656f" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                        </svg>
                        <div className="w-full"><input type="text" className="bg-[#F0F2F5] outline-none placeholder:text-[#3b4a54] text-[13px] px-7 w-full" placeholder="Search..."/></div>
                    </div>
                </div>
                <div className="px-[50px] py-[90px]">
                    <p className="text-[#8698a0] text-[14px] leading-[20px] text-center">Search messages with yourself.</p>
                </div>
            </div>
        </div>
        );
}
export default Chat_single;