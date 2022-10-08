import React from 'react'
import cn from 'classnames'
import useWindowSize from '../hooks/useWindowSize'

import Sidebar from './col-sidebar'
import CONST from '../constants'
import Main from './col-main'
import Extra from './col-extra'

import styles from './layout.module.css'

function Layout({ children }) {
  const size = useWindowSize()

  return (
    <div className={cn(styles.layout)}>
      <Sidebar flat={size.width < CONST.DESKTOP_SİZE}>sidebar</Sidebar>

      <Main>{children}</Main>

      {size.width > CONST.TABLET_SİZE && <Extra>extra</Extra>}
    </div>
  )
}

export default Layout
