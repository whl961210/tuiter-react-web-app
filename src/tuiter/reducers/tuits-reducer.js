import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "https://images.seattletimes.com/wp-content/uploads/2019/07/nasameatball.jpg",
};
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: { tuits: tuits },
    reducers: {
        likeTuit: (state, action) => {
            const tuit = state.tuits.find(tuit => tuit._id === action.payload);
            if (tuit) {
                tuit.liked = true;
                tuit.likes += 1;
            }
        },
        unlikeTuit: (state, action) => {
            const tuit = state.tuits.find(tuit => tuit._id === action.payload);
            if (tuit) {
                tuit.liked = false;
                tuit.likes -= 1;
            }
        },
        createTuit(state, action) {
            state.tuits.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state.tuits
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.tuits.splice(index, 1);
        },

    }
});

export const { likeTuit, unlikeTuit, createTuit, deleteTuit } = tuitsSlice.actions;

export default tuitsSlice.reducer;
