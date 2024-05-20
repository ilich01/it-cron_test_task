import React, { useState } from 'react'
import { useStore } from 'effector-react'
import s from './Baner.module.scss'
import Filters from './Filters/Filter'
import { $filters, setFilters } from '../../store/casesStore'

const Baner = () => {
  const filters = useStore($filters)
  const [filterActive, setFilterActive] = useState(false)

  const handleFilterClick = () => {
    setFilterActive(!filterActive)
  }

  const handleClearFilters = () => {
    setFilters({
      industry: [],
      platform: [],
      service: [],
      language: [],
    })
  }

  const areFiltersSelected = () => {
    return Object.values(filters).some((filterArray) => filterArray.length > 0)
  }

  return (
    <div className={s.container}>
      <div className={s.header}></div>
      <div className={s.top}>
        <div className={s.firRect}></div>
      </div>
      <div className={s.middle}>
        <h2 className={s.title}>Кейсы</h2>
        <div className={s.filterControls}>
          <div className={s.filterButton}>
            {areFiltersSelected() && (
              <>
                <div className={s.clearButton} onClick={handleClearFilters}>
                  Очистить
                </div>
                <div className={s.filterLine}></div>
              </>
            )}
            <div
              className={`${s.secRect} ${filterActive ? s.secRectActive : ''} ${areFiltersSelected() ? s.filtersSelected : ''}`}
            ></div>
            <div className={`${s.line} ${filterActive ? s.lineActive : ''}`}></div>
            <p onClick={handleFilterClick} className={`${s.buttonText} ${filterActive ? s.buttonTextActive : ''}`}>
              Фильтры
            </p>
          </div>
        </div>
      </div>
      <div className={s.bottom}>
        <div className={s.thrdRect}></div>
        {filterActive && <Filters />}
      </div>
    </div>
  )
}

export default Baner
