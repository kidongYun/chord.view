import React from 'react'
import Component from '../templates/Component'
import BlackNoteComponent from '../molecules/BlackNoteComponent'
import WhiteNoteComponent from '../molecules/WhiteNoteComponent'

interface PianoScaleProps {

}

const PianoScaleComponent:React.FC<PianoScaleProps> = () => {
    let view = 
    <Component direction="column">
        <Component height="150%">
            <Component width="75%"><WhiteNoteComponent/></Component>
            <Component width="50%"><BlackNoteComponent/></Component>
            <Component width="50%"><WhiteNoteComponent/></Component>
            <Component width="50%"><BlackNoteComponent/></Component>
            <Component width="75%"><WhiteNoteComponent/></Component>
            <Component width="75%"><WhiteNoteComponent/></Component>
            <Component width="50%"><BlackNoteComponent/></Component>
            <Component width="50%"><WhiteNoteComponent/></Component>
            <Component width="50%"><BlackNoteComponent/></Component>
            <Component width="50%"><WhiteNoteComponent/></Component>
            <Component width="50%"><BlackNoteComponent/></Component>
            <Component width="75%"><WhiteNoteComponent/></Component>
        </Component>
        <Component>
            <WhiteNoteComponent/>
            <WhiteNoteComponent/>
            <WhiteNoteComponent/>
            <WhiteNoteComponent/>
            <WhiteNoteComponent/>
            <WhiteNoteComponent/>
            <WhiteNoteComponent/>
        </Component>
    </Component>;

    return view;
}

PianoScaleComponent.defaultProps = {

}

export default PianoScaleComponent;

