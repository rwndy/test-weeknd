import React from 'react'


const MainPage = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Weekend From Home</h1>
        <p className="header__sub-title">Stay active with a little workout</p>
        <div className="header__bitmap">
          <img src="../../assets/images/bitmap.png" alt="bitmap"/>
        </div>
        <div className="header__button">
          <a href="/">Lets Go</a>
        </div>
      </div>
    </header>
  )
}

export default MainPage
