export const EXPERIMENTS_STORAGE_KEY = 'modelscope.experiments'

const isExperimentRecord = (record) => (
  record &&
  typeof record === 'object' &&
  typeof record.id === 'string' &&
  typeof record.name === 'string' &&
  typeof record.model === 'string'
)

export function getExperiments() {
  try {
    const stored = window.localStorage.getItem(EXPERIMENTS_STORAGE_KEY)
    if (!stored) return []

    const parsed = JSON.parse(stored)
    if (!Array.isArray(parsed)) return []

    return parsed.filter(isExperimentRecord)
  } catch {
    return []
  }
}

export function saveExperiments(experiments) {
  try {
    window.localStorage.setItem(EXPERIMENTS_STORAGE_KEY, JSON.stringify(experiments))
    return true
  } catch {
    return false
  }
}

export function deleteExperiment(id) {
  const remaining = getExperiments().filter((experiment) => experiment.id !== id)
  return saveExperiments(remaining)
}

export function resetExperiments() {
  return saveExperiments([])
}
