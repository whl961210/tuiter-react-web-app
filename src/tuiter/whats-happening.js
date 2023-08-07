import React, {useState} from "react";
import { AiOutlinePicture } from 'react-icons/ai';
import { HiOutlineGif } from 'react-icons/hi2';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdFormatListBulleted } from 'react-icons/md';
import { BsEmojiSmile } from 'react-icons/bs';
import { TbCalendarStats } from 'react-icons/tb';
import { BiBold, BiItalic } from 'react-icons/bi';
import {useDispatch} from "react-redux";
import {createTuitThunk} from "./services/tuits-thunks";

const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening] = useState('');
 const dispatch = useDispatch();
 const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening
    }
    dispatch(createTuitThunk(newTuit));
    setWhatsHappening("");
  }
 
 return (
   <div className="row">
     <div className="col-auto">
       <img src="https://images.seattletimes.com/wp-content/uploads/2019/07/nasameatball.jpg" width={60}/>
     </div>
     <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
               className="form-control border-0"
               onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
       <div>
         <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                 onClick={tuitClickHandler}>
           Tuit
         </button>
         <div className="text-primary fs-2">
           <AiOutlinePicture className="me-3"/>
           <HiOutlineGif className="me-3"/>
           <MdFormatListBulleted className="me-3"/>
           <BsEmojiSmile className="me-3"/>
           <TbCalendarStats className="me-3"/>
           <HiOutlineLocationMarker className="me-3"/>
           <BiBold className="me-3"/>
           <BiItalic className="me-3"/>
         </div>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default WhatsHappening;