import * as React from 'react'

const SvgClose = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      color: '#eff3f4'
    }}
    {...props}
  >
    <path
      fill="currentColor"
      d="m13.414 12 5.793-5.793a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 0 0 1.414 1.414L12 13.414l5.793 5.793a.996.996 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12z"
    />
  </svg>
)

export default SvgClose
