'use client'

import { useEffect } from 'react'

export interface ExternalRedirectProps {
  url: string
  delayInSeconds?: number
}

const ExternalRedirect: React.FC<ExternalRedirectProps> = ({ url, delayInSeconds = 0 }) => {
  useEffect(
    () => {
      const timeoutId = setTimeout(
        () => { window.location.href = url },
        delayInSeconds * 1000
      )

      return () => clearTimeout(timeoutId)
    },
    [url]
  )

  return null
}

export default ExternalRedirect