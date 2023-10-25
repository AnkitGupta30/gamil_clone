import React from 'react';
import "./SendMail.css";
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from '@mui/material';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import {closeSendMessage} from "./features/mailSlice";
import RemoveIcon from '@mui/icons-material/Remove';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { db } from './firebase';
import firebase from "firebase/compat/app"
const SendMail = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (FormData)=>{
        console.log(FormData);

        // Replace Formdata with actual form input values
        var formData = {
            to: FormData.to,
            subject: FormData.subject,
            message: FormData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        };
        
        // Add data to the "emails" collection
        db.collection("emails")
            .add(formData)
            .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
            console.error("Error adding document: ", error);
            });

        
        dispatch(closeSendMessage());
    }
  return (
    <div className='sendMail'>
        <div className="sendMail__header">
            <h3>New Message</h3>
            <div className="con">
            <RemoveIcon className='icon'/>
            <OpenInFullIcon className='icon'/>
            </div>
            <CloseIcon className='sendMail__closer' onClick={()=> dispatch(closeSendMessage())}/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='to' type="email" placeholder='To' {...register('to', { required: true })} />
            {errors.to && <p className='sendMail__error'>To is required!</p>}
            
            <input name='subject' type="text" placeholder='Subject' {...register('subject', { required: true })}/>
            {errors.subject && <p className='sendMail__error'>Subject is required!</p>}
            <input placeholder='Message...' name='message' type="text" className='sendMail__message' {...register('message', { required: true })}/>
            {errors.message && <p className='sendMail__error'>Message is required!</p>}
            <div className="sendMail__options">
                <Button className='sendmail__send' variant='contained' color='primary' type='submit'>Send</Button>
                <IconButton>
                    <FormatColorTextIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <AttachFileOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <InsertLinkOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <SentimentSatisfiedOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <AddToDriveOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <InsertPhotoOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <LockClockOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <ModeOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <MoreVertOutlinedIcon className='icon'/>
                </IconButton>
                <IconButton>
                    <DeleteForeverOutlinedIcon className='icon2'/>
                </IconButton>
            </div>
        </form>
      
    </div>
  )
}

export default SendMail
