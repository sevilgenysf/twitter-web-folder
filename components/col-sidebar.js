import React from 'react'
import cn from 'classnames'
import Navigation from './navigation'

import styles from './col-sidebar.module.css'
import ThemeButton from './theme-button'
import ProfileBox from './profile-box'
import TweetModal from './tweet-modal'
import { ArrowBottom } from './icons'

function Sidebar({ flat }) {
  const [isShowModal, isShowModalSet] = React.useState(false)

  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />

      <div className={styles.tweet}>
        <ThemeButton big full={!flat} onClick={() => isShowModalSet(true)}>
          {flat ? <ArrowBottom /> : 'Tweet'}
        </ThemeButton>
      </div>

      {/* new tweet-popup */}
      {isShowModal && <TweetModal onClick={() => isShowModalSet(false)} />}

      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  )
}

export default Sidebar
