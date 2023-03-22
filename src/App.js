import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home_page from "./pages/Home_page";
import Status from "./components/status/Status";
import Community_page from "./pages/Community_page";
import Group_page from "./pages/Group_page";
import Archived_page from "./pages/Archived_page";
import Settings_page from "./pages/Settings_page";
import Select_chats_page from "./pages/Select_chats_page";
import Starred_messages_page from "./pages/Starred_messages_page";
import Unread_chats_page from "./pages/Unread_chats_page";
import Header from "./components/header/Header";

import axios from "axios";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import New_chats from "./components/New_chat";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="/status" element={<Status />} />
          <Route path="/community" element={<Community_page />} />
          <Route path="/group" element={<Group_page />} />
          <Route path="/new-chats" element={<New_chats />} />
          <Route path="/archived" element={<Archived_page />} />
          <Route path="/settings" element={<Settings_page />} />
          <Route path="/select-chats" element={<Select_chats_page />} />
          <Route path="/starred-messages" element={<Starred_messages_page />} />
          <Route path="/unread-chats" element={<Unread_chats_page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Signup />} />
          <Route path="/header" element={<Header />} />
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
