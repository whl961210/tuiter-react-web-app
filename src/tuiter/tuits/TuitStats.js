import React from 'react';
import { useDispatch } from 'react-redux';
import { likeTuit, unlikeTuit } from '../reducers/tuits-reducer';
import { FaRegComment, FaRetweet, FaHeart, FaUpload} from 'react-icons/fa';

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();

    const handleLike = () => {
        if (tuit.liked) {
            dispatch(unlikeTuit(tuit._id));
        } else {
            dispatch(likeTuit(tuit._id));
        }
    };

    const heartStyle = tuit.liked ? { color: 'red' } : {};

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
            <div className="me-3">
                <FaUpload className="me-1" />
            </div>
        </div>
    );
};

export default TuitStats;
