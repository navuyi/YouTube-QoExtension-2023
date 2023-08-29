import { style } from './style';
import React from 'react';
import { Button, TextField, InputLabel, Select, MenuItem } from '@mui/material';
import { useExperimentStart } from './useExperimentStart';
import { redirect } from 'react-router';
import { useNavigate } from 'react-router';
import { Container } from '@mui/material';
import { Box } from '@mui/material';

const Setup = () => {
  const { handleExperimentCreate } = useExperimentStart();
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <Box sx={{ width: 0.5 }} marginTop={'3em'}>
        <h1 style={style.header}>Your YouTube Our Lab Experiment</h1>
        <Button
          variant="outlined"
          size="small"
          onClick={() => navigate('/settings')}
        >
          Settings
        </Button>

        <Box
          marginY={'2em'}
          display={'flex'}
          flexDirection={'column'}
          gap={'10px'}
        >
          <Box>
            <InputLabel style={{ color: 'white' }}>Subject Age</InputLabel>
            <TextField size="small" sx={{ width: '100%' }} />
          </Box>
          <Box>
            <InputLabel style={{ color: 'white' }}> Subject Sex</InputLabel>
            <Select
              size="small"
              sx={{ width: '100%' }}
              value={'male'}
              variant="outlined"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="undisclosed">Prefer not to say</MenuItem>
            </Select>
          </Box>
        </Box>

        <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
          <Box>
            <InputLabel sx={{ color: 'white' }}>Experiment ID</InputLabel>
            <TextField disabled size="small" sx={{ width: '100%' }} />
          </Box>
          <Button variant="outlined" size="small">
            Start experiment
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default Setup;
