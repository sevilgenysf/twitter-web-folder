import React from 'react'
import cn from 'classnames'

import styles from './photo.module.css'

function Photo({
  src = 'https://media-exp1.licdn.com/dms/image/C4D03AQHwajQHGD3h3w/profile-displayphoto-shrink_200_200/0/1658499375486?e=1669248000&v=beta&t=Mna5_H2koxY2BUAdT7SGz3fXybdJTcu-1ZifUGuczhQ',
  alt,
  size = 47
}) {
  return (
    <div className={cn([styles.photo])} style={{ width: size, height: size }}>
      <img src={src} alt={alt} className={styles.img} />
    </div>
  )
}

export default Photo
