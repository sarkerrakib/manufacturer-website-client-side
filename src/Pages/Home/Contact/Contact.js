import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='my-28 '>
            <div className='text-center'>
                <h3 className='text-primary text-4xl font-bold uppercase'>Book your Appointment</h3>
            </div>
            <div class="main-wrapper">
                <div class="form-wrapper">
                    <form
                        action="https://formbold.com/s/YOUR_KEY"
                        method="POST">
                        <div class="mb-5">
                            <label for="name" class="form-label"> Full Name </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                class="form-input"
                            />
                        </div>
                        <div class="mb-5">
                            <label for="phone" class="form-label"> Phone Number </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Enter your phone number"
                                class="form-input"
                            />
                        </div>
                        <div class="mb-5">
                            <label for="email" class="form-label"> Email Address </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                class="form-input"
                            />
                        </div>
                        <div class="flex flex-wrap -mx-3">
                            <div class="w-full sm:w-half px-3">
                                <div class="mb-5 w-full">
                                    <label for="date" class="form-label"> Date </label>
                                    <input type="date" name="date" id="date" class="form-input" />
                                </div>
                            </div>
                            <div class="w-full sm:w-half px-3">
                                <div class="mb-5">
                                    <label for="time" class="form-label"> Time </label>
                                    <input type="time" name="time" id="time" class="form-input" />
                                </div>
                            </div>
                        </div>

                        <div class="mb-5 pt-3">
                            <label class="form-label form-label-2"> Address Details </label>
                            <div class="flex flex-wrap -mx-3">
                                <div class="w-full sm:w-half px-3">
                                    <div class="mb-5">
                                        <input
                                            type="text"
                                            name="area"
                                            id="area"
                                            placeholder="Enter area"
                                            class="form-input"
                                        />
                                    </div>
                                </div>
                                <div class="w-full sm:w-half px-3">
                                    <div class="mb-5">
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            placeholder="Enter city"
                                            class="form-input"
                                        />
                                    </div>
                                </div>
                                <div class="w-full sm:w-half px-3">
                                    <div class="mb-5">
                                        <input
                                            type="text"
                                            name="state"
                                            id="state"
                                            placeholder="Enter state"
                                            class="form-input"
                                        />
                                    </div>
                                </div>
                                <div class="w-full sm:w-half px-3">
                                    <div class="mb-5">
                                        <input
                                            type="text"
                                            name="post-code"
                                            id="post-code"
                                            placeholder="Post Code"
                                            class="form-input"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button class="btn">Book Appointment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;