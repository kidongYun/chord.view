import React from 'react'
import PianoComponent from '../components/organisms/PianoComponent';
import Component from '../components/templates/Component';

interface MainProps {}

const MainLayout: React.FC<MainProps> = () => {
    
    let view = 
    <Component direction="column">
        <Component height="150%" verticalAlign="stretch">
            <PianoComponent/>
        </Component>
        <Component></Component>
    </Component>

    return view;
}

export default MainLayout;