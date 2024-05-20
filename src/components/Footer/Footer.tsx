import React from 'react'
import s from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={s.container}>
      <span className={s.message}>Стать клиентом или партнером!</span>
      <div className={s.line}></div>
      <p className={s.email}>hello@it-cron.ru</p>
      <div className={s.buttom}>
        <p className={s.text}>Оставить заявку</p>
      </div>
      <div className={s.fullAdderss}>
        <p className={s.firstAddress}>Россия, Москва</p>
        <p className={s.secondAddress}>119330, ул. Мосфильмовская, 35</p>
        <p className={s.phone}>+7 (495) 006-13-57</p>
      </div>
      <p className={s.contact}>Связаться через</p>
      <div className={s.telegramm}>
        <img src="/svg/telegram.svg" alt="telegram" />
      </div>
    </div>
  )
}

export default Footer
