const styles = (theme)=>({
    inputAddUser:{
        marginBottom:'1rem',
        // width: '100%',
        border: 'none',
        display: 'block',
        outline: 'none',
        padding:'0.5rem 0.5rem',
        margin:'1rem',
        boxShadow: 'inset 0 0 0 2px #0079bf',
        fontFamily: 'Roboto',
        borderRadius: '2 rem',
        backgroundColor: '#fff',
    },
    btnSubmitUser:{
        width:'8%',
        padding:'1rem 0.2rem',
        textTransform: 'capitalize',
        marginLeft:'1rem'
    },
    btnUpload:{
        width:'8%',
        padding:'1rem 0.2rem',
    },
    inputUploads:{
        fontFamily:'roboto',
        width:'15%',
    },
    boxUploads:{
        marginLeft:'1rem',
    },
    styleAvatar:{
        width: theme.spacing(8),
        height: theme.spacing(8),
        marginLeft:theme.spacing(1)
    }
})
export default styles;