import New_chats_component from "../components/home/New_chats_component";
import Chat_single from "../components/Chat_single";

function Home_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <New_chats_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Chat_single/>
                </div>
            </div>
        </div>
    );
}
export default Home_page;