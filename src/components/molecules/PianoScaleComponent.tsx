import React from 'react'
import Component from '../templates/Component'
<<<<<<< HEAD
import BlackNoteComponent from '../atoms/BlackNoteComponent'
import WhiteNoteComponent from '../atoms/WhiteNoteComponent'
=======
import BlackNoteComponent from '../molecules/BlackNoteComponent'
import WhiteNoteComponent from '../molecules/WhiteNoteComponent'
>>>>>>> dcd9afaa53ffdde4480b3f6cd0643cf9f277f564

interface PianoScaleProps {

}

const PianoScaleComponent:React.FC<PianoScaleProps> = () => {
    let view = 
    <Component direction="column">
        <Component height="150%">
<<<<<<< HEAD
            <Component width="75%" borderLeft="solid 1px #dddddd" borderRight="solid 1px #dddddd"></Component>
            <Component width="50%"><BlackNoteComponent/></Component>
            <Component width="50%" borderLeft="solid 1px #dddddd" borderRight="solid 1px #dddddd"></Component>
            <Component width="50%"><BlackNoteComponent/></Component>
            <Component width="75%" borderLeft="solid 1px #dddddd" borderRight="solid 1px #dddddd"></Component>
            <Component width="75%" borderLeft="solid 1px #dddddd" borderRight="solid 1px #dddddd"></Component>
            <Component width="50%"><BlackNoteComponent/></Component>
            <Component width="50%" borderLeft="solid 1px #dddddd" borderRight="solid 1px #dddddd"></Component>
            <Component width="50%"><BlackNoteComponent/></Component>
            <Component width="50%" borderLeft="solid 1px #dddddd" borderRight="solid 1px #dddddd"></Component>
            <Component width="50%"><BlackNoteComponent/></Component>
            <Component width="75%" borderLeft="solid 1px #dddddd" borderRight="solid 1px #dddddd"></Component>
=======
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
>>>>>>> dcd9afaa53ffdde4480b3f6cd0643cf9f277f564
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

