import React from 'react'
import { MENU } from '../constants'
import { useRouter } from 'next/router'
import NavigationButton from './navigation-button'
import styles from './navigation.module.css'
import TextTitle from './text-title'

import cn from 'classnames'

function Navigation({ flat }) {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0
        const selected = router.pathname === menu.path

        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={cn(styles.navButton, menu.key)}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle> {menu.title} </TextTitle>}
          </NavigationButton>
        )
      })}
    </nav>
  )
}

export default Navigation
