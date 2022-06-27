import React from 'react'
import { useParams } from 'react-router-dom'
import Upsvg from '../Statesvgs/Upsvg';
import Gujarat from '../Statesvgs/Gujrat';
import Himachal from '../Statesvgs/Himachal';
import Jharkhand from '../Statesvgs/Jharkhand';
import Rajasthan from '../Statesvgs/Rajsthan';
import Punjab from '../Statesvgs/Punjab';
import Bihar from '../Statesvgs/bihar';
import Andaman from '../Statesvgs/Andaman';
import Andhra from '../Statesvgs/Andhra';
const States = () => {
    const params = useParams()

  return (
    <div>
        {params.id === 'Uttar Pradesh' && (
            <Upsvg />
        )}
        {params.id === 'Gujarat' && (
            <Gujarat />
        )}
        {params.id === "Himachal Pradesh" && (
            <Himachal />
        )}
        {params.id === "Jharkhand" && (
            <Jharkhand />
        )}
        
        {params.id === "Rajasthan" && (
            <Rajasthan />
        )}
        {params.id === "Punjab" && (
            <Punjab />
        )}
        {params.id === "Bihar" && (
            <Bihar />
        )}
        {params.id === "Andaman and Nicobar Islands" && (
            <Andaman />
        )}
        {params.id === "Andhra Pradesh" && (
            <Andhra />
        )}

    </div>
  )
}

export default States;