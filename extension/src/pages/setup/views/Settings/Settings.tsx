import React, { useEffect } from 'react'
import { Container, Box, TextField, InputLabel, Checkbox, StepLabel, FormLabel } from '@mui/material'
import { style } from './style'
import { useSettings } from './useSettings'
import { Button } from '@mui/material'
import { Chip } from '@mui/material'

const Settings = () => {
  const { settings } = useSettings()

  return (
    <Container sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
      <Box sx={{ marginTop: '3em', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h1 style={style.header}>Settings</h1>
        <Box sx={{ gap: '10px', display: 'flex', flexDirection: 'column' }}>
          <span style={style.subHeader}>Network throttling</span>
          <Box>
            <InputLabel>Values [kbps]</InputLabel>
            <Box>
              {settings.bitrateScenario &&
                settings?.bitrateScenario.map((bitrate, index) => {
                  return <Chip label={bitrate} onDelete={() => {}} />
                })}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
              <TextField size='small' />
              <Button variant='text'>Add</Button>
            </Box>
          </Box>
          <Box>
            <InputLabel>Bitrate interval [ms]</InputLabel>
            <TextField size='small' variant='outlined' value={settings?.bitrateIntervalMs} onChange={() => {}} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputLabel>Use random order</InputLabel>
            <Checkbox value={settings?.useRandomBitrateOrder} checked={settings?.useRandomBitrateOrder} onChange={() => {}} />
          </Box>
        </Box>
        <Box sx={{ gap: '10px', display: 'flex', flexDirection: 'column' }}>
          <span style={style.subHeader}>Assessment</span>
          <Box>
            <InputLabel>Assessment timeout [ms]</InputLabel>
            <TextField size='small' variant='outlined' value={settings?.assessmentTimeoutMs} onChange={() => {}}></TextField>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputLabel>Use assessments</InputLabel>
            <Checkbox value={settings?.useAssessments} checked={settings?.useAssessments} onChange={() => {}} />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
export default Settings
