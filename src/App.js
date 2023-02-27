import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Chats from "./components/Chats";
import ChatSingle from "./components/Chat_single";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/chats" element={<Chats/>} />
          <Route path="/chat-single" element={<ChatSingle/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
