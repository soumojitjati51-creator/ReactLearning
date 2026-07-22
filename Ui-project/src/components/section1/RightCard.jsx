import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'
const RightCard = (props) => {
    return (
        <div className='h-full w-1/3  shrink-0 overflow-hidden relative rounded-3xl'>
            <img className="h-full w-full object-cover" src={props.img} alt='imga' />
            <RightCardContent id={props.id} tag={props.tag}/>
        </div>
    )
}

export default RightCard
