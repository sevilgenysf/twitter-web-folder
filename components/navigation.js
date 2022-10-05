import React from 'react'
import NavigationButton from './navigation-button'
import styles from './navigation.module.css'
import TextTitle from './text-title'
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More,
  ProfileFill,
  ListsFill,
  BookmarkFill,
  MessagesFill,
  NotificationFill,
  ExplorerFill,
  HomeFill
} from './icons'

const MENU = [
  {
    key: 'twitter',
    icon: <Twitter />,
    iconSelected: <Twitter />,
    title: ''
  },
  {
    key: 'home',
    icon: <Home />,
    iconSelected: <HomeFill />,
    title: 'Home'
  },
  {
    key: 'explore',
    icon: <Explore />,
    iconSelected: <ExplorerFill />,
    title: 'Explore'
  },
  {
    key: 'notification',
    icon: <Notification />,
    iconSelected: <NotificationFill />,
    title: 'Notification',
    notify: 17
  },
  {
    key: 'messages',
    icon: <Messages />,
    iconSelected: <MessagesFill />,
    title: 'Messages'
  },
  {
    key: 'bookmark',
    icon: <Bookmark />,
    iconSelected: <BookmarkFill />,
    title: 'Bookmark'
  },
  {
    key: 'lists',
    icon: <Lists />,
    iconSelected: <ListsFill />,
    title: 'Lists'
  },
  {
    key: 'profile',
    icon: <Profile />,
    iconSelected: <ProfileFill />,
    title: 'Profile'
  },
  {
    key: 'more',
    icon: <More />,
    iconSelected: <More />,
    title: 'More'
  }
]

function Navigation({ flat, selectedKey = 'home' }) {
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0
        const selected = selectedKey === menu.key

        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
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
