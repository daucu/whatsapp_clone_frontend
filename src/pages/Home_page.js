import New_chats_component from "../components/home/New_chats_component";
import Chat_single from "../components/Chat_single";
import Right_component from "../components/right/Right_component";

function Home_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <New_chats_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Right_component />
                </div>
            </div>
        </div>
    );
}
export default Home_page;