import { Style } from '../../../../config/style';
import { fullViewport } from '../../../../config/style';

export const style: Style = {
  setup: {
    ...fullViewport,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
