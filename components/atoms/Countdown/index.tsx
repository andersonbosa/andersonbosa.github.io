'use client'

import { useEffect, useState } from 'react'

interface CountdownProps {
  seconds: number
}

const Countdown: React.FC<CountdownProps> = ({ seconds }) => {
  const [count, setCount] = useState(seconds)

  useEffect(() => {
    if (count > 0) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount - 1)
      }, 1000) // Update the count every second

      return () => clearInterval(intervalId) // Cleanup to prevent memory leaks
    }
  }, [count])

  return <div>{count}</div>
}

export default Countdown
