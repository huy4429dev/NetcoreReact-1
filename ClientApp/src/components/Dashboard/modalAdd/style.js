const styles = () =>({
    modalAdd:{
        position: 'absolute',
        top:'40%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
        background:'#fff',
        minWidth:'20rem'
    },
    filterModal:{
        position: 'absolute',
        top:'0',
        left:'0',
        right:'0',
        bottom:'0',
        background:'rgba(0,0,0,0.5)'
    },
    inputAdd:{
        width: '97%',
        border: 'none',
        display: 'block',
        outline: 'none',
        padding: '0.5rem 0.3rem',
        boxShadow: 'inset 0 0 0 2px #0079bf',
        fontFamily: 'Roboto',
        borderRadius: '0.2rem',
        backgroundColor: '#fff',
    },
    input:{
        display:'none'
    },
    btnUpload:{
        width:'100%',
        padding:'0.5rem',
        marginBottom:'1rem'
    },
    formAction:{
        display:'flex',
        flexDirection: 'column'
    },
    btnSumit:{
        width:'100%',
        padding:'1rem',
        marginBottom:'1rem'
    }
})
export default styles;