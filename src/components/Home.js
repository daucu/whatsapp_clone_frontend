import Chats from "./Chats";
import Chat_single from "./Chat_single";


function Home(){
    return(
        <div>
            <div className="flex">
                <div className="chats w-[400px] border-r border-[#D1D7DB]">
                    <Chats/>
                </div>
                <div className="chat_single grow shrink">
                    <Chat_single/>
                </div>
            </div>
        </div>
    );
}
export default Home;