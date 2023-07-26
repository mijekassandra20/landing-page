import React, { useState } from 'react';


import { MdEmail, MdVisibility } from "react-icons/md";
// import {BsEnvelopeFill } from "react-icons/md";

import '../../App.css'

const DesignStyles = () => {

    return (
        <div className='body-wrapper'>
            <section className='body-container'>

                <div>
                    <div className='input-group'>
                        <input className='field1 left-position' type="text" placeholder=' ' autoComplete="new-password" />
                        <label className='field1-label icon' htmlFor='text'>Label</label>
                        <MdEmail className='input-icon-left icon-field1' />
                    </div>
                    <br />
                    <div className='input-group'>
                        <input className='field1' type="email" placeholder=' ' autoComplete="off" />
                        <label className='field1-label' htmlFor='email'>Email</label>
                    </div>
                    <br />
                    <div className='input-group'>
                        <input className='field1' type="password" placeholder=' ' autoComplete="new-password" />
                        <label className='field1-label' htmlFor='email'>Password</label>
                        <MdVisibility className='input-icon-right icon-default' />
                    </div>

                    <br />

                </div>

                <div>
                    <div className='input-group2'>
                        <label className='field2-label' htmlFor='text'>First Name:</label>
                        <input className='field2' type="text" placeholder=' ' autoComplete="new-password" />
                    </div>
                    <br />
                    <div className='input-group2'>
                        <label className='field2-label' htmlFor='text'>Birthday:</label>
                        <input className='field2' type="date" placeholder=' ' autoComplete="new-password" />
                    </div>
                    <br />
                    <div className='input-group2'>
                        <label className='field2' htmlFor='email'>Email:</label>
                        <input className='field2-label' type="email" placeholder=' ' autoComplete="off" />
                    </div>
                    <br />
                    <div className='input-group2'>
                        <label className='field2' htmlFor='email'>Password:</label>
                        <input className='field2-label' type="password" placeholder=' ' autoComplete="new-password" />
                        <MdVisibility className='input-icon-right' />
                    </div>
                    <br />
                    <div className='input-group2'>
                        <label className='field2' htmlFor='email'>Description:</label>
                        {/* <input className='field2-label' type="textarea" placeholder=' ' /> */}
                        <textarea className='text-area-st'></textarea>
                    </div>
                </div>

            </section>
        </div>

    )
}

export default DesignStyles