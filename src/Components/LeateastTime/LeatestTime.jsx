import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LeatestTime = () => {
    return (
        <div className="flex items-center gap-2 bg-base-200 p-2">
        <p className="bg-[#D72050] text-white px-2 ">Latest</p>
        <Marquee pauseOnHover={true} speed={100} className="space-x-10">
            <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vero.</Link>
            <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vero.</Link>
            <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vero.</Link>
        </Marquee>
    </div>
    );
};

export default LeatestTime;