import New_chat_component from "./../components/new_chat/New_chat_component";
import Chat_single from "./../components/Chat_single";

function New_chat_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <New_chat_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Chat_single/>
                </div>
            </div>
        </div>
    );
}
export default New_chat_page;