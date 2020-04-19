const styles  =  (theme)=>({
    root: {
        minWidth: 275,
        color:'#333'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 24,
        fontWeight:'bold',
        letterSpacing: '0.2rem'
    },
    pos: {
        marginBottom: 12,
    },
    formLogin:{
        display:'flex',
        flexDirection:'column',
        color:'#333 !important',
        marginTop:theme.spacing(4),
        marginBottom:theme.spacing(4)
    },
    inputLogin:{
        marginTop:theme.spacing(2),
        border: 'none',
        display: 'block',
        outline: 'none',
        padding: '0.5rem 0.5rem',
        boxShadow: 'inset 0 0 0 2px #0079bf',
        fontFamily: 'Roboto',
        borderRadius: '0.2rem',
        backgroundColor: '#fff'
    },
    btnSubmit:{
        marginTop:theme.spacing(2),
        paddingTop:theme.spacing(2),
        paddingBottom:theme.spacing(2)
    }
});
export default styles;