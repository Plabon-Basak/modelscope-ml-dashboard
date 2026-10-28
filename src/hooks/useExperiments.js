import { useState } from 'react'
import { getExperiments, saveExperiments } from '../utils/storage.js'

const createId = () => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

export function useExperiments() {
  const [experiments, setExperiments] = useState(() => getExperiments())
  const [storageError, setStorageError] = useState(null)

  const addExperiment = (experimentData) => {
    const record = {
      id: createId(),
      name: experimentData.name.trim(),
      model: experimentData.model,
      notes: experimentData.notes.trim(),
      createdAt: new Date().toISOString(),
      status: 'Saved',
    }
    const next = [record, ...experiments]

    if (!saveExperiments(next)) {
      setStorageError('The experiment could not be saved in browser storage.')
      return false
    }

    setExperiments(next)
    setStorageError(null)
    return true
  }

  const removeExperiment = (id) => {
    const next = experiments.filter((experiment) => experiment.id !== id)

    if (!saveExperiments(next)) {
      setStorageError('The experiment could not be deleted from browser storage.')
      return false
    }

    setExperiments(next)
    setStorageError(null)
    return true
  }

  return { experiments, addExperiment, deleteExperiment: removeExperiment, storageError }
}
