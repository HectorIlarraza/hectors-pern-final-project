import { Box } from 'grommet';

export const Theme = {
  global: {
    colors: {
        brand: '#7D4CDB', //#6FFFB0
      },
    font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
    },
  },
};

export const AppBar = (props) => (
  <Box
    tag='header'
    // direction='row'
    align='center'
    justify='center'
    background='dark-1'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);