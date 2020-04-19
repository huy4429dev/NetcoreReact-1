import bgr from './../../images/bgr.jpg';
const styles = ()=>({
    root:{
        padding:'0 1rem !important',
        background:`url(${bgr})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    button:{
        backgroundColor: 'hsla(0,0%,100%,.3)',
        fontSize:'0.8rem',
        height:'100%',
        marginLeft:'1rem',
        textTransform: 'capitalize',
        padding:'0.5rem 0.5rem',
        minWidth:'2rem',
        color:'#172b4d'
    },
    buttonTitle:{
        color:'#333',
        fontWeight:'bold',
        textTransform: 'capitalize'
    },
    avarta:{
        marginLeft:'1rem',
        width:'1.5rem',
        height:'1.5rem'
    }
});
export default styles;