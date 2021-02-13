import React from 'react'
import Form from 'react-bootstrap/Form'
import Component from '../templates/Component'

interface BlackNoteProps {

}

const BlackNoteComponent: React.FC<BlackNoteProps> = (props) => {
    let view = 
    <Component backgroundColor="#222222">
    </Component>;

    return view;
}

BlackNoteComponent.defaultProps = {

}

export default BlackNoteComponent;