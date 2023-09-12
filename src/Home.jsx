import React from 'react';
import homeImg from '../src/Images/homepg.png';
//import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home = () => {
    return (
        <>
           <Common 
           name='Grow your business with'
           imgsrc={homeImg}
           visit='/service'
           btnname='Get started'/>
        </>
    )
}

export default Home;