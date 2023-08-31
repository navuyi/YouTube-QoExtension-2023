import { useEffect, useState } from 'react'
import { ExperimentSettings, ExperimentSettingsDefault } from '../../../../utils/storage'
import { SettingsStorage } from '../../../../utils/storage/ChromeStorage'

export const useSettings = () => {
  const [settings, setSettings] = useState<ExperimentSettings>({
    bitrateIntervalMs: 0,
    bitrateScenario: [],
    assessmentTimeoutMs: 0,
    assessmentRetryTimeoutMs: 0,
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
      assessmentTimeoutMs: await SettingsStorage.getItem('assessmentTimeoutMs'),
      assessmentRetryTimeoutMs: await SettingsStorage.getItem('assessmentRetryTimeoutMs'),
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
