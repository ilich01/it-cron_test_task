import React, { useState } from 'react'
import { useStore } from 'effector-react'
import { filterCategories } from './filetrCategories'
import { setFilters, $filters } from '../../../store/casesStore'
import s from './Filters.module.scss'

const Filters = () => {
  const filters = useStore($filters)
  const [selectedFilters, setSelectedFilters] = useState(filters)

  const handleFilterChange = (category, item) => {
    const newValue = selectedFilters[category].includes(item)
      ? selectedFilters[category].filter((i) => i !== item)
      : [...selectedFilters[category], item]
    const newFilters = { ...selectedFilters, [category]: newValue }
    setSelectedFilters(newFilters)
    setFilters(newFilters)
  }

  return (
    <div className={s.container}>
      <div className={s.header}>
        {Object.keys(filterCategories).map((category) => (
          <div key={category} className={s.filterCategory}>
            <h3 className={s.categoryName}>{filterCategories[category].name}</h3>
          </div>
        ))}
      </div>
      <div className={s.line}></div>
      <div className={s.body}>
        {Object.keys(filterCategories).map((category) => (
          <div key={category} className={s.filter}>
            {filterCategories[category].items.map((item) => (
              <span
                key={item}
                className={`${s.text} ${selectedFilters[category].includes(item) ? s.selected : ''}`}
                onClick={() => handleFilterChange(category, item)}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filters
