'use client'

import { useState } from "react"


function Counter() {
	
	let [count, setCount] = useState(5)

	return (
	<>
		<div>Counter is {count}</div>
		<button onClick={() => setCount(count + 1)}>Click me</button>
		<button onClick={() => setCount(0) }>Reset Count</button>
	</>
  )
}

export default Counter