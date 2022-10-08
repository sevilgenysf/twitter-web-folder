import React, { useEffect, useLayoutEffect, useState } from 'react'
import '../styles/app.css'

import StoreContext from '../store'

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(null)

  useLayoutEffect(() => {
    const theme = localStorage.getItem('THEME') || 'light'

    setTheme(theme.toString())
  }, [])

  const changeTheme = (theme) => {
    setTheme(theme)
    localStorage.setItem('THEME', theme)
  }

  useEffect(() => {
    const $html = document.querySelector('body')
    $html.setAttribute('class', theme)
  }, [theme])

  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  )
}
