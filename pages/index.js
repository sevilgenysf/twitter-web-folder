import React from 'react'
import Layout from '../components/layout'
import Tweet from '../components/tweet'

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Yusuf sevilgen"
        slug="sevilgenysf"
        text={`merhaba ysuuf
        
nasılsıdfn`}
        datetime={new Date('2022-10-10')}
      />
    </Layout>
  )
}

export default HomePage
