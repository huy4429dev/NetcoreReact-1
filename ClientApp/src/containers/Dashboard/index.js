import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import {withStyles} from '@material-ui/styles';
import styles from './style';
import PersonIcon from '@material-ui/icons/Person';
import SiderbarDashboard from '../../components/Dashboard/SiderbarDashboard/index';
import ListDashboardHistory from './../../components/Dashboard/IistsDashboardHistory';
import ListsProjectDashboard from './../../components/Dashboard/ListsProjectDashboard';
import Header from './../../components/Header';
import connect from './../../lib/connect';
import ModalAdd from './../../components/Dashboard/modalAdd'
import * as actions from './../../actions/project';
import ItemProjectDashboard from './../../components/Dashboard/ItemProjectDashboard';

class Dashboard extends Component {
    showFormAdd =()=>{
        const {showFormAdd,src} = this.props;
        const {handleUploadImageProject,handleAddProject} = this.props.actions;
        if( showFormAdd ){
            return <ModalAdd 
                    handleAddProject={handleAddProject} 
                    handleUploadImageProject={handleUploadImageProject} 
                    src={src}/>
        }
    }
    showListProject = (projects)=>{
        var result = null;
            if(projects){
                result = projects.map((project,index)=>{
                    return <ItemProjectDashboard
                            project={project}
                            key={index}
                        />
                })
            }
        return result;
    }
    componentDidMount(){
        const {fetchListsProject}=this.props.actions;
        fetchListsProject();
    }
    render() {
        const {classes,projects} = this.props;
        const {showFormAdd} = this.props.actions;
        return (
            <React.Fragment>
                <Header showFormAdd={showFormAdd}/>
                <Container maxWidth="lg" >
                    <Box mt={8}>
                        <Grid container spacing={3}>
                            <SiderbarDashboard/>
                            <Grid item md={9}>
                                <Box display="flex" mt={2.5}>
                                    <QueryBuilderIcon/>
                                    <Typography variant="subtitle1" component="p" className={classes.title}>
                                        Đã xem gần đây
                                    </Typography>
                                </Box>
                                <ListDashboardHistory/>
                                <Box display="flex" mt={2.5}>
                                    <PersonIcon/>
                                    <Typography variant="subtitle1" component="p" className={classes.title}>
                                        Đã xem gần đây
                                    </Typography>
                                </Box>
                                <ListsProjectDashboard>
                                    {this.showListProject(projects)}
                                </ListsProjectDashboard>
                            </Grid>
                        </Grid>
                    </Box>
                    {this.showFormAdd()}
                </Container>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(connect(Dashboard, state => (
    {
        src : state.projectReducer.src,
        showFormAdd:state.projectReducer.showFormAdd,
        projects:state.projectReducer.projects
    }
    ),actions));

