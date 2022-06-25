import React from 'react'
import { useParams } from 'react-router-dom'
import Upsvg from '../Statesvgs/Upsvg';
const States = () => {
    const params = useParams()

  return (
    <div>
        {params.id === 'Uttar Pradesh' && (
            <Upsvg />
        )}
    </div>
  )
}

export default States;