import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core';
import styles from './style';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Header from './../../components/Header';
import * as actions from './../../actions/user';
import connect from './../../lib/connect';
import ListsUser from './../../components/User/ListsUser';
import ItemUser from './../../components/User/ItemUser';
import FormActionUser from './../../components/User/FormActionUser';
import SiderbarDashboard from './../../components/Dashboard/SiderbarDashboard';
import AddIcon from '@material-ui/icons/Add';


class User extends Component {
    constructor(props) {
        super(props);
        this.state={
            listsUser:''
        }
    }
    componentDidMount() {
        this.props.actions.listUser();
    }
    handleDeleteUser =(id)=>{
        this.props.actions.deleteUser(id);
    }
    showItemUser =  (listsUser)=>{
        var result = [];
            if(listsUser.length >0){
                result = listsUser.map((item,index)=>{
                    return <ItemUser
                            item={item}
                            key={index}
                            index={index}
                            handleDeleteUser={this.handleDeleteUser}
                            showFormEdit = {this.showFormEdit}
                            getValueEditUser = {this.getValueEditUser}
                            />
                });
            }
        return result;
    }
    hideFormEdit =()=>{
        const {showFormEdit,src,item} = this.props;
        const {handleAddUser,handleEditUser} = this.props.actions;
        const {handleUploadImageUser} = this.props.actions;
        if(showFormEdit === true){
            return <FormActionUser
                    handleAddUser = {handleAddUser}
                    handleEditUser = {handleEditUser}
                    handleUploadImageUser={handleUploadImageUser}
                    src={src}
                    item={item}/>
        }
    }
    showFormEdit =()=>{
        this.props.actions.showFormEdit();
    }
    showFromAddUser =()=>{
        this.props.actions.clearInputForm();
        this.props.actions.showFromAddUser();
    }
    showListUser = (listUser)=>{
        const {showListUser} = this.props;
        if( showListUser === true){
            return (
            <ListsUser>
                {this.showItemUser(listUser)}    
            </ListsUser>
            )
        }
    }
    handleUploadImageUser = ()=>{
        this.setState({
            
        })
    }
    getValueEditUser = (item)=>{
        this.props.actions.getValueEditUser(item);
    }
    render() {
        const {classes,listUser} = this.props;
        return (
            <React.Fragment>
                <Header/>
                <Container maxWidth="lg" >
                    <Box mt={8}>
                        <Grid container spacing={3}>
                            <SiderbarDashboard/>
                            <Grid item md={9} lg={9}>
                                <Box display="flex">
                                    <Button onClick={()=>this.showFromAddUser()} variant="contained" color="primary" className={classes.btnAdd}><AddIcon/></Button>
                                </Box>
                                {this.showListUser(listUser)}
                                {this.hideFormEdit()}
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(connect(User, state => (
    {
        listUser:state.userReducer.listUser,
        showFormEdit:state.userReducer.showFormEdit,
        showListUser:state.userReducer.showListUser,
        src : state.userReducer.src,
        item : state.userReducer.item
    }
    ),actions));

