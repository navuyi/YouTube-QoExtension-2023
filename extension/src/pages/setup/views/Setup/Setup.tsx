import { style } from './style';
import React from 'react';
import { Button } from '@mui/material';
import { useExperimentStart } from './useExperimentStart';

const Setup = () => {
  const { handleExperimentCreate } = useExperimentStart();

  return (
    <div style={style.setup}>
      <Button variant="outlined" size="small" onClick={handleExperimentCreate}>
        Hello World
      </Button>
    </div>
  );
};
export default Setup;
