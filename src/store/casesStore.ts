import { createStore, createEvent, createEffect } from 'effector'
import axios from 'axios'
import { Filters, initialFilters } from './types'

export const fetchCases = createEffect(async () => {
  const response = await axios.get('https://services.it-cron.ru/api/cases', {
    headers: {
      accept: 'text/plain',
      'Accept-language': 'ru',
    },
  })
  return response.data.Data
})

export const setFilters = createEvent<Filters>()
export const filterCases = createEvent()

export const $cases = createStore([]).on(fetchCases.doneData, (_, cases) => cases)

export const $filters = createStore<Filters>(initialFilters).on(setFilters, (_, filters) => filters)

export const $filteredCases = createStore([])
  .on(fetchCases.doneData, (_, cases) => cases)
  .on(filterCases, (state, _) => {
    const filters = $filters.getState()
    const cases = $cases.getState()
    return cases.filter((caseItem) => {
      const filterValues = caseItem.Filters.map((filter) => filter.Name)

      const matchesIndustry = filters.industry.length === 0 || filters.industry.some((ind) => filterValues.includes(ind))
      const matchesPlatform = filters.platform.length === 0 || filters.platform.some((pl) => filterValues.includes(pl))
      const matchesService = filters.service.length === 0 || filters.service.some((sv) => filterValues.includes(sv))
      const matchesLanguage = filters.language.length === 0 || filters.language.some((ln) => filterValues.includes(ln))

      return matchesIndustry && matchesPlatform && matchesService && matchesLanguage
    })
  })

$filters.watch(() => {
  filterCases()
})

fetchCases()
