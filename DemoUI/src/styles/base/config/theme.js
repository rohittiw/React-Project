import colors from './bop-color';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color: {
        ...colors
    },
    italicText: (fontSize) => {
       return { font: `400 ${ fontSize } pacificoregular` }
    }
});

export default theme;