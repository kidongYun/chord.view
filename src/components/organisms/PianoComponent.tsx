import React from 'react'
import BlackNoteComponent from '../molecules/BlackNoteComponent'
import PianoScaleComponent from '../molecules/PianoScaleComponent'
import WhiteNoteComponent from '../molecules/WhiteNoteComponent'
import Component from '../templates/Component'

interface PianoProps {

}

const PianoComponent: React.FC<PianoProps> = () => {
    let view = 
    <Component>
        <PianoScaleComponent/>
        <PianoScaleComponent/>
    </Component>;

    return view;
}

export default PianoComponent;