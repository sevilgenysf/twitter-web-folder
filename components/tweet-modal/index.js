import React from 'react'
import Button from '../button'
import Photo from '../photo'
import ThemeButton from '../theme-button'
import IconButton from '../icon'
import { Close } from '../icons'
import styles from './style.module.css'

import Stack from '../stack'

function TweetModal({ onClick = () => {} }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.avatar}>
          <Photo />
        </div>
        <div className={styles.body}>
          <div className={styles.content}>
            <textarea
              className={styles.textarea}
              name=""
              rows="4"
              placeholder="Ne düşünüyorsun?"
            />
            <Stack gap={20} className={styles.footer}>
              <IconButton className={styles.close} onClick={onClick}>
                <Close />
              </IconButton>
              <ThemeButton>Tweet</ThemeButton>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TweetModal
