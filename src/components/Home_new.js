import New_chats_component from "./home/New_chats_component";
import Chat_single from "./Chat_single";

function Home(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section">
                    <New_chats_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Chat_single/>
                </div>
            </div>
        </div>
    );
}
export default Home;