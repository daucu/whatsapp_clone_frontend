import Starred_messages_component from "./../components/starred_messages/Starred_messages_component";
import Chat_single from "./../components/Chat_single";

function Group_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <Starred_messages_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Chat_single/>
                </div>
            </div>
        </div>
    );
}
export default Group_page;