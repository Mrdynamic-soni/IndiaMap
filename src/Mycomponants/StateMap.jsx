import React from 'react'
import { useParams } from 'react-router-dom'
import Upsvg from '../Statesvgs/Upsvg';
import Gujarat from '../Statesvgs/Gujrat';
import Himachal from '../Statesvgs/Himachal';
import Jharkhand from '../Statesvgs/Jharkhand';
import Rajasthan from '../Statesvgs/Rajsthan';
import Punjab from '../Statesvgs/Punjab';
import Bihar from '../Statesvgs/Bihar';
import Andaman from '../Statesvgs/Andaman';
import Andhra from '../Statesvgs/Andhra';
import Arunachal from '../Statesvgs/Arunachal';
import Assam from '../Statesvgs/Assam';
import Chhattisgarh from '../Statesvgs/Chhattisgarh';
import Haryana from '../Statesvgs/Haryana';
import Kerala from '../Statesvgs/Kerala';
import Jammu from '../Statesvgs/Jammu';
import Karnataka from '../Statesvgs/Karnataka';
import Maharashtra from '../Statesvgs/Maharashtra';

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
        {params.id === "Arunachal Pradesh" && (
            <Arunachal />
        )}
        {params.id === "Assam" && (
            <Assam />
        )}
        {params.id === "Chhattisgarh" && (
            <Chhattisgarh />
        )}
        {params.id === "Haryana" && (
            <Haryana />
        )}
        {params.id === "Kerala" && (
            <Kerala />
        )}
        {params.id === "Jammu and Kashmir" && (
            <Jammu />
        )}
        {params.id === "Karnataka" && (
            <Karnataka />
        )}
        {params.id === "Maharashtra" && (
            <Maharashtra />
        )}
        
    </div>
  )
}

export default States;