import React from 'react'
import Component from '../templates/Component'

interface WhiteNoteProps {
    onClick?: () => void
}

const WhiteNoteComponent:React.FC<WhiteNoteProps> = (props) => {
    let view = 
    <Component 
        backgroundHover="#eeeeee" 
        borderLeft="solid 1px #dddddd" 
        borderRight="solid 1px #dddddd"
        onClick={props.onClick}>
    </Component>

    return view;
}

WhiteNoteComponent.defaultProps = {

}

export default WhiteNoteComponent;