import React from 'react'
import {arrow} from "../assets/icons"
import { Link } from 'react-router-dom'


const InfoBox = ({ text, link, btnText}) => {
    return (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img className="w-4 h-4 object-contain" src={arrow} />
        </Link>
    </div>
    );
}


const renderContent = {
    1:(<h1 className='sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Namaste 🙏🏻 I am <span className='font-semibold'>Navneet</span>
            <br />
        </h1>),
    2:(
    <InfoBox 
    text="Picked up many skills on a whim."
    link="/about"
    btnText="See more.."
    />
),
    3:(
        <InfoBox 
    text="Build projects and Building projects"
    link="/projects"
    btnText="Visit Projects"
    />
    ),
    4:(
        <InfoBox 
    text="Need a project done or looking for a dev?
    I'm just few chats away"
    link="/contact"
    btnText="Let's chat! 🙌"
    />

    ),
}


const HomeInfo = ({ currentStage }) => {
    console.log(currentStage);
  return (
    renderContent[currentStage] || null
  );
}

export default HomeInfo
