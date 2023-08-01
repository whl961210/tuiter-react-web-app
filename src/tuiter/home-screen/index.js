import React from 'react';
import TuitsList from '../tuits/tuit-lists';
import WhatsHappening from "../whats-happening";


const HomeScreen = () => {
    return (
        <div className="home-screen">
            <span className="fw-bolder"style={{ fontSize: '30px' }}>Home</span>
            <WhatsHappening />

            <TuitsList />
        </div>
    );
};

export default HomeScreen;
