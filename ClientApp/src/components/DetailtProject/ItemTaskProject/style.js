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
    },
    addTask:{
        width:'92%',
        marginLeft:'2.5%',
        border: '1px solid #fff',
        borderRadius:' 0.3rem',
        padding:'0.5rem 0.2rem',
        fontFamily:theme.typography.fontFamily,
        fontSize:'1rem',
        backgroundColor: '#fff',
        minHeight:'3rem',
        borderRadius: '3px',
        boxShadow: '0 1px 0 rgba(9,30,66,.25)'
    },
    btnAddCard:{
        backgroundColor:'#5aac44',
        boxShadow: 'none',
        border: 'none',
        color: '#fff',
        padding:'1rem 2rem',
        textTransform: 'capitalize',
        '&:hover':{
            backgroundColor:'#4f9c3b',
        }
    },
    btnClose:{
        color:'#333'
    }
})
export default styles;