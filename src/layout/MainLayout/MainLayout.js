import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import LeftSection from './LeftSection/LeftSection';
import ProjectSlider from '../RightSection/ProjectSlider/ProjectSlider';

const MainLayout = ({ children }) => {
    return (
        <div className='mainlayout'>
            <Navbar/>
            <LeftSection/>
            <ProjectSlider/>
            {children}
        </div>
        
    );
};

export default MainLayout;