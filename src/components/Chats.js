import Chats_component from "./Chats_component";
import dp from "./images/dp.jfif";
import { useState } from "react";
import New_chats from "./New_chats";
import { Link } from "react-router-dom";
import Unread_chats_component from "./Unread_chats_component";
import Select_chats from "./Select_chats";
import Starred_messages from "./Starred_messages";
import New_group from "./group/New_group";
import New_community from "./New_community";
import Archived from "./Archived";
import Settings from "./Settings";
import Communities from "./Communities";
import Add_new_group_info from "./group/Add_new_group_info";

function Chats(){
    const [ menu, setMenu ] = useState(false);
    const [ newChats, setNewChats ] = useState("");
    const [ community, setCommunity ] = useState("");
    const [ newGroup, setNewGroup ] = useState("");
    const [ addNewGroupInfo, setAddNewGroupInfo ] = useState("");
    const [ newCommunity, setNewCommunity ] = useState("");
    const [ archived, setArchived ] = useState("");
    const [ notified, setNotified ] = useState(false);
    const [ starredMessages, setStarredMessages ] = useState("");
    const [ settings, setSettings ] = useState("");
    const [ selectChats, setSelectChats ] = useState(false);
    const [ logout, setLogout ] = useState(false);
    const [ groupCreationResult, setGroupCreationResult ] = useState(false);

    //unread chats filter
    
    const [ filter, setFilter ] = useState("");

    function handleGroupCreationResult(){
        setGroupCreationResult(false);
        setAddNewGroupInfo(false);
        setNewGroup(false);
    }

    return(
        <div>
            <div className={ newGroup === "" && !(addNewGroupInfo === "") ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : newGroup ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <New_group newGroupFalse={()=>setNewGroup(false)} addNewGroupInfoTrue={()=>setAddNewGroupInfo(true)} />
            </div>

            <div className={ addNewGroupInfo === "" && !(newGroup === "") ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : addNewGroupInfo ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <Add_new_group_info addNewGroupInfoFalse={()=>setAddNewGroupInfo(false)} groupCreationResult={()=>setGroupCreationResult(true)}/>
            </div>

            <div className={ newCommunity === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : newCommunity ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <New_community newCommunity={()=>setNewCommunity(false)}/>
            </div>

            <div className={ archived === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : archived ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <Archived archived={()=>setArchived(false)}/>
            </div>

            <div className={ newChats === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : newChats ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <New_chats newChats={()=>setNewChats(false)}/>
            </div>

            <div className={ settings === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : settings ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <Settings settings={()=>setSettings(false)} />
            </div>

            <div className={ community === "" ? "h-screen w-[400px] fixed left-[-800px] z-10 bg-white" : community ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <Communities community={()=>setCommunity(false)} />
            </div>

            <div className={ starredMessages === "" ? "h-screen w-[400px] fixed left-[-800px] z-10 bg-white" : starredMessages ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-[#f0f2f5] z-10" }>
                <Starred_messages starredMessages={()=>setStarredMessages(false)}/>
            </div>

            <div className={ logout ? "fixed w-screen min-h-screen flex items-center justify-center bg-white/90 z-10 opacity-0 animate-opacity" : "hidden"}>
                <div className="bg-white p-6 rounded-md shadow-xl w-[480px]">
                    <p className="text-[20px] leading-[25px] text-[#3b4a54]">Log out?</p>
                    <p className="text-[14px] leading-[20px] text-[#3b4a54] mt-4">Are you sure you want to logout?</p>
                    <div className="mt-10 flex w-full justify-end">
                        <button className="h-[36px] rounded-sm text-[#0B856F] px-4 leading-[36px] border mr-2" onClick={()=>setLogout(false)}>CANCEL</button>
                        <button className="h-[36px] leading-[36px] bg-[#008069] text-white px-4 font-medium rounded-sm">LOG OUT</button>
                    </div>
                </div>
            </div>

            <div className={ groupCreationResult ? "fixed w-screen min-h-screen flex items-center justify-center bg-white/90 z-10 opacity-0 animate-opacity" : "hidden"}>
                <div className={groupCreationResult ? "bg-white p-6 rounded-md shadow-xl w-[480px] animate-group_creation_result_true" : "animate-group_creation_result_false"} >
                    <p className="text-[14px] leading-[20px] text-[#3b4a54] mt-4">couldn't add +917456998001. You can invite them privately to join this group.</p>
                    <div className="mt-10 flex w-full justify-end">
                        <button className="h-[36px] rounded-sm text-[#0B856F] px-4 leading-[36px] border mr-2" onClick={handleGroupCreationResult}>CANCEL</button>
                        <button className="h-[36px] leading-[36px] bg-[#008069] text-white px-4 font-medium rounded-sm">INVITE TO GROUP</button>
                    </div>
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
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={()=>setLogout(true)}>Log out</p>
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