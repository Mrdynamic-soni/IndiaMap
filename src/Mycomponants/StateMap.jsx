import React from 'react'
import { useParams } from 'react-router-dom'
import Upsvg from '../Statesvgs/Upsvg';
import Gujarat from '../Statesvgs/Gujrat';
const States = () => {
    const params = useParams()

  return (
    <div>
        {/* {params.id === 'Uttar Pradesh' && (
            <Upsvg />
        )} */}
        {params.id === 'Gujarat' && (
            <Gujarat />
        )}
    </div>
  )
}

export default States;