import { useState, useEffect, useRef } from 'react'

const loadPollyfill = async () => {
  try {
    await import('intersection-observer')
  } catch (error) {
    console.log(error)
  }
}

export const useNearScreen = () => {
  const [show, setShow] = useState(false)
  const element = useRef(null)

  useEffect(() => {
    if (!window.IntersectionObserver) loadPollyfill()

    const observer = new window.IntersectionObserver(entries => {
      const { isIntersecting } = entries[0]

      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })

    observer.observe(element.current)
  }, [element])

  return [show, element]
}
