import React from 'react'
import PianoScaleComponent from '../molecules/PianoScaleComponent'
import Component from '../templates/Component'
import useChord from '../../redux/chord/hook'

interface PianoProps {

}

const PianoComponent: React.FC<PianoProps> = () => {
    const { getChord } = useChord();

    React.useEffect(() => {
        getChord();
    }, [])
    
    let view = 
    <Component>
        <PianoScaleComponent/>
        <PianoScaleComponent/>
    </Component>;

    return view;
}

export default PianoComponent;