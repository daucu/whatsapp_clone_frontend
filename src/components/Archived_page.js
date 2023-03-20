import Archived_component from "./archived/Archived_component";
import Chat_single from "./Chat_single";

function Archived_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <Archived_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Chat_single/>
                </div>
            </div>
        </div>
    );
}
export default Archived_page;