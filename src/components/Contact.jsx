import React from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div className="mb-0 pb-0">
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='p-6 sm:p-10 lg:px-32 w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white'
                id='Contact'
            >
                <br />
                <br />
            <br />
             <br />
                <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 sm:mb-10 sm:pt-50 text-center'>
                    Contact <span className='underline underline-offset-4 decoration-2 font-light'>With Us</span>
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center'>
                    {/* 1st half */}
                    <div className='bg-gray-800 text-white p-6 sm:p-10 rounded-2xl shadow-lg flex flex-col justify-center h-full'>
                        <h2 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-blue-400'>Key Information</h2>
                        <table className='w-full text-left'>
                            <tbody>
                                <tr>
                                    <td className='font-semibold py-2 text-sm sm:text-lg'>Founding Year:</td>
                                    <td className='py-2 text-sm sm:text-lg text-gray-300'>2024</td>
                                </tr>
                                <tr>
                                    <td className='font-semibold py-2 text-sm sm:text-lg'>Founder/CEO:</td>
                                    <td className='py-2 text-sm sm:text-lg text-gray-300'>R. Kumar Choudhary, S. Panday</td>
                                </tr>
                                <tr>
                                    <td className='font-semibold py-2 text-sm sm:text-lg'>Employees:</td>
                                    <td className='py-2 text-sm sm:text-lg text-gray-300'>200+</td>
                                </tr>

                                <tr>
                                    <td className='font-semibold py-2 text-sm sm:text-lg'>Phone:</td>
                                    <td className='py-2 text-sm sm:text-lg text-gray-300'>+91 9216225519</td>
                                </tr>
                                <tr>
                                    <td className='font-semibold py-2 text-sm sm:text-lg'>Email:</td>
                                    <td className='py-2 text-sm sm:text-lg text-gray-300'>highriseengineering.2024@gmail.com</td>
                                </tr>
                                <tr>
                                    <td className='font-semibold py-2 text-sm sm:text-lg'>Address:</td>
                                    <td className='py-2 text-sm sm:text-lg text-gray-300'>Ward-No.24, Baldev Nagar, Near Sajini Bai Ashram, Balotra, 
                                    Pachpadra Road, Balotra, Rajasthan (304022)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Google Map Embed */}
                    <div className='flex justify-center items-center'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57459.033737097176!2d72.19825271134555!3d25.830296690773178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3943e8d13ce86b51%3A0xc41d3acc5c3109dd!2sBalotra%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1741688126354!5m2!1sen!2sin"
                            width="100%"
                            height="300px"
                            style={{ border: 0, borderRadius: "1rem" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map Location"
                        ></iframe>
                    </div>
                </div>
            </motion.div>
            <Footer/>
        </div>
    );
}

export default Contact;