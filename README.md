# Manual

This repository consists of Chrome extension and REST API application (backend). Both are using Node and Javascript.

## Extension

In order to create production build cd into the `extension` directory and run `npm run build`. This command creates build located in the `build` directory. This is the directory to be loaded into the Chrome browser. After loading it, the extension can be used to run the experiments.

### Experiment Settings

It is possible to configure settings the experiment will be run with. There is no dedicated UI for manipulating the settings as after each extension reload the settings are set to default values.
One can change the experiment settings by accessing the `extension/src/utils/storage/index.ts` file and configuring the following constant:

```typescript
export const ExperimentSettingsDefault: ExperimentSettings = {
  experimentDurationMs: 0.5 * 1e3 * 60,
  bitrateScenario: [200e3, 250e3, 500e3, 750e3, 800e3, 900e3], // bps
  bitrateIntervalMs: 15e3, // time between network throttling changes
  assessmentTimeoutMs: 150e3, // time before next assessment panel shows up
  assessmentRetryTimeoutMs: 30e3, // retry time if the assessment was opened outside of the video
  assessmentQuestion: 'Proszę ocenić jakość serwisu od strony audio-wizualnej', // text visible on the assessment panel
  useAssessments: false, // enable/disable assessments
}
```

<b>NOTE</b>
For any change to take place it is required to re-build the extension by running `npm run build` inside the `extension` directory. After building one must reload the extension in the Chrome browser's extensions menu.

## Backend

It would be best to extract the `dist` directory from the `backend` for the purpose of running the experiment. The entire `backend` containes development setup and source code (typescript) which is transpiled to the `dist` directory.

After extracting the `dist` directory navigate inside and run `node index.js`. This will start the backend application.

The SQLite database `database.sqlite` file is located in `dist/src/database` directory. All data captured by the application is persisted there. Be carefull not to delete this file and make sure to create backups periodically.
