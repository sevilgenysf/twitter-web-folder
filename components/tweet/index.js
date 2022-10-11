import React from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import styles from './style.module.css'
import Photo from '../photo'

import IconButton from '../icon'
import * as Icon from '../icons'

function Tweet({ name, slug, datetime, text }) {
  return (
    <article className={styles.tweet}>
      {/* Avatar */}

      <div className={styles.avatar}>
        <Photo />
      </div>

      {/* Body */}
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{name}</span> <span>@{slug}</span> .
          <span>{formatDistanceToNowStrict(datetime)}</span>
        </header>

        <div className={styles.content}> {text} </div>

        <footer className={styles.footer}>
          <div className={styles.footerButton}>
            <IconButton>
              <Icon.Reply />
            </IconButton>
          </div>
          <div className={styles.footerButton}>
            <IconButton>
              <Icon.Retweet />
            </IconButton>
          </div>
          <div className={styles.footerButton}>
            <IconButton>
              <Icon.Like />
            </IconButton>
          </div>
          <div className={styles.footerButton}>
            <IconButton>
              <Icon.Share />
            </IconButton>
          </div>
        </footer>
      </div>
    </article>
  )
}
export default Tweet
