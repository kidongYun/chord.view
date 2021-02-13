import React from 'react'
<<<<<<< HEAD
import BlackNoteComponent from '../atoms/BlackNoteComponent'
import PianoScaleComponent from '../molecules/PianoScaleComponent'
import WhiteNoteComponent from '../atoms/WhiteNoteComponent'
=======
import BlackNoteComponent from '../molecules/BlackNoteComponent'
import PianoScaleComponent from '../molecules/PianoScaleComponent'
import WhiteNoteComponent from '../molecules/WhiteNoteComponent'
>>>>>>> dcd9afaa53ffdde4480b3f6cd0643cf9f277f564
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