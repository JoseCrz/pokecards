import { useEffect } from 'react'

export const useFixNavbarBug = () => {
  // * THIS HOLY CODE IS TO FIX THE MOBILE NAVBAR 100VH BUG
  useEffect(() => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  }, [])
}
