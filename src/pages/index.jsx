import React, { Fragment } from 'react'
import { NavigationBar, Main, SectionInfo, SectionTestimoni, Footer } from '../components'


const Home = () => {
  return (
    <Fragment>
      <NavigationBar />
      <Main />
      <SectionInfo />
      <SectionTestimoni />
      <Footer />
    </Fragment>
  )
}

export default Home
