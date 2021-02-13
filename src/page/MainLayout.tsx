import React from 'react'
import BlackNoteComponent from '../components/molecules/BlackNoteComponent';
import Component from '../components/templates/Component';

interface MainProps {}

const MainLayout: React.FC<MainProps> = () => {
    
    let view = 
    <Component backgroundColor="#eeeeee" backgroundHover="#eeeeee">
        <Component 
            backgroundColor="#eeeeee" 
            backgroundHover="#eeeeee" 
            borderRadius="10px">
                <BlackNoteComponent/>
        </Component>
    </Component>

    return view;
}

export default MainLayout;