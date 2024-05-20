import { Card } from 'antd'
import React from 'react'
import s from './Card.module.scss'

const CardBox = ({ caseItem }) => {
  return (
    <div className={s.cardWrapper}>
      <Card
        key={caseItem.Id}
        className={s.container}
        style={{
          border: 'none',
          minHeight: 382,
          maxHeight: 480,
          backgroundColor: `#${caseItem.CaseColor}`,
          borderRadius: 35,
        }}
        cover={
          <div className={s.coverContainer}>
            <img className={s.img} alt="example" src={caseItem.Image} />

            <div
              className={s.hoverContent}
              style={{
                backgroundColor: `#${caseItem.CaseColor}`,
              }}
            >
              {caseItem.CaseColor === 'F6F6F6' ||
              caseItem.CaseColor === '1F92EF' ||
              caseItem.CaseColor === 'FFFFFF' ||
              caseItem.CaseColor === 'F7EDDD' ? (
                <>
                  {' '}
                  <h2
                    style={{
                      color: '#000',
                    }}
                  >
                    {caseItem.Title}
                  </h2>
                  <p
                    style={{
                      color: '#000',
                    }}
                  >
                    {caseItem.Filters.map((filter) => filter.Name).join(', ')}
                  </p>
                </>
              ) : (
                <>
                  <h2>{caseItem.Title}</h2>
                  <p>{caseItem.Filters.map((filter) => filter.Name).join(', ')}</p>
                </>
              )}
            </div>
          </div>
        }
      />
    </div>
  )
}

export default CardBox
