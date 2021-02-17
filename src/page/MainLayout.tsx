import React from 'react'
import DialogComponent from '../components/atoms/DialogComponent';
import PianoComponent from '../components/organisms/PianoComponent';
import Component from '../components/templates/Component';
import useChord from '../redux/chord/hook'

interface MainProps {}

const MainLayout: React.FC<MainProps> = () => {
    const { selectChord } = useChord();

    let view = 
    <Component direction="column">
        <Component height="150%" verticalAlign="stretch">
            <PianoComponent/>
        </Component>
        <Component>
            {/* <DialogComponent text={selectChord}/> */}
        </Component>
    </Component>

    return view;
}

export default MainLayout;