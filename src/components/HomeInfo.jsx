import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Tejaansh</span>
        and this is my castle
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Learnt a lot <br /> from my work experiences
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Built multiple cool projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Yes
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 5) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Competitive programmer at heart, check out my stats
        </p>

        <div className='flex flex-wrap justify-center gap-3'>
          <a
            href='https://codeforces.com/profile/thetejaansh'
            target='_blank'
            rel='noreferrer'
            className='neo-brutalism-white py-3 px-6 rounded-lg text-blue-500 text-center font-semibold flex justify-center items-center gap-3 whitespace-nowrap'
          >
            Codeforces
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          </a>

          <a
            href='https://leetcode.com/u/brightyorcerf/'
            target='_blank'
            rel='noreferrer'
            className='neo-brutalism-white py-3 px-6 rounded-lg text-blue-500 text-center font-semibold flex justify-center items-center gap-3 whitespace-nowrap'
          >
            LeetCode
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          </a>
        </div>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
