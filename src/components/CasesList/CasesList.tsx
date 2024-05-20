import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { Spin } from 'antd'
import CardBox from '../Card/Card.tsx'
import s from './CasesList.module.scss'
import { fetchCases, $filteredCases, $cases } from '../../store/casesStore.ts'

const CasesList = () => {
  const cases = useStore($filteredCases)
  const allCases = useStore($cases)
  const loading = cases.length === 0 && allCases.length === 0

  useEffect(() => {
    fetchCases()
  }, [])

  if (loading) {
    return <Spin />
  }

  return (
    <div className="app">
      <div className={s.container}>
        <div className={s.column}>
          {cases.slice(0, Math.ceil(cases.length / 2)).map((caseItem, index) => (
            <CardBox key={index} caseItem={caseItem} />
          ))}
        </div>
        <div className={s.column}>
          {cases.slice(Math.ceil(cases.length / 2)).map((caseItem, index) => (
            <CardBox key={index} caseItem={caseItem} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CasesList
