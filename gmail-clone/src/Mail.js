import React from 'react';
import "./Mail.css"
import { IconButton } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';

const Mail = () => {
    const navigate = useNavigate();

    const selectedMail = useSelector(selectOpenMail);
  return (
    <div className='mail'>
        <div className="mail__tools">
            <div className="mail__toolsLeft">
                <IconButton onClick={()=>navigate("/")}>
                <ArrowBackOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <ArchiveOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <ReportGmailerrorredOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <DeleteForeverOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <MarkEmailUnreadOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <WatchLaterOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <AddTaskOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <DriveFileMoveOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <LabelOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <MoreVertOutlinedIcon className='icon'/>
                </IconButton>
            </div>
            <div className="mail__toolsRight">
                <IconButton>
                    <ArrowBackIosNewOutlinedIcon style={{fontSize: "15px", marginRight: "10px"}}/>
                </IconButton>
                <IconButton>
                    <ArrowForwardIosOutlinedIcon style={{fontSize: "15px", marginRight: "10px"}}/>
                </IconButton>
            </div>
        </div>
        <div className="mail__body">
            <div className="mail__bodyHeader">
                <h2>{selectedMail?.subject}</h2>
                <LabelImportantOutlinedIcon className='mail__important'/>
                <p>{selectedMail?.title}</p>
                <p className='mail__time'>{selectedMail?.time}
                <StarBorderOutlinedIcon className='icon'/>
                <ReplyOutlinedIcon className='icon'/>
                <MoreVertOutlinedIcon className='icon'/>
                </p>
            </div>
            <div className="mail__message">
                <p>{selectedMail?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Mail
