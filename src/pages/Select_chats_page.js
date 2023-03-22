import Select_chats_component from "./../components/select_chats/Select_chats_component";
import Chat_single from "./../components/Chat_single";

function Select_chats_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <Select_chats_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Chat_single/>
                </div>
            </div>
        </div>
    );
}
export default Select_chats_page;