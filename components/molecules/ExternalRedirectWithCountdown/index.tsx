'use client'

import { useEffect, useState } from 'react'

import Countdown from '../../atoms/Countdown'
import ExternalRedirect, { ExternalRedirectProps } from '../../atoms/ExternalRedirect'

interface ExternalRedirectWithCountdownProps extends ExternalRedirectProps {}

const ExternalRedirectWithCountdown: React.FC<ExternalRedirectWithCountdownProps> = ({
  url,
  delayInSeconds = 0,
}) => {
  const [count, setCount] = useState(delayInSeconds)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1)
    }, 1000) // Update the count every second

    return () => {
      clearInterval(intervalId) // Cleanup to prevent memory leaks
      if (count === 0) {
        window.location.href = url
      }
    }
  }, [count, url])

  return (
    <div>
      {count > 0 ? (
        <div className='flex'>
          Redirecting in:&nbsp; <Countdown seconds={delayInSeconds} /> &nbsp;seconds
        </div>
      ) : (
        <ExternalRedirect url={url} />
      )}
    </div>
  )
}

export default ExternalRedirectWithCountdown
