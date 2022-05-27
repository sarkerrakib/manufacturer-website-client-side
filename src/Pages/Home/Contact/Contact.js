import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='my-28 '>
            <div className='text-center'>
                <h3 className='text-primary text-4xl font-bold uppercase'>Book your Appointment</h3>
            </div>
            <div className="main-wrapper">
                <div className="form-wrapper">
                    <form
                        action="https://formbold.com/s/YOUR_KEY"
                        method="POST">
                        <div className="mb-5">
                            <label htmlFor="name" className="form-label"> Full Name </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                className="form-input"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="phone" className="form-label"> Phone Number </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Enter your phone number"
                                className="form-input"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="form-label"> Email Address </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="form-input"
                            />
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full sm:w-half px-3">
                                <div className="mb-5 w-full">
                                    <label htmlFor="date" className="form-label"> Date </label>
                                    <input type="date" name="date" id="date" className="form-input" />
                                </div>
                            </div>
                            <div className="w-full sm:w-half px-3">
                                <div className="mb-5">
                                    <label htmlFor="time" className="form-label"> Time </label>
                                    <input type="time" name="time" id="time" className="form-input" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-5 pt-3">
                            <label className="form-label form-label-2"> Address Details </label>
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full sm:w-half px-3">
                                    <div className="mb-5">
                                        <input
                                            type="text"
                                            name="area"
                                            id="area"
                                            placeholder="Enter area"
                                            className="form-input"
                                        />
                                    </div>
                                </div>
                                <div className="w-full sm:w-half px-3">
                                    <div className="mb-5">
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            placeholder="Enter city"
                                            className="form-input"
                                        />
                                    </div>
                                </div>
                                <div className="w-full sm:w-half px-3">
                                    <div className="mb-5">
                                        <input
                                            type="text"
                                            name="state"
                                            id="state"
                                            placeholder="Enter state"
                                            className="form-input"
                                        />
                                    </div>
                                </div>
                                <div className="w-full sm:w-half px-3">
                                    <div className="mb-5">
                                        <input
                                            type="text"
                                            name="post-code"
                                            id="post-code"
                                            placeholder="Post Code"
                                            className="form-input"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className="btn btn-primary text-white w-full">Book Appointment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;