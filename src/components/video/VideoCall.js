import React from 'react'

const VideoCall = () => {

    const ws = new WebSocket('ws://192.168.1.109:4000/video');

    const [user, setUser] = React.useState(null);
    const [anotherUser, setAnotherUser] = React.useState(null);

    ws.onopen = () => {
        console.log('connected');
        ws.send(JSON.stringify({
            type: "call-user-request",
            token: "token",
            to: "2"
        }))
    }

    const myvideoRef = React.useRef(null);
    const anotherUserVideoRef = React.useRef(null);

    React.useEffect(() => {
        const userItem = localStorage.getItem('user');
        if (!userItem) {
            window.location.href = '/login';
        }
        setUser(JSON.parse(userItem));
    }, [])

    React.useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(stream => {
                myvideoRef.current.srcObject = stream;
            })
    }, [])





    return (
        <div className='min-h-screen w-full'>
            <div className='flex'>
                <div className='flex flex-col'>
                    <h2>Me: {user?.name || ""}</h2>
                    <video className='w-full h-[500px] bg-red-200' autoPlay ref={myvideoRef}>
                    </video>
                </div>
                <div className='flex flex-col'>
                    <h2>Me: {anotherUser?.name || "Not Connected"}</h2>
                    <video className='w-full h-[500px] bg-red-200' autoPlay ref={anotherUserVideoRef}></video>
                </div>
            </div>

        </div>
    )
}

export default VideoCall