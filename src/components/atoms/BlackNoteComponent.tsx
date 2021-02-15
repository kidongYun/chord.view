import React from 'react'
import Component from '../templates/Component'

interface BlackNoteProps {
    onClick?: () => void
}

const BlackNoteComponent: React.FC<BlackNoteProps> = (props) => {
    let view = 
    <Component 
        backgroundColor="#333333" 
        backgroundHover="#000000"
        onClick={props.onClick}>
    </Component>

    return view;
}

BlackNoteComponent.defaultProps = {

}

export default BlackNoteComponent;