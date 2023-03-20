import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home_new from "./components/Home_new";
import Status from "./components/status/Status";
import Community_page from "./components/Community_page";
import Group_page from "./components/Group_page";
import Archived_page from "./components/Archived_page";
import Settings_page from "./components/Settings_page";

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
          <Route path="/" element={<Home_new />} />
          <Route path="/status" element={<Status />} />
          <Route path="/community" element={<Community_page />} />
          <Route path="/group" element={<Group_page />} />
          <Route path="/new_chats" element={<New_chats />} />
          <Route path="/archived" element={<Archived_page />} />
          <Route path="/settings" element={<Settings_page />} />
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
