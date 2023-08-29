import { Style } from '../../../../config/style';
import { fullViewport } from '../../../../config/style';

export const style: Style = {
  setup: {
    ...fullViewport,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282828',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
  },
  header: {
    fontSize: '24px',
    color: 'white',
    padding: 0,
    margin: 0,
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
};
