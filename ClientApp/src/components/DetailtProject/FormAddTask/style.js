const styles =(theme)=>({
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