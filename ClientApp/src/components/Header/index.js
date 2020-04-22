import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/styles';
import styles from './style';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import { Box } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import HomeIcon from '@material-ui/icons/Home';
import {Link,Redirect} from "react-router-dom";
import TableChartIcon from '@material-ui/icons/TableChart';

class Header extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("login");
        let loggedIn = true;
        token === null ? loggedIn = false : loggedIn = true;
        this.state={
            bgColor:'#026aa7',
            loggedIn
        }
    }
    changeProfileUser = ()=>{
        this.showProfileUser();
    }
    showFormAdd=()=>{
        this.props.showFormAdd();
    }
    render() {
        if(this.state.loggedIn === false){
            return <Redirect to="/login.html"/>
        }
        const {classes} = this.props;
        return (
            <React.Fragment>
                <AppBar className={classes.positionHeader}>
                    <Toolbar style={{backgroundColor:this.state.bgColor}} className={classes.background}>
                        <Box display="flex" justifyContent="space-between" className={classes.flex}>
                            <Box  display="flex">
                                <Button className={classes.buttonHeader} variant="contained" color="primary" >
                                    <AppsIcon/>
                                </Button>
                                <Link exact="true" to="/">
                                    <Button variant="contained" className={classes.buttonHeader} color="primary"  m={2}>
                                        <HomeIcon/>
                                    </Button>
                                </Link>
                                <Button variant="contained" className={classes.buttonHeader} color="primary"  m={2}>
                                    <TableChartIcon/><span className={classes.text}>Bảng</span>
                                </Button>
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                    <SearchIcon />
                                    </div>
                                    <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                    />
                                </div>
                            </Box>
                            <Box display="flex">    
                                <Button  onClick={this.showFormAdd} variant="contained" className={classes.buttonHeader} color="primary"  >
                                    <AddCircleOutlineIcon/>
                                </Button>
                                <Button   variant="contained" className={classes.buttonHeader} color="primary" >
                                    <ErrorOutlineIcon/>
                                </Button>
                                <Button   variant="contained" className={classes.buttonHeader} color="primary" >
                                    <AddAlertIcon/>
                                </Button>
                                <Box mr={0.5} ml={0.5}>
                                    <Avatar className={classes.avatar} onClick={this.changeProfileUser}>H</Avatar>
                                    
                                </Box> 
                            </Box>
                        </Box>
                    </Toolbar>
                    
                </AppBar>   
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Header);