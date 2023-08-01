import React from 'react';
import TuitStats from './TuitStats';
import { AiFillCheckCircle, AiOutlineClose  } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { deleteTuit } from '../reducers/tuits-reducer';

const TuitItem = ({ tuit }) => {
    const dispatch = useDispatch();  // Get dispatch

    const deleteTuitHandler = (id) => {  // Handle delete event
        dispatch(deleteTuit(id));  // Pass tuit's ID to reducer
    }

    return (
        <li className="list-group-item border">
            <div className="row">
                <div className="col-2"style={{ padding: '0 25px' }}>
                    <img width={70} className="rounded-3" src={tuit.image} />
                </div>
                <div className="col-10" style={{ paddingRight: '30px' }}>
                    <div>
                        <span className="fw-bolder">{tuit.userName} </span>
                        <AiFillCheckCircle style={{ color: 'rgb(29, 161, 242)' }} />
                        <span className="me-2"> {tuit.handle}</span>
                        <span className='time'>. {tuit.time}</span>
                        <AiOutlineClose   className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(tuit._id)}></AiOutlineClose  >  
                    </div>
                    <p>{tuit.tuit}</p>
                    <TuitStats tuit={tuit} />
                </div>
            </div>
        </li>
    );
};

export default TuitItem;