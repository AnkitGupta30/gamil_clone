import React, { useEffect, useState } from 'react';
import "./EmailList.css";
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Section from './Section';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import EmailRow from './EmailRow';
import RefreshIcon from '@mui/icons-material/Refresh';
import { db } from './firebase';

const EmailList = () => {

    const [email, setEmail] = useState([]);
    useEffect(()=>{
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot(Snapshot => setEmail(Snapshot.docs.map(doc =>({
            id: doc.id,
            data: doc.data(),
        }))))
    }, [])
  return (
    <div className='emailList'>
        <div className="emilList__settings">
            <div className="emailList__settingsLeft">
            <Checkbox/>
            <IconButton>
            <ArrowDropDownIcon className='icon'/>
            </IconButton>
            <IconButton>
            <RefreshIcon className='icon' />
            </IconButton>
            <IconButton>
            <MoreVertIcon className='icon'/>
            </IconButton>
            </div>
            <div className="emailList__settingsRight">
            <IconButton>
                <ChevronLeftIcon/>
            </IconButton>
            <IconButton>
                <ChevronRightIcon/>
            </IconButton>

            </div>
        </div>
        <div className="emailList__sections">
            <Section Icon={InboxIcon} title='Primary' color='#5586BC' selected/>
            <Section Icon={LocalOfferIcon} title='Promotions' color='#4A474C' selected/>
            <Section Icon={PeopleIcon} title='Social' color='#4A474C' selected/>
        </div>
        <div className="emailList__list">
            {email.map(({id, data: {to, subject, message, timestamp}}) =>(
                <EmailRow
                id={id}
                key={id}
                title={to}
                subject={subject}
                description={message}
                time={new Date(timestamp?.seconds * 1000).toUTCString()}


                />
            ))}
            <EmailRow
            title="Twitch"
            subject="Hey follow stimmer!!!"
            description="This is a test"
            time="10pm"
            />

            <EmailRow
            title="Twitch"
            subject="Hey follow stimmer!!!"
            description="This is Dope"
            time="10pm"
            />  
            
        </div>
    </div> 
  )
}

export default EmailList;
