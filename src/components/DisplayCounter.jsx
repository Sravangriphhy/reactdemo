import React from 'react'
import { useSelector } from 'react-redux'

export default function DisplayCounter() {
  const {counterValue} = useSelector(store => store.counter)
  return (
    <div>
      <p class="lead mb-4">Current counter value:{counterValue}</p>
    </div>
  )
}
