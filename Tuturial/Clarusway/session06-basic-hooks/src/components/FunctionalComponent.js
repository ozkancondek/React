import React, { useEffect } from 'react'
import { useState } from 'react'

const FunctionalComponent = () => {
  let oz = 0

  const [count, setCount] = useState(0)
  const [age, setAge] = useState(4)
  const [user, setUser] = useState({ name: 'ozkan', age: 24, email: 'ooo@ooo' })
  useEffect(() => {
    count !== 0 && alert(`new notification, total: ${count}`)
    /*useEffect works last */
    /*Works in every render without dependency array */
    console.log('use effect')
  }, [
    count,
    age
  ]) /* now just works first render of component.if i give in it variable, works in every update of variable */
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
      <p>Variable:{oz} That will not be rendered and updated</p>
      <button onClick={() => oz + 1}>Uptade Variable</button>
    </div>
  )
}

export default FunctionalComponent
