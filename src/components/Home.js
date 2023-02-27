import Chats from "./Chats";
import Chat_single from "./Chat_single";


function Home(){
    return(
        <div>
            <div className="flex h-[100vh]">
                <div className="chats w-[400px] border-r h-[100vh] border-[#D1D7DB]">
                    <Chats/>
                </div>
                <div className="chat_single grow shrink h-[100vh]">
                    <Chat_single/>
                </div>
            </div>
        </div>
    );
}
export default Home;