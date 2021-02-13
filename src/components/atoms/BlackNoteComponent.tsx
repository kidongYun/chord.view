import React from 'react'
import ButtonComponent from './ButtonComponent'
import Component from '../templates/Component'

interface BlackNoteProps {

}

const BlackNoteComponent: React.FC<BlackNoteProps> = () => {
    let view = 
    <Component backgroundColor="#333333" backgroundHover="#000000">
        <ButtonComponent/>
    </Component>;

    return view;
}

BlackNoteComponent.defaultProps = {

}

export default BlackNoteComponent;