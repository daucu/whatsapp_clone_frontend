import { Link } from "react-router-dom";
import dp from "./../images/dp.jfif";
import "./Settings.css";

function Settings(props){
    return (
        <div className="settings h-screen max-h-screen">
            <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                <div className="h-[54px] w-full flex items-center">
                    <Link to="/">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>   
                    </Link>
                    <p className="text-[19px] text-[#ffffffe6] font-medium">Settings</p>
                </div>
            </div>
                
            <div className="settings overflow-y-scroll h-[calc(100vh-108px)]">
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
                    <div className="h-[60px] hidden items-center">
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
                    <Link to="/settings/notifications" className="h-[60px] flex items-center">
                        <div className="w-[74px] flex items-center justify-center">
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                <path fill="#8696A0" d="M12,21.7c0.9,0,1.7-0.8,1.7-1.7h-3.4C10.3,20.9,11.1,21.7,12,21.7z M17.6,16.5v-4.7 c0-2.7-1.8-4.8-4.3-5.4V5.8c0-0.7-0.6-1.3-1.3-1.3s-1.3,0.6-1.3,1.3v0.6C8.2,7,6.4,9.1,6.4,11.8v4.7l-1.7,1.7v0.9h14.6v-0.9 L17.6,16.5z"></path>
                            </svg>
                        </div>
                        <div className="text-[17px] text-[#111b21] h-full flex items-center border-b grow">Notifications</div>
                    </Link>
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
                    <Link to="/settings/help" className="h-[60px] flex items-center">
                        <div className="w-[74px] flex items-center justify-center">
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                <path fill="#8696a0" d="M12,4.7c-4.5,0-8.2,3.7-8.2,8.2s3.7,8.2,8.2,8.2s8.2-3.7,8.2-8.2S16.5,4.7,12,4.7z  M12.8,18.6h-1.6V17h1.6V18.6z M14.5,12.3L13.8,13c-0.7,0.6-1,1.1-1,2.3h-1.6v-0.4c0-0.9,0.3-1.7,1-2.3l1-1.1 c0.3-0.2,0.5-0.7,0.5-1.1c0-0.9-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6H8.7c0-1.8,1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3 C15.3,11.2,14.9,11.8,14.5,12.3z"></path>
                            </svg>
                        </div>
                        <div className="text-[17px] text-[#111b21] h-full flex items-center border-b grow">Help</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Settings;