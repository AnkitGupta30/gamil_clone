import React from 'react';
import "./Sidebar.css";
import { Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import {openSendMessage} from "./features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
      <Button startIcon={<EditIcon fontSize='large'/>} className='sidebar__compose' onClick={()=> dispatch(openSendMessage())}>Compose</Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={77} selected={true}/>
      <SidebarOption Icon={StarBorderIcon} title="Starred" number={46}/>
      <SidebarOption Icon={WatchLaterOutlinedIcon} title="Snoozed" number={37}/>
      <SidebarOption Icon={SendOutlinedIcon} title="Sent" number={44}/>
      <SidebarOption Icon={InsertDriveFileOutlinedIcon} title="Drafts" number={77}/>
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={89}/>
      <div className="sidebar__footer">
        <p>Labels</p>
        <AddIcon/>
      </div>
    </div>
  )
}

export default Sidebar;
