import React from 'react'
import Component from '../templates/Component'

interface BlackNoteProps {

}

const BlackNoteComponent: React.FC<BlackNoteProps> = () => {
    let view = 
    <Component backgroundColor="#333333" backgroundHover="#000000">
    </Component>;

    return view;
}

BlackNoteComponent.defaultProps = {

}

export default BlackNoteComponent;
