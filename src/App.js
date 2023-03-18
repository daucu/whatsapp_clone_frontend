import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Chats from "./components/Chats";
import ChatSingle from "./components/Chat_single";
import Chats_component from "./components/Chats_component";
import New_chats from "./components/New_chats";
import Status from "./components/Status";
import Svg from "./components/Svg";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/chat-single" element={<ChatSingle />} />
          <Route path="/chats-component" element={<Chats_component />} />
          <Route path="/new-chats" element={<New_chats />} />
          <Route path="/status" element={<Status />} />
          <Route path="/svg" element={<Svg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </>
    </div>
  );
}

export default App;
