import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Setup from './views/Setup/Setup';
import Settings from './views/Settings/Settings';
import { HashRouter } from 'react-router-dom';
import ThemeProvider, {
  ThemeProviderProps,
} from '@mui/material/styles/ThemeProvider';
import { createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import './style.module.scss';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Setup />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
