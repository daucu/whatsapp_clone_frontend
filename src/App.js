import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Chats from "./components/Chats";
import ChatSingle from "./components/Chat_single";
import Chats_component from "./components/Chats_component";
import New_chats from "./components/New_chats";
import Status from "./components/Status";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/chats" element={<Chats/>} />
          <Route path="/chat-single" element={<ChatSingle/>} />
          <Route path="/chats-component" element={<Chats_component/>} />
          <Route path="/new-chats" element={<New_chats/>} />
          <Route path="/status" element={<Status/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
