const styles = (theme)=>({
    root:{
        backgroundColor:'#ebecf0',
        minWidth:'17rem',
    },
    title:{
        color:'#333',
    },
    btnAdd:{
        '&:hover':{
            backgroundColor: 'rgba(9,30,66,.08)',
            color: '#172b4d',
        },
        color:'#8e98a9',
        width:'100%',
        justifyContent: 'start',
        textTransform: 'capitalize'
    },
    cardContent:{
        padding:'0.2rem 1rem 0rem 1rem' 
    },
    btnMore:{
        color:'#8e98a9',
    },
    cardInputTitle:{
        width:'100%',
        padding:'0.5rem 0.2rem',
        backgroundColor:'#ebecf0',
        borderRadius:'0.2rem',
        outline:'none',
        border:'none',
        fontFamily:theme.typography.fontFamily,
        boxShadow: 'inset 0 0 0 2px #ebecf0',
        transition:' margin 85ms ease-in,background 85ms ease-in',
        '&:focus':{
            backgroundColor:'#fff',
            boxShadow: 'inset 0 0 0 2px #0079bf',
        }
    }
})
export default styles;