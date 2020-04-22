import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {withStyles} from '@material-ui/styles';
import styles from './style';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as actions from './../../actions/login';
import connect from './../../lib/connect';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            login:false,
            store:null
        }
    }
    componentDidMount() {
        let store = JSON.parse(localStorage.getItem('login'));
        if( store && store.login){
            this.setState({
                login:true,
                store:store
            })
        }
    }
    
    getValueInput = (e)=>{
        const {target} = e;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    handleLogin = (e)=>{
        e.preventDefault();
        const {username,password} = this.state;
        const account ={
            userName:username,
            password:password
        }
        this.props.actions.handleLogin(account);
    }
    render() {
        if( this.props.login ){
            return <Redirect to="/"/>
        }
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Container maxWidth="lg" >
                    <Box mt={8}>
                        <Grid container spacing={3} justify="center" alignItems="center">
                            <Grid item md={4} offset={3}>
                                <Card  variant="outlined">
                                    <CardContent>
                                        <Typography  variant="h1" component="h1" align="center" className={classes.title} color="textSecondary">
                                        Login
                                        </Typography>
                                        <form  onSubmit={this.handleLogin} noValidate autoComplete="off" className={classes.formLogin}>
                                            <input name="username" onChange={this.getValueInput} className={classes.inputLogin} type="text" placeholder="username"/>
                                            <input name="password" onChange={this.getValueInput}  autoComplete="true" className={classes.inputLogin}  type="password" placeholder="password"/>
                                            <Button variant="contained" type="submit" className={classes.btnSubmit} color="primary">
                                                Login
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(connect(Login, state => (
    {
        login:state.loginReducer.login
    }
    ),actions));
