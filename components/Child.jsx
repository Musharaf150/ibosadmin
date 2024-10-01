import React from 'react'
import { Button } from './ui/button'

const Child = ({recieveData}) => {
    const sendData = () => {
        const data = 'Hello From Child Component!!'
        recieveData(data)
    }

  return (
    <div>
      <h3>i am Child Component</h3>
      <Button onClick={sendData}>
        Click me
      </Button>
    </div>
  )
}

export default Child
