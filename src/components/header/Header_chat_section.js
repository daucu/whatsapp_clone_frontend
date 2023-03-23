import React, { useState } from "react";
import Header_group from "./Header_group";
import Header_normal from "./Header_normal";
import Header_self from "./Header_self";
import Header_business from "./Header_business";

export default function Header_chat_section(props) {
  const [profileType, setProfileType] = useState(props.pType || "group");
  return (
    <div>
      <div className={profileType === "group" ? "" : "hidden"}>
        <Header_group profileTypeGroup={() => props.changePType("group")} closeProfile={props.closeProfile} />
      </div>
      <div className={profileType === "normal" ? "" : "hidden"} cl>
        <Header_normal profileTypeGroup={() => props.changePType("self")} />
      </div>
      <div className={profileType === "business" ? "" : "hidden"}>
        <Header_business profileTypeGroup={() => props.changePType("business")} />
      </div>
      <div className={profileType === "self" ? "" : "hidden"}>
        <Header_self profileTypeGroup={() => props.changePType("self")} />
      </div>
    </div>
  );
}
