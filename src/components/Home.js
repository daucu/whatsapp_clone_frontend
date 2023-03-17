import Chats from "./Chats";
import Chat_single from "./Chat_single";

function Home(){
    var contact_name = "";
    function setContactName(data){
        contact_name = data;
        console.log(contact_name)
    }
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section">
                    <Chats contact_name={setContactName} />
                </div>
                <div className="single_chat grow shrink">
                    <Chat_single contact_name={contact_name} />
                </div>
            </div>
        </div>
    );
}
export default Home;