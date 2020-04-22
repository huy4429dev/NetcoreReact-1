import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import styles from './style';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Avatar from '@material-ui/core/Avatar';

class FormActionUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            fullname: "",
            email: "",
            password: "",
            avatar: "",
            username: "",
            id:""
        }
    }
    componentDidMount() {
        const {item} = this.props;
        if( item && item.id){
            this.setState({
                fullname:item.fullName,
                email: item.email,
                password: item.password,
                avatar: item.avatar,
                username: item.userName,
                id :item.id,
            });   
        }
    }
    
    
    onChange = (e)=>{
        const {target} = e;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })

    }
    handleAddUser = (e)=>{
        e.preventDefault();
        const {fullname,email,password,username,id,avatar} = this.state;
        const {src} =this.props;
        console.log(src);
        const newImg = src === '' ? avatar: src;
        const user = {
            fullName:fullname,
            email:email,
            password:password,
            userName:username,
            avatar:newImg,
        }      
        if(id && id !==''){
            this.props.handleEditUser(id,user);
        }else{
            this.props.handleAddUser(user);
        }
    }
    uploadImage = (e)=>{
        e.preventDefault();
        var formData = new FormData();
        var imagedata = document.querySelector('input[type="file"]').files[0];
        formData.append("data", imagedata);
        this.props.handleUploadImageUser(formData);
    }
    showImgUser =(id,src,styleAvatar)=>{
        if( id !== ''){
            return  (
            <Avatar
                className={styleAvatar}
                variant="rounded"
                alt="XXX" 
                src={`https://localhost:5001/${src}`}
            />)
        }
    }
    render() {
        const {classes} = this.props;
        const {id,fullname,email,password,avatar,username} = this.state;
        return (
            <React.Fragment>
                <Card >
                    <CardContent >
                        <Typography fontWeight="bold" className={classes.title} color="textSecondary" gutterBottom>
                            Thêm người dùng
                        </Typography>
                        <form onSubmit={this.handleAddUser} >
                            <Box display="flex" flexDirection="column">
                                <input type="text" name="fullname" onChange={this.onChange} className={classes.inputAddUser} placeholder="fullname" defaultValue={fullname}/>
                                <Box>                              
                                    <Box display="flex" className={classes.boxUploads}> 
                                        <input type="file" name="avatar"  placeholder="avatar" className={classes.inputUploads} id="myFileInputs"/>
                                        <Button  onClick={this.uploadImage} type="submit" variant="contained" color="primary" className={classes.btnUpload}>
                                            <CloudUploadIcon/>
                                        </Button>
                                        {this.showImgUser(id,avatar,classes.styleAvatar)}
                                    </Box>                   
                                </Box>
                                <input type="text" name="username" onChange={this.onChange} className={classes.inputAddUser} placeholder="username" defaultValue={username}/>
                                <input type="text" name="email" onChange={this.onChange} className={classes.inputAddUser} placeholder="email" defaultValue={email}/>
                                <input type="password" name="password" onChange={this.onChange} className={classes.inputAddUser} placeholder="password" defaultValue={password} autoComplete="on"/>                                                          
                                <Button variant="contained" color="primary" className={classes.btnSubmitUser}  type="submit">
                                    Add
                                </Button>
                            </Box>
                        </form>
                    </CardContent>
                </Card>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(FormActionUser);