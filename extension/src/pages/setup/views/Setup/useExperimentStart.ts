import { api } from '../../../../API/api';
import { DateTime } from 'luxon';
import { VariablesStorage } from '../../../../utils/storage/ChromeStorage';

export const useExperimentStart = () => {
  const handleExperimentCreate = async () => {
    const id = await getNextExperimentID();
    try {
      const experiment = await api.experiment.post({
        subjectAge: 0,
        subjectSex: 'male',
        started: DateTime.now().toISO(),
      });
      console.log(experiment);
      await VariablesStorage.setItem('running', true);
      await VariablesStorage.setItem('experimentID', experiment.id);

      window.location.href = 'https://www.youtube.com';
    } catch (err) {
      console.log(err);
    }
  };

  const getNextExperimentID = async (): Promise<number | undefined> => {
    try {
      const nextID = await api.experiment.id.get();
      return nextID;
    } catch (err) {
      window.alert('Could not get next experiment ID');
    }
  };

  return { getNextExperimentID, handleExperimentCreate };
};
