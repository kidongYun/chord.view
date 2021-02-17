import React from 'react'
import Component from '../templates/Component'

interface DialogProps {
    text?: string
}

const DialogComponent: React.FC<DialogProps> = (props) => {
    let view = 
    <Component
        width="300px"
        height="150px"
        borderTop="solid 2px #333333"
        borderBottom="solid 2px #333333"
        borderLeft="solid 2px #333333"
        borderRight="solid 2px #333333"
        borderRadius="10px"
        backgroundHover="#eeeeee"
        backgroundColor="#fafafa"
    >

    </Component>;

    return view;
}

DialogComponent.defaultProps = {
    text: ""
}

export default DialogComponent;