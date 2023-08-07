import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTuitThunk } from '../services/tuits-thunks';  // Import updateTuitThunk
import { FaRegComment, FaRetweet, FaHeart, FaUpload, FaThumbsDown } from 'react-icons/fa';

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();

    const handleLike = () => {
        const updatedTuit = {
            ...tuit,
            liked: !tuit.liked,
            likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1
        };

        dispatch(updateTuitThunk(updatedTuit));
    };
    const handleDislike = () => {
        const currentDislikes = Number(tuit.dislikes) || 0;
        const updatedDislikes = tuit.disliked ? currentDislikes - 1 : currentDislikes + 1;
        
        const updatedTuit = {
            ...tuit,
            disliked: !tuit.disliked,
            dislikes: updatedDislikes
        };
    
        dispatch(updateTuitThunk(updatedTuit));
    };
    

    const heartStyle = tuit.liked ? { color: 'red' } : {};
    const thumbDownStyle = tuit.disliked ? { color: 'blue' } : {};

    return (
        <div className="tuit-stats d-flex justify-content-between">
            <div className="me-3">
                <FaRegComment className="me-1" />
                {tuit.replies} Replies
            </div>
            <div className="me-3">
                <FaRetweet className="me-1" />
                {tuit.retuits} Retuits
            </div>
            <div onClick={handleLike} className={tuit.liked ? 'liked' : ''}>
                <FaHeart style={heartStyle} className="me-1" />
                {tuit.likes} Likes
            </div>
            <div onClick={handleDislike} className={tuit.disliked ? 'disliked' : ''}>
            <FaThumbsDown style={thumbDownStyle} className="me-1" />
            {tuit.dislikes} Dislikes
        </div>
            <div className="me-3">
                <FaUpload className="me-1" />
            </div>
        </div>
    );
};

export default TuitStats;
