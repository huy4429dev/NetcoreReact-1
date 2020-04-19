
import {fade} from '@material-ui/core/styles';
const styles =(theme)=>({
    positionHeader:{
        position: 'relative',
        zIndex: 1
    },
    background:{
        minHeight:'1rem !important',
        padding:'0.2rem 0 0.2rem 0 !important',
    },
    buttonHeader:{
        marginLeft:'0.3rem',
        minWidth:'2rem',
        padding:'0rem 0.5rem',
        backgroundColor:'#499aca !important',
        fontSize:'0.8rem',
        height:'100%'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
        searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
        inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
            width: '20ch',
            },
        },
    },
    flex:{
        width:'100%'
    },
    text:{
        marginTop:'0.4rem',
        marginLeft:'0.1rem',
        fontSize:'1rem',
        textTransform: 'capitalize'
    },
    avatar:{
        width:'2rem',
        height:'2rem',
        marginTop:'0.2rem',
        color:'#172b4d'
    }
})
export default styles;