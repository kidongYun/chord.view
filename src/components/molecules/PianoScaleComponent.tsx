import React from 'react'
import Component from '../templates/Component'
import BlackNoteComponent from '../atoms/BlackNoteComponent'
import WhiteNoteComponent from '../atoms/WhiteNoteComponent'

interface PianoScaleProps {

}

const PianoScaleComponent:React.FC<PianoScaleProps> = () => {
    let view = 
    <Component direction="column">
        <Component height="150%">
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
        </Component>
        <Component>
            <WhiteNoteComponent
                onClick={() => { alert("asdasd"); }}
            />
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

