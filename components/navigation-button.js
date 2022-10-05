import React from 'react'
import Button from './button'
import cn from 'classnames'

import styles from './navigation-button.module.css'

function NavigationButton({ notify, children, selected, ...props }) {
  return (
    <Button
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
      {...props}
    >
      {children}
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
    </Button>
  )
}

export default NavigationButton
