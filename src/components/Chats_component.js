import dp from "./images/dp.jfif";
import neeraj_dp from "./images/neeraj_dp.jpeg";
import sahil_dp from "./images/sahil_dp.jpg";
import chats_component_dp from "./images/chats_component_dp.svg";
import {BsPersonCircle} from "react-icons/bs";
import rishi_mam_dp from "./images/rishi_mam_dp.jfif";
import nayan_roy_dp from "./images/nayan_roy_dp.jpg";
import daya_dp from "./images/daya_dp.jpg";
import anas_dp from "./images/anas_dp.enc";
import harsh_sir_dp from "./images/harsh_sir_dp.jfif";
import km_dp from "./images/km.jpg";
import { useState, useEffect } from "react";

function Chats_component(props){
    
  

    // var contact_name = "";

    function handleSingleChatContent(a){
        // contact_name = a;
        // props.contact_name(contact_name);
    }

    const chats = [
        {
            name: "Sahil_khatri",
            dp: sahil_dp,
            is_online: true,
            last_seen: "12:00",
            last_message: {
                    is_sent_by_me: true,
                    is_sent: true,
                    is_delivered: true,
                    is_seen: true,
                    is_text: false,
                    is_audio: false,
                    audio_duration: "0:02",
                    is_video: false,
                    is_document: false,
                    document_name: "",
                    is_sticker: false,
                    is_image: true,
                    is_gif: false,
                    is_contact: false,
                    is_location: false,
                    is_audio_call: false,
                    is_video_call: false,
                    message: "thik ha",
                    time: "14:55",
                }
        },
        {
            name: "Aman",
            dp: "",
            is_online: true,
            last_seen: "12:00",
            last_message: {
                    is_sent_by_me: false,
                    is_sent: true,
                    is_delivered: true,
                    is_seen: true,
                    is_text: false,
                    is_audio: false,
                    audio_duration: "",
                    is_video: false,
                    is_document: false,
                    document_name: "",
                    is_sticker: false,
                    is_image: true,
                    is_gif: false,
                    is_contact: false,
                    is_location: false,
                    is_audio_call: false,
                    is_video_call: false,
                    message: "thik ha",
                    time: "yesterday",
                }
        },
        {
            name: "Rishi_mam",
            dp: rishi_mam_dp,
            is_online: true,
            last_seen: "12:00",
            last_message: {
                    is_sent_by_me: true,
                    is_sent: true,
                    is_delivered: true,
                    is_seen: false,
                    is_text: true,
                    is_audio: false,
                    audio_duration: "",
                    is_video: false,
                    is_document: false,
                    document_name: "",
                    is_sticker: false,
                    is_image: true,
                    is_gif: false,
                    is_contact: false,
                    is_location: false,
                    is_audio_call: false,
                    is_video_call: false,
                    message: "Ok mam",
                    time: "yesterday",
                }
        },
        {
            name: "Nayan Roy",
            dp: nayan_roy_dp,
            is_online: true,
            last_seen: "12:00",
            last_message: {
                    is_sent_by_me: true,
                    is_sent: true,
                    is_delivered: true,
                    is_seen: false,
                    is_text: true,
                    is_audio: false,
                    audio_duration: "",
                    is_video: false,
                    is_document: false,
                    document_name: "",
                    is_sticker: false,
                    is_image: true,
                    is_gif: false,
                    is_contact: false,
                    is_location: false,
                    is_audio_call: false,
                    is_video_call: false,
                    message: "ok bro",
                    time: "yesterday",
                }
        },
        {
            name: "Daya_Sagar_Office",
            dp: daya_dp,
            is_online: true,
            last_seen: "12:00",
            last_message: {
                    is_sent_by_me: false,
                    is_sent: true,
                    is_delivered: true,
                    is_seen: false,
                    is_text: true,
                    is_audio: false,
                    audio_duration: "",
                    is_video: false,
                    is_document: false,
                    document_name: "",
                    is_sticker: false,
                    is_image: true,
                    is_gif: false,
                    is_contact: false,
                    is_location: false,
                    is_audio_call: false,
                    is_video_call: false,
                    message: "Bhai ram ji ka no ha kya",
                    time: "yesterday",
                }
        },
        {
            name: "Anas Khan",
            dp: anas_dp,
            is_online: true,
            last_seen: "12:00",
            last_message: {
                    is_sent_by_me: false,
                    is_sent: true,
                    is_delivered: true,
                    is_seen: false,
                    is_text: true,
                    is_audio: false,
                    audio_duration: "",
                    is_video: false,
                    is_document: false,
                    document_name: "",
                    is_sticker: false,
                    is_image: true,
                    is_gif: false,
                    is_contact: false,
                    is_location: false,
                    is_audio_call: false,
                    is_video_call: false,
                    message: "Jo form bharega usko free transport milega",
                    time: "yesterday",
                }
        },
        {
            name: "Harsh_sir",
            dp: harsh_sir_dp,
            is_online: true,
            last_seen: "12:00",
            last_message: {
                    is_sent_by_me: false,
                    is_sent: true,
                    is_delivered: true,
                    is_seen: false,
                    is_text: true,
                    is_audio: false,
                    audio_duration: "",
                    is_video: false,
                    is_document: false,
                    document_name: "",
                    is_sticker: false,
                    is_image: true,
                    is_gif: false,
                    is_contact: false,
                    is_location: false,
                    is_audio_call: false,
                    is_video_call: false,
                    message: "okay",
                    time: "yesterday",
                }
        },
        {
            name: "Kampodar Mama",
            dp: km_dp,
            is_online: true,
            last_seen: "12:00",
            last_message: {
                    is_sent_by_me: false,
                    is_sent: true,
                    is_delivered: true,
                    is_seen: false,
                    is_text: false,
                    is_audio: false,
                    audio_duration: "",
                    is_video: true,
                    is_document: false,
                    document_name: "",
                    is_sticker: false,
                    is_image: false,
                    is_gif: false,
                    is_contact: false,
                    is_location: false,
                    is_audio_call: false,
                    is_video_call: false,
                    message: "okay",
                    time: "05/03/2023",
                }
        },
        {
            name: "Arman (You)",
            dp: dp,
            is_online: true,
            last_seen: "12:00",
            last_message: {
                    is_sent_by_me: true,
                    is_sent: true,
                    is_delivered: true,
                    is_seen: true,
                    is_text: false,
                    is_audio: false,
                    audio_duration: "",
                    is_video: false,
                    is_document: true,
                    document_name: "whatsapp_web_copy_zip.zip",
                    is_sticker: false,
                    is_image: false,
                    is_gif: false,
                    is_contact: false,
                    is_location: false,
                    is_audio_call: false,
                    is_video_call: false,
                    message: "okay",
                    time: "05/03/2023",
                }
        },
    ]
    return(
        <div>
            <div className="hidden">
                <div className="h-[72px] cursor-pointer w-full flex items-center pr-[8px] hover:bg-[#F0F2F5] hover:transition-all">
                    <div className="w-[49px] h-[49px] mx-[15px]">
                        <img src={dp} alt="" className="h-[49px] w-[49px] rounded-full"/>
                        <svg viewBox="0 0 212 212" height="49" width="49" preserveAspectRatio="xMidYMid meet" class="hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                            <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                            <g>
                                <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="grow border-b h-[72px] flex items-center">
                        <div className="h-[42px] w-full pr-[10px]">
                            <div className="h-[22px] flex items-center justify-between">
                                <div className="text-[#111b21] text-[17px]">Arman (You)</div>
                                <div className="text-[12px] text-[#667781]">15:22</div>
                            </div>
                            <div className="h-[20px]">
                                <div className="flex items-center">
                                    <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="mr-1" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18">
                                        <path fill="#53bdeb" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                                    </svg>
                                    <div className="flex items-center">
                                        <svg viewBox="0 0 16 20" height="20" width="16" preserveAspectRatio="xMidYMid meet" class="mr-[2px]" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 20">
                                            <path fill="#8696a0" d="M13.822,4.668H7.14l-1.068-1.09C5.922,3.425,5.624,3.3,5.409,3.3H3.531 c-0.214,0-0.51,0.128-0.656,0.285L1.276,5.296C1.13,5.453,1.01,5.756,1.01,5.971v1.06c0,0.001-0.001,0.002-0.001,0.003v6.983 c0,0.646,0.524,1.17,1.17,1.17h11.643c0.646,0,1.17-0.524,1.17-1.17v-8.18C14.992,5.191,14.468,4.668,13.822,4.668z M7.84,13.298 c-1.875,0-3.395-1.52-3.395-3.396c0-1.875,1.52-3.395,3.395-3.395s3.396,1.52,3.396,3.395C11.236,11.778,9.716,13.298,7.84,13.298z  M7.84,7.511c-1.321,0-2.392,1.071-2.392,2.392s1.071,2.392,2.392,2.392s2.392-1.071,2.392-2.392S9.161,7.511,7.84,7.511z"></path>
                                        </svg>
                                        <p className="text-[#3b4a54] text-[15px]">Photo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[72px] cursor-pointer w-full flex items-center pr-[8px] hover:bg-[#F0F2F5] hover:transition-all">
                    <div className="w-[49px] h-[49px] mx-[15px]">
                        <img src="{}" alt="" className="h-[49px] w-[49px] rounded-full hidden"/>
                        <svg viewBox="0 0 212 212" height="49" width="49" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                            <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                            <g>
                                <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="grow border-b h-[72px] flex items-center">
                        <div className="h-[42px] w-full pr-[10px]">
                            <div className="h-[22px] flex items-center justify-between">
                                <div className="text-[#111b21] text-[17px]">+91 75055 33278</div>
                                <div className="text-[12px] text-[#667781]">15:22</div>
                            </div>
                            <div className="h-[20px]">
                                <div className="flex items-center">
                                    <svg viewBox="0 0 14 18" height="18" width="14" preserveAspectRatio="xMidYMid meet" class="mr-1" version="1.1" x="0px" y="0px" enable-background="new 0 0 14 18" >
                                        <path fill="#8696a0" d="M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                                    </svg>
                                    <p className="text-[#3b4a54] text-[15px]">hi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[72px] cursor-pointer w-full flex items-center pr-[8px] hover:bg-[#F0F2F5] hover:transition-all">
                    <div className="w-[49px] h-[49px] mx-[15px]">
                        <img src={neeraj_dp} alt="" className="h-[49px] w-[49px] rounded-full"/>
                        <svg viewBox="0 0 212 212" height="49" width="49" preserveAspectRatio="xMidYMid meet" class="hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                            <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                            <g>
                                <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="grow border-b h-[72px] flex items-center">
                        <div className="h-[42px] w-full pr-[10px]">
                            <div className="h-[22px] flex items-center justify-between">
                                <div className="text-[#111b21] text-[17px]">Neeraj_Bro_Office</div>
                                <div className="text-[12px] text-[#667781]">15:22</div>
                            </div>
                            <div className="h-[20px]">
                                <div className="flex items-center">
                                    <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="mr-1" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18">
                                        <path fill="#53bdeb" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                                    </svg>
                                    <div className="flex items-center">
                                        <svg viewBox="0 0 13 20" height="20" width="13" preserveAspectRatio="xMidYMid meet" class="mr-[2px]" version="1.1" x="0px" y="0px" enable-background="new 0 0 13 20">
                                            <path fill="#8696a0" d="M10.2,3H2.5C1.7,3,1,3.7,1,4.5v10.1C1,15.3,1.7,16,2.5,16h7.7c0.8,0,1.5-0.7,1.5-1.5v-10 C11.6,3.7,11,3,10.2,3z M7.6,12.7H3.5v-1.3h4.1V12.7z M9.3,10H3.5V8.7h5.8V10z M9.3,7.3H3.5V6h5.8V7.3z"></path>
                                        </svg>
                                        <p className="text-[#3b4a54] text-[15px]">harsha_news_2702_zip.zip</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[72px] cursor-pointer w-full flex items-center pr-[8px] hover:bg-[#F0F2F5] hover:transition-all">
                    <div className="w-[49px] h-[49px] mx-[15px]">
                        <img src={neeraj_dp} alt="" className="h-[49px] w-[49px] rounded-full"/>
                        <svg viewBox="0 0 212 212" height="49" width="49" preserveAspectRatio="xMidYMid meet" class="hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                            <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                            <g>
                                <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="grow border-b h-[72px] flex items-center">
                        <div className="h-[42px] w-full pr-[10px]">
                            <div className="h-[22px] flex items-center justify-between">
                                <div className="text-[#111b21] text-[17px]">Neeraj_Bro_Office</div>
                                <div className="text-[12px] text-[#667781]">15:22</div>
                            </div>
                            <div className="h-[20px]">
                                <div className="flex items-center">
                                    <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="mr-1" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18">
                                        <path fill="#53bdeb" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                                    </svg>
                                    <div className="flex items-center">
                                        <svg viewBox="0 0 13 20" height="20" width="13" preserveAspectRatio="xMidYMid meet" class="mr-[2px]" version="1.1" x="0px" y="0px" enable-background="new 0 0 13 20">
                                            <path fill="#8696a0" d="M10.2,3H2.5C1.7,3,1,3.7,1,4.5v10.1C1,15.3,1.7,16,2.5,16h7.7c0.8,0,1.5-0.7,1.5-1.5v-10 C11.6,3.7,11,3,10.2,3z M7.6,12.7H3.5v-1.3h4.1V12.7z M9.3,10H3.5V8.7h5.8V10z M9.3,7.3H3.5V6h5.8V7.3z"></path>
                                        </svg>
                                        <p className="text-[#3b4a54] text-[15px]">harsha_news_2702_zip.zip</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[72px] cursor-pointer w-full flex items-center pr-[8px] hover:bg-[#F0F2F5] hover:transition-all">
                    <div className="w-[49px] h-[49px] mx-[15px]">
                        <img src={neeraj_dp} alt="" className="h-[49px] w-[49px] rounded-full"/>
                        <svg viewBox="0 0 212 212" height="49" width="49" preserveAspectRatio="xMidYMid meet" class="hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                            <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                            <g>
                                <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="grow border-b h-[72px] flex items-center">
                        <div className="h-[42px] w-full pr-[10px]">
                            <div className="h-[22px] flex items-center justify-between">
                                <div className="text-[#111b21] text-[17px]">Neeraj_Bro_Office</div>
                                <div className="text-[12px] text-[#667781]">15:22</div>
                            </div>
                            <div className="h-[20px]">
                                <div className="flex items-center">
                                    <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="mr-1" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18">
                                        <path fill="#53bdeb" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                                    </svg>
                                    <div className="flex items-center">
                                        <svg viewBox="0 0 13 20" height="20" width="13" preserveAspectRatio="xMidYMid meet" class="mr-[2px]" version="1.1" x="0px" y="0px" enable-background="new 0 0 13 20">
                                            <path fill="#8696a0" d="M10.2,3H2.5C1.7,3,1,3.7,1,4.5v10.1C1,15.3,1.7,16,2.5,16h7.7c0.8,0,1.5-0.7,1.5-1.5v-10 C11.6,3.7,11,3,10.2,3z M7.6,12.7H3.5v-1.3h4.1V12.7z M9.3,10H3.5V8.7h5.8V10z M9.3,7.3H3.5V6h5.8V7.3z"></path>
                                        </svg>
                                        <p className="text-[#3b4a54] text-[15px]">harsha_news_2702_zip.zip</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[72px] cursor-pointer w-full flex items-center pr-[8px] hover:bg-[#F0F2F5] hover:transition-all">
                    <div className="w-[49px] h-[49px] mx-[15px]">
                        <img src={neeraj_dp} alt="" className="h-[49px] w-[49px] rounded-full"/>
                        <svg viewBox="0 0 212 212" height="49" width="49" preserveAspectRatio="xMidYMid meet" class="hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                            <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                            <g>
                                <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="grow border-b h-[72px] flex items-center">
                        <div className="h-[42px] w-full pr-[10px]">
                            <div className="h-[22px] flex items-center justify-between">
                                <div className="text-[#111b21] text-[17px]">Neeraj_Bro_Office</div>
                                <div className="text-[12px] text-[#667781]">15:22</div>
                            </div>
                            <div className="h-[20px]">
                                <div className="flex items-center">
                                    <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="mr-1" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18">
                                        <path fill="#53bdeb" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                                    </svg>
                                    <div className="flex items-center">
                                        <svg viewBox="0 0 13 20" height="20" width="13" preserveAspectRatio="xMidYMid meet" class="mr-[2px]" version="1.1" x="0px" y="0px" enable-background="new 0 0 13 20">
                                            <path fill="#8696a0" d="M10.2,3H2.5C1.7,3,1,3.7,1,4.5v10.1C1,15.3,1.7,16,2.5,16h7.7c0.8,0,1.5-0.7,1.5-1.5v-10 C11.6,3.7,11,3,10.2,3z M7.6,12.7H3.5v-1.3h4.1V12.7z M9.3,10H3.5V8.7h5.8V10z M9.3,7.3H3.5V6h5.8V7.3z"></path>
                                        </svg>
                                        <p className="text-[#3b4a54] text-[15px]">harsha_news_2702_zip.zip</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[72px] cursor-pointer w-full flex items-center pr-[8px] hover:bg-[#F0F2F5] hover:transition-all">
                    <div className="w-[49px] h-[49px] mx-[15px]">
                        <img src={neeraj_dp} alt="" className="h-[49px] w-[49px] rounded-full"/>
                        <svg viewBox="0 0 212 212" height="49" width="49" preserveAspectRatio="xMidYMid meet" class="hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                            <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                            <g>
                                <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="grow border-b h-[72px] flex items-center">
                        <div className="h-[42px] w-full pr-[10px]">
                            <div className="h-[22px] flex items-center justify-between">
                                <div className="text-[#111b21] text-[17px]">Neeraj_Bro_Office</div>
                                <div className="text-[12px] text-[#667781]">15:22</div>
                            </div>
                            <div className="h-[20px]">
                                <div className="flex items-center">
                                    <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="mr-1" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18">
                                        <path fill="#53bdeb" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                                    </svg>
                                    <div className="flex items-center">
                                        <svg viewBox="0 0 13 20" height="20" width="13" preserveAspectRatio="xMidYMid meet" class="mr-[2px]" version="1.1" x="0px" y="0px" enable-background="new 0 0 13 20">
                                            <path fill="#8696a0" d="M10.2,3H2.5C1.7,3,1,3.7,1,4.5v10.1C1,15.3,1.7,16,2.5,16h7.7c0.8,0,1.5-0.7,1.5-1.5v-10 C11.6,3.7,11,3,10.2,3z M7.6,12.7H3.5v-1.3h4.1V12.7z M9.3,10H3.5V8.7h5.8V10z M9.3,7.3H3.5V6h5.8V7.3z"></path>
                                        </svg>
                                        <p className="text-[#3b4a54] text-[15px]">harsha_news_2702_zip.zip</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[72px] cursor-pointer w-full flex items-center pr-[8px] hover:bg-[#F0F2F5] hover:transition-all">
                    <div className="w-[49px] h-[49px] mx-[15px]">
                        <img src={neeraj_dp} alt="" className="h-[49px] w-[49px] rounded-full"/>
                        <svg viewBox="0 0 212 212" height="49" width="49" preserveAspectRatio="xMidYMid meet" class="hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                            <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                            <g>
                                <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="grow border-b h-[72px] flex items-center">
                        <div className="h-[42px] w-full pr-[10px]">
                            <div className="h-[22px] flex items-center justify-between">
                                <div className="text-[#111b21] text-[17px]">Neeraj_Bro_Office</div>
                                <div className="text-[12px] text-[#667781]">15:22</div>
                            </div>
                            <div className="h-[20px]">
                                <div className="flex items-center">
                                    <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="mr-1" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18">
                                        <path fill="#53bdeb" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                                    </svg>
                                    <div className="flex items-center">
                                        <svg viewBox="0 0 13 20" height="20" width="13" preserveAspectRatio="xMidYMid meet" class="mr-[2px]" version="1.1" x="0px" y="0px" enable-background="new 0 0 13 20">
                                            <path fill="#8696a0" d="M10.2,3H2.5C1.7,3,1,3.7,1,4.5v10.1C1,15.3,1.7,16,2.5,16h7.7c0.8,0,1.5-0.7,1.5-1.5v-10 C11.6,3.7,11,3,10.2,3z M7.6,12.7H3.5v-1.3h4.1V12.7z M9.3,10H3.5V8.7h5.8V10z M9.3,7.3H3.5V6h5.8V7.3z"></path>
                                        </svg>
                                        <p className="text-[#3b4a54] text-[15px]">harsha_news_2702_zip.zip</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="new">
{chats.map((chat_item) => {return(
    <div className="h-[72px] cursor-pointer w-full flex items-center pr-[8px] hover:bg-[#F0F2F5] hover:transition-all" onclick={() => props.contact(chat_item.name)}>

        <div className="w-[49px] h-[49px] mx-[15px] flex items-center bg-[#DFE5E7] overflow-hidden rounded-full justify-center">
            {
                chat_item.dp === "" ? (<BsPersonCircle className="text-[49px] text-white border"/>):(<img src={chat_item.dp} alt="" className="h-[49px] w-[49px] rounded-full"/>)
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
                                                (
                                                    <div>
                                                        <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18">
                                                            <path fill="#53bdeb" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                                                        </svg>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18">
                                                            <path fill="#8696a0" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                                                        </svg>
                                                    </div>
                                                    )
                                            }
                                            </div>
                                        ) : (
                                            <div>
                                                <svg viewBox="0 0 14 18" height="18" width="14" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 14 18">
                                                    <path fill="#8696a0" d="M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                                                </svg>
                                            </div>
                                            )
                                    }
                                    </div>
                                ) : (
                                    <div>
                                        <svg viewBox="0 0 14 18" height="18" width="14" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 14 18">
                                            <path fill="#8696a0" d="M8.906,10.132h-1.64V7.569c0-0.3-0.243-0.545-0.545-0.545H6.619 c-0.3,0-0.545,0.243-0.545,0.545v3.21c0,0.3,0.243,0.545,0.545,0.545h0.102c0.001,0,0.002-0.001,0.003-0.001 s0.002,0.001,0.003,0.001h2.178c0.3,0,0.545-0.243,0.545-0.545v-0.102C9.451,10.376,9.206,10.132,8.906,10.132z M8.906,4.4H5.094 C3.112,4.4,1.5,6.012,1.5,7.994v3.812c0,1.982,1.612,3.594,3.594,3.594h3.812c1.982,0,3.594-1.612,3.594-3.594V7.994 C12.5,6.012,10.888,4.4,8.906,4.4z M11.084,11.806c0,1.203-0.975,2.178-2.178,2.178H5.094c-1.203,0-2.178-0.975-2.178-2.178V7.994 c0-1.203,0.975-2.178,2.178-2.178h3.812c1.203,0,2.178,0.975,2.178,2.178V11.806z"></path>
                                        </svg>
                                    </div>                                   
                                    )
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
        <svg viewBox="0 0 12 20" height="20" width="12" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 12 20">
            <path fill="#8696a0" d="M6,11.745c1.105,0,2-0.896,2-2V4.941c0-1.105-0.896-2-2-2s-2,0.896-2,2v4.803 C4,10.849,4.895,11.745,6,11.745z M9.495,9.744c0,1.927-1.568,3.495-3.495,3.495s-3.495-1.568-3.495-3.495H1.11 c0,2.458,1.828,4.477,4.192,4.819v2.495h1.395v-2.495c2.364-0.342,4.193-2.362,4.193-4.82H9.495V9.744z"></path>
        </svg>
        <p className="text-[#3b4a54] text-[15px]">{chat_item.last_message.audio_duration}</p>
    </div>) : null
}
{
    chat_item.last_message.is_video ? (
    <div className="flex items-center">
        <svg viewBox="0 0 16 20" height="20" width="16" preserveAspectRatio="xMidYMid meet" class="mr-[2px]" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 20">
            <path fill="#8696a0" d="M15.243,5.868l-3.48,3.091v-2.27c0-0.657-0.532-1.189-1.189-1.189H1.945 c-0.657,0-1.189,0.532-1.189,1.189v7.138c0,0.657,0.532,1.189,1.189,1.189h8.629c0.657,0,1.189-0.532,1.189-1.189v-2.299l3.48,3.09 V5.868z"></path>
        </svg>
        <p className="text-[#3b4a54] text-[15px]">Video</p>
    </div>) : null
}
{
    chat_item.last_message.is_document ? (
    <div className="flex items-center">
        <svg viewBox="0 0 13 20" height="20" width="13" preserveAspectRatio="xMidYMid meet" class="mr-[2px]" version="1.1" x="0px" y="0px" enable-background="new 0 0 13 20">
            <path fill="#8696a0" d="M10.2,3H2.5C1.7,3,1,3.7,1,4.5v10.1C1,15.3,1.7,16,2.5,16h7.7c0.8,0,1.5-0.7,1.5-1.5v-10 C11.6,3.7,11,3,10.2,3z M7.6,12.7H3.5v-1.3h4.1V12.7z M9.3,10H3.5V8.7h5.8V10z M9.3,7.3H3.5V6h5.8V7.3z"></path>
        </svg>
        <p className="text-[#3b4a54] text-[15px]">{chat_item.last_message.document_name}</p>
    </div>) : null
}
{
    chat_item.last_message.is_sticker ? (
    <div className="flex items-center">
        <svg viewBox="0 0 16 16" height="16" width="16" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 16">
            <path fill="#8696a0" d="M9.179,14.637c0.061-0.14,0.106-0.29,0.135-0.45 c0.031-0.171,0.044-0.338,0.049-0.543c0.002-0.078,0.003-0.155,0.003-0.233c0-0.043,0-0.043,0.001-0.067c0-0.024,0-0.024,0-0.072 l0.002-0.216c0.01-0.364,0.032-1.205,0.08-1.473c0.052-0.287,0.136-0.538,0.255-0.771c0.122-0.237,0.281-0.453,0.472-0.642 c0.193-0.191,0.412-0.349,0.653-0.469c0.238-0.12,0.493-0.203,0.786-0.255c0.27-0.048,1.098-0.07,1.487-0.08l0.152,0.001 c0.027,0,0.027,0,0.047,0c0.045,0,0.088-0.001,0.325-0.004c0.221-0.006,0.384-0.018,0.554-0.048 c0.177-0.032,0.341-0.081,0.494-0.151c-0.201,0.923-0.671,1.77-1.359,2.429c-0.561,0.538-1.264,1.194-2.057,1.924 C10.667,14.061,9.951,14.444,9.179,14.637z M7.358,14.797c-0.203,0.005-0.406,0.01-0.474,0.012c-0.301,0.007-0.448,0.01-0.507,0.009 c-0.551-0.015-0.96-0.046-1.372-0.119c-0.481-0.086-0.912-0.226-1.314-0.428c-0.416-0.209-0.794-0.48-1.123-0.807 c-0.33-0.326-0.605-0.699-0.816-1.11c-0.205-0.397-0.347-0.824-0.434-1.303c-0.074-0.411-0.106-0.827-0.12-1.356 C1.193,9.5,1.19,9.297,1.189,9.078c-0.002-0.206-0.002-0.37-0.002-0.736V7.668c0-0.274,0-0.396,0.001-0.549 c0-0.064,0.001-0.125,0.001-0.182c0.001-0.223,0.004-0.426,0.009-0.62c0.014-0.529,0.046-0.946,0.121-1.358 c0.087-0.476,0.229-0.903,0.434-1.301c0.211-0.411,0.485-0.784,0.814-1.109c0.33-0.327,0.708-0.599,1.122-0.807 c0.403-0.203,0.834-0.344,1.315-0.429c0.413-0.074,0.822-0.105,1.379-0.12c0.72-0.009,0.989-0.011,1.359-0.011H8.27 c0.896,0.003,1.143,0.005,1.366,0.011c0.55,0.015,0.959,0.046,1.371,0.12c0.482,0.085,0.913,0.226,1.314,0.428 c0.416,0.209,0.794,0.48,1.123,0.806c0.331,0.327,0.605,0.7,0.814,1.109c0.206,0.4,0.348,0.827,0.434,1.302 c0.075,0.412,0.107,0.819,0.121,1.356c0.006,0.198,0.009,0.402,0.01,0.619c0,0.008,0,0.016,0,0.024c0,0.069-0.001,0.132-0.003,0.194 c-0.004,0.162-0.014,0.283-0.033,0.391c-0.019,0.106-0.05,0.197-0.092,0.28c-0.044,0.085-0.1,0.162-0.168,0.229 c-0.069,0.069-0.148,0.125-0.234,0.168s-0.179,0.074-0.29,0.094c-0.108,0.019-0.227,0.028-0.395,0.033 c-0.231,0.003-0.27,0.003-0.311,0.004c-0.018,0-0.018,0-0.039,0l-0.163-0.001c-0.453,0.012-1.325,0.036-1.656,0.096 c-0.388,0.069-0.737,0.183-1.064,0.348c-0.336,0.168-0.643,0.389-0.911,0.655c-0.267,0.263-0.49,0.566-0.661,0.899 c-0.166,0.324-0.281,0.67-0.351,1.054c-0.06,0.33-0.085,1.216-0.096,1.636l-0.002,0.23c0,0.052,0,0.052,0,0.069 c0,0.019,0,0.019-0.001,0.067c0,0.074-0.001,0.143-0.003,0.213c-0.004,0.158-0.014,0.28-0.033,0.388 c-0.02,0.106-0.05,0.197-0.092,0.279c-0.044,0.085-0.1,0.162-0.168,0.229c-0.069,0.069-0.148,0.125-0.234,0.168 c-0.086,0.043-0.179,0.073-0.289,0.093C7.478,14.785,7.421,14.792,7.358,14.797z"></path>
        </svg>
        <p className="text-[#3b4a54] text-[15px]">Sticker</p>
    </div>) : null
}
{
    chat_item.last_message.is_image ? (
    <div className="flex items-center">
        <svg viewBox="0 0 16 20" height="20" width="16" preserveAspectRatio="xMidYMid meet" class="mr-[2px]" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 20">
            <path fill="#8696a0" d="M13.822,4.668H7.14l-1.068-1.09C5.922,3.425,5.624,3.3,5.409,3.3H3.531 c-0.214,0-0.51,0.128-0.656,0.285L1.276,5.296C1.13,5.453,1.01,5.756,1.01,5.971v1.06c0,0.001-0.001,0.002-0.001,0.003v6.983 c0,0.646,0.524,1.17,1.17,1.17h11.643c0.646,0,1.17-0.524,1.17-1.17v-8.18C14.992,5.191,14.468,4.668,13.822,4.668z M7.84,13.298 c-1.875,0-3.395-1.52-3.395-3.396c0-1.875,1.52-3.395,3.395-3.395s3.396,1.52,3.396,3.395C11.236,11.778,9.716,13.298,7.84,13.298z  M7.84,7.511c-1.321,0-2.392,1.071-2.392,2.392s1.071,2.392,2.392,2.392s2.392-1.071,2.392-2.392S9.161,7.511,7.84,7.511z"></path>
        </svg>
        <p className="text-[#3b4a54] text-[15px]">Photo</p>
    </div>) : null
}
{
    chat_item.last_message.is_gif ? (<div></div>) : null
}
{
    chat_item.last_message.is_contact ? (<div></div>) : null
}
{
    chat_item.last_message.is_location ? (<div></div>) : null
}
{
    chat_item.last_message.is_audio_call ? (<div></div>) : null
}
{
    chat_item.last_message.is_video_call ? (<div></div>) : null
}
</div>)
                    }
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
                        )
                    })
                }
                
            </div>
        </div>
    );
}
export default Chats_component;