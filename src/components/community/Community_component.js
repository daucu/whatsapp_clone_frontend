import React from 'react';
import Add_community_groups from './Add_community_groups';
import Add_existing_community_groups from './Add_existing_community_groups';
import Add_new_community_info from './Add_new_community_info';
import New_community from './New_community';
import Start_community from './Start_community';
import Communities from './Communities';
import { useState } from 'react';

export default function Community() {
    const [ addExistingCommunityGroups, setAddExistingCommunityGroups ] = useState("");
    const [ addCommunityGroups, setAddCommunityGroups ] = useState("");
    const [ addNewCommunityInfo, setAddNewCommunityInfo ] = useState("");
    const [ startCommunity, setStartCommunity ] = useState(true);
    const [ communities, setCommunities ] = useState("");
    const [ community, setCommunity ] = useState("");
  return (
  <div>
    <div className={ addExistingCommunityGroups === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : addExistingCommunityGroups ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
        <Add_existing_community_groups addExistingCommunityGroupsFalse={()=>setAddExistingCommunityGroups(false)} />
    </div>

    <div className={ addCommunityGroups === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : addCommunityGroups && !(addExistingCommunityGroups) ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
        <Add_community_groups addCommunityGroupsFalse={()=>setAddCommunityGroups(false)} addExistingCommunityGroupsTrue={()=>setAddExistingCommunityGroups(true)}/>
    </div>

    <div className={ addNewCommunityInfo === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : addNewCommunityInfo && !(addCommunityGroups)  ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
        <Add_new_community_info addNewCommunityInfoFalse={()=>setAddNewCommunityInfo(false)} addCommunityGroupsTrue={()=>setAddCommunityGroups(true)}/>
    </div>

    <div className={ startCommunity === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : startCommunity && !(addNewCommunityInfo) ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
        <Start_community startCommunityFalse={()=>setStartCommunity(false)} addNewCommunityInfoTrue={()=>setAddNewCommunityInfo(true)}/>
    </div>

    <div className={ community === "" ? "h-screen w-[400px] fixed left-[-800px] z-10 bg-white" : community ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
        <Communities community={()=>setCommunity(false)} />
    </div>
  </div>)
}
