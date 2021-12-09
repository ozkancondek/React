import React from 'react'
import { useState } from 'react'

const FunctionalComponent = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(4)
  const [user, setUser] = useState({ name: 'ozkan', age: 24, email: 'ooo@ooo' })
  const increase = () => {
    setCount(count + 1)
  }
  const userUpdate = () => {
    setUser({ ...user, name: 'John' }) /*  copy object and change only the name */
  }
  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Count:{count}</p>
      <button onClick={increase}>increase</button>
      {/*  <button onClick={()=>setCount(count+1)}>increase</button> */}
      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
      <p>Name:{user.name}</p>
      <button onClick={userUpdate}>Uptade Name</button>
      <p>age:{user.age}</p>
      <p>email:{user.email}</p>
    </div>
  )
}

export default FunctionalComponent
