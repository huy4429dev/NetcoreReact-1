import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/styles';
import styles from './style';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import {Link} from "react-router-dom";


class ItemProjectDashboard extends Component {

    render() {
        const { classes,project,match }= this.props;
        return (
            <React.Fragment>
                <Grid item md={3}>
                    <Link exact="false" to={`/detailt/${project.name}.${project.id}.html`} >
                        <CardActionArea className={classes.cardPosition}>
                            <Typography className={classes.cardTitle}>
                                {project.name}
                            </Typography>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="120"
                            image={`https://localhost:5001/${ project.thumbnail}`}
                            title="Contemplative Reptile"
                            />      
                        </CardActionArea> 
                    </Link> 
                </Grid>
            </React.Fragment>
        )
    }
}
export default  withStyles(styles)(ItemProjectDashboard);
