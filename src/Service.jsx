import React from 'react';
//import { NavLink } from 'react-router-dom';
//import web from '../src/Images/img1.jpg'
import Card from './Card';
import Sdata from './Sdata';


const Service = () => {
    return (
        <>
            <div className='my-4'>
                <h1 className='text-center'> Our Services</h1>
            </div>
            <div className='container-fluid mb-4'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row  gy-4'>
                          {
                            Sdata.map((val, indx)=>{
                                return(
                                    <Card key={indx}
                                    imgsrc={val.imgsrc}
                                    title={val.title}/>
                                )
                            })
                          }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;