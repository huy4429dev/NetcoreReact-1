const styles = (theme)=>({
    cardAdd:{
        marginLeft:'1rem',
        backgroundColor:'#ebecf0',
        width:'16.3rem'
    },
    cardInput:{
        width:'100%',
        display:'block',
        padding:'0.5rem 0.3rem',
        backgroundColor:'#fff',
        borderRadius:'0.2rem',
        outline:'none',
        border:'none',
        boxShadow: 'inset 0 0 0 2px #0079bf',
        fontFamily:theme.typography.fontFamily
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