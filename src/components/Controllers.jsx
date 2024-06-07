import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { counterAction } from '../store'

export default function Controllers() {
    const [data, setdata] = useState(0)
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(counterAction.increment())
    }
    const handleDecrement = () => {
        dispatch(counterAction.decrement())
    }
    const handleAdd = () => {
        dispatch(counterAction.add({ data }))
    }
    const handleSubtract = () => {
        dispatch(counterAction.subtract({ data }))
    }
    return (
        <div className=''>
            <button type="button" class="btn btn-primary m-3" onClick={handleIncrement}>+1</button>
            <button type="button" class="btn btn-secondary m-3" onClick={handleDecrement}>-1</button>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <input type='number' name='date' onChange={(e) => setdata(Number(e.target.value))} />
                <button type="button" class="btn btn-success m-3" onClick={handleAdd}>Add</button>
                <button type="button" class="btn btn-danger m-3" onClick={handleSubtract}>Subtract</button>

            </div>
        </div>
    )
}
