import React from 'react'
import { assets, servicesData } from '../assets/assets'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' 
      id='Services'
    >
      <br />
      <br />
      <br />

      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Our <span className='underline underline-offset-4 decoration-1 font-light'>Services</span>
      </h1>
      <br />
      <br />
      <div className='flex flex-wrap justify-center gap-8'>
        {servicesData.map((service, index) => (
          <motion.div 
            key={index} 
            whileHover={{ y: -12 }} 
            transition={{ type: "spring", stiffness: 200 }}
            className='max-w-[340px] border shadow-lg rounded-xl px-8 py-12 text-center bg-white'
          >
            <img className='w-200 h-200 mx-auto mb-4' src={service.image} alt={service.alt} />
            <h2 className='text-xl text-gray-700 font-medium'>{service.name}</h2>
            <p className='text-gray-500 mb-4 text-sm'>{service.title}</p>
            <div className='flex justify-center gap-1 text-red-500 mb-4'>
              {Array.from({ length: service.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className='text-gray-600'>{service.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Services
