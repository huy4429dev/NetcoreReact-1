import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    palette:{
        background:'#026aa7',
        text:{
            primary:'#fff',
            secondary:'#444444'
        }
    },
    typography:{
        fontFamily:"Roboto",
        htmlFontSize: 10,
        fontSize: 9,
        button:{
            fontSize:'1.2rem',
            lineHeight:0.5,
            fontWeight: 400
        }
    },
    shape:{
        borderRadius:4
    }
});
export default theme;