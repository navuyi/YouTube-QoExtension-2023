import { CSSProperties } from 'react';

export const createBackground = () => {
  const background = document.createElement('div');
  const style: CSSProperties = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    //width: '100%',
    //height: '100%',
    backgroundColor: 'rgba(34,34,34,0.8)',
    zIndex: 10000,
    display: 'none',
  };
  Object.assign(background.style, style);
  return background;
};
