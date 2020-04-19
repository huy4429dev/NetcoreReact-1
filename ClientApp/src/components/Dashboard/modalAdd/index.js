import React, { Component } from 'react'
import styles from './style';
import {withStyles} from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import BackupIcon from '@material-ui/icons/Backup';

class ModalAdd extends Component {
    constructor(props) {
        super(props);
        this.state ={
            nameproject:null
        }
    }
    
    handleUploadImageProject =()=>{
        var formData = new FormData();
        var imagedata = document.querySelector('input[type="file"]').files[0];
        formData.append("data", imagedata);
        this.props.handleUploadImageProject(formData);
    }
    handleAddProject = (e)=>{
        e.preventDefault();
        const {nameproject} = this.state;
        const {src} =this.props;
        const project = {
            name: nameproject,
            thumbnail: src,
            managerId: 289
        }        
        this.props.handleAddProject(project);
    }
    changeValue = e => {
        this.setState({
            [e.target.name]:e.target.value
        })  
    }
    render() {
        const {classes,src} = this.props;
        return (
            <React.Fragment>
                <div className={classes.filterModal}>
                    <Card className={classes.modalAdd}>
                        <CardContent>
                            <form className={classes.formAction} onSubmit={this.handleAddProject}>
                                <Typography align="center" className={classes.title} color="textSecondary" gutterBottom>
                                    Add project
                                </Typography>
                                <input name="nameproject" className={classes.inputAdd} placeholder="name" onChange={this.changeValue}/>
                                <Box mt={2}>
                                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                                    <label htmlFor="icon-button-file">
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera />
                                        </IconButton>
                                    </label>
                                    <Button variant="contained" color="primary" className={classes.btnUpload} onClick={this.handleUploadImageProject}>
                                        <BackupIcon/>
                                    </Button>
                                </Box>
                                <Button type="submit" variant="contained" color="primary" className={classes.btnSumit}>
                                    Add
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ModalAdd);