import { useEffect, useState } from 'react'
import { ExperimentSettings, ExperimentSettingsDefault } from '../../../../utils/storage'
import { SettingsStorage } from '../../../../utils/storage/ChromeStorage'

export const useSettings = () => {
  const [settings, setSettings] = useState<ExperimentSettings>({
    bitrateIntervalMs: 0,
    bitrateScenario: [],
    assessmentTimeout: 0,
    assessmentRetryTimeout: 0,
    assessmentQuestion: '',
    useRandomBitrateOrder: false,
    useAssessments: false,
  })

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const experimentSettings: ExperimentSettings = {
      bitrateIntervalMs: await SettingsStorage.getItem('bitrateIntervalMs'),
      bitrateScenario: await SettingsStorage.getItem('bitrateScenario'),
      assessmentTimeout: await SettingsStorage.getItem('assessmentTimeout'),
      assessmentRetryTimeout: await SettingsStorage.getItem('assessmentRetryTimeout'),
      assessmentQuestion: await SettingsStorage.getItem('assessmentQuestion'),
      useRandomBitrateOrder: await SettingsStorage.getItem('useRandomBitrateOrder'),
      useAssessments: await SettingsStorage.getItem('useAssessments'),
    }
    setSettings(experimentSettings)
  }

  const updateSetting = async (key: keyof ExperimentSettings, value: any) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }))
    await SettingsStorage.setItem(key, value)
  }

  return {
    settings,
  }
}
