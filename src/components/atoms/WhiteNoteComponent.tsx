import React from 'react'
import Component from '../templates/Component'

interface WhiteNoteProps {

}

const WhiteNoteComponent:React.FC<WhiteNoteProps> = () => {
    let view = 
    <Component backgroundHover="#eeeeee" borderLeft="solid 1px #dddddd" borderRight="solid 1px #dddddd">
    </Component>

    return view;
}

WhiteNoteComponent.defaultProps = {

}

export default WhiteNoteComponent;