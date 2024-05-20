import React from 'react'
import s from './Header.module.scss'
const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.logo}>
          <img src="/svg/logo.svg" alt="logo" />
        </div>
        <div className={s.nav}>
          <span
            className={s.button}
            style={{
              color: '#fb6542',
            }}
          >
            КЕЙСЫ
          </span>
          <span className={s.button}>КОМПАНИЯ</span>
          <span className={s.button}>УСЛУГИ</span>
          <span className={s.button}>КОНТАКТЫ</span>
        </div>
        <div className={s.menuButton}>
          <img src="/svg/menu.svg" alt="menu" />
        </div>
      </div>
    </div>
  )
}

export default Header
