const styles = (theme)=>({
    colorTitle:{
        color:'#333'
    },
    btnWaring:{
        background:theme.palette.warning.main,
        minWidth:'2.5rem',
        '&:hover':{
            background:theme.palette.warning.dark
        }
    },
    btnDanger:{
        background:theme.palette.error.main,
        minWidth:'2.5rem',
        marginLeft:'0.2rem',
        '&:hover':{
            background:theme.palette.error.dark
        }
    },
    avata:{
        marginLeft:'auto'
    }
})

export default styles;