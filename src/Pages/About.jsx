import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center px-6 py-12 lg:px-20 lg:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800 space-y-16">
      
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center bg-secondary rounded-lg px-6 py-10 md:px-10 lg:p-20 text-white space-y-6 md:space-y-0 md:space-x-8">
        <div className="lg:max-w-md space-y-3">
          <p className="text-3xl md:text-4xl lg:text-4xl font-semibold text-primary leading-tight">
            Alexa Physiotherapy and Rehabilitation Clinic
          </p>
          <p className="text-base md:text-lg lg:text-xl font-light">
            We Restore, Maintain, and Enhance Our Patients' Mobility, Function, and Well-being.
          </p>
          <Link to='/appointment'>
            <p className="flex w-48 mt-10 items-center gap-2 bg-primary text-secondary px-4 py-3 rounded-full text-sm hover:scale-105 transition-all duration-300">
              Book Appointment <img className="w-3" src={assets.arrow_icon} alt="arrow icon" />
            </p>
          </Link>
        </div>
        <div className="flex-shrink-0 mt-6 md:mt-0">
          <img 
            src={assets.news13} 
            alt="Physiotherapy and rehabilitation services" 
            className="w-full md:w-72 lg:w-80 h-auto rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
{/* Mission Section */}
<div className="w-full max-w-5xl bg-green-50 rounded-lg shadow-lg p-10 space-y-6 text-center lg:text-left hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-secondary">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          At Alexa Physiotherapy and Rehabilitation Center, our mission is to empower every individual to achieve optimal functionality and well-being. Since 2017, we have been providing exceptional treatment in Akure and Lagos. Our team of highly qualified consultants and physiotherapists, licensed by the Medical Rehabilitation Therapists Board (MRTB), is dedicated to delivering top-notch, compassionate care within a nurturing and healing environment. We create personalized treatment plans to address each patient’s unique needs, promoting recovery, rehabilitation, and a return to a healthy, active lifestyle.
        </p>
      </div>
      {/* CEO Section */}
      <h2 className='text-3xl text-secondary'>MEET OUR TEAM</h2>
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-10 lg:flex lg:items-center lg:space-x-8 hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="lg:w-1/3">
          <div className="relative overflow-hidden rounded-lg shadow-md group">
            <img
              src={assets.CEO_Alexa}
              alt="PT. Bamidele Samuel Alade, CEO of Alexa Physiotherapy"
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 bg-white/60 p-4 rounded-md text-center shadow-md backdrop-blur-sm">
              <p className="text-secondary font-semibold">PT. Bamidele Samuel Alade</p>
              <span className="text-sm text-gray-800">CEO, Alexa Physiotherapy and Rehabilitation Clinic</span>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 text-center lg:text-left space-y-4 text-gray-700 leading-relaxed text-lg">
          <p>
            PT. Bamidele Samuel Alade is an accomplished senior physiotherapist renowned for his extensive expertise and wealth of experience in the field. With a career spanning various regions of Nigeria and beyond, he has garnered invaluable insights and skills, particularly during his tenure in the UK. Drawing from this wealth of experience, PT Bamidele Samuel Alade founded Alexa Physio Rehab with a vision to establish a premier center for physiotherapy and rehabilitation services.
          </p>
        </div>
      </div>     

     {/* Human Resource Section */}
<div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-10 lg:flex lg:items-center lg:space-x-8 hover:scale-105 transition-transform duration-300 ease-in-out">
  <div className="lg:w-1/3">
    <div className="relative overflow-hidden rounded-lg shadow-md group">
      <img
        src={assets.profile_pic}
        alt="Human Resource Manager"
        className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
      />
      <div className="absolute bottom-4 left-4 bg-white/60 p-4 rounded-md text-center shadow-md backdrop-blur-sm">
        <p className="text-secondary font-semibold">Israel Oluwatoyin.</p>
        <span className="text-sm text-gray-800">Human Resource Manager</span>
      </div>
    </div>
  </div>
  <div className="lg:w-2/3 text-center lg:text-left space-y-4 text-gray-700 leading-relaxed text-lg">
    <p>
      At Alexa Physiotherapy and Rehabilitation Clinic, we prioritize the well-being and recovery of our clients by fostering a team of dedicated professionals, creating a supportive work environment, and implementing efficient practices that align with our mission to deliver exceptional care. Our Human Resource department ensures that every team member is empowered to contribute to the clinic's success and our clients' satisfaction.
    </p>
  </div>
</div>



      

    </section>
  );
};

export default AboutUs;
