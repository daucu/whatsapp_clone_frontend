import React, { useContext, useEffect, useState } from 'react'
import { Seen_icon, Unseen_icon } from "../Svg";
import axios from 'axios';
import { API } from "../Constant/API";
import { Context } from '../../context/Context';

export default function Chat_area() {
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

  const [chatData, setChatData] = useState([]);
  const { chatProfile } = useContext(Context);

  useEffect(() => {
    axios.get(`${API}/chat/${chatProfile._id}`, {
      headers: {
        token: localStorage.getItem("token")
      }
    })
      .then((res) => {
        setChatData(res.data);
      }
      )
      .catch((err) => {
        console.log(err);
      }
      )

  }, [chatProfile]);

  return (
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
                        {val.isMessageRead === true ? (Seen_icon) : (Unseen_icon)}
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
  )
}
