import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/styles';
import styles from './style';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';

class ItemDashboardHistory extends Component {
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Grid item md={3}>
                    <Link exact="false" to="/dd" >
                        <CardActionArea className={classes.cardPosition}>
                            <Typography className={classes.cardTitle}>
                                title
                            </Typography>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="120"
                            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />      
                        </CardActionArea> 
                    </Link> 
                </Grid>
                <Grid item md={3}>
                    <Link exact="false" to="/dd" >
                        <CardActionArea className={classes.cardPosition}>
                            <Typography className={classes.cardTitle}>
                                title
                            </Typography>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="120"
                            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />      
                        </CardActionArea> 
                    </Link> 
                </Grid>
                <Grid item md={3}>
                    <Link exact="false" to="/dd" >
                        <CardActionArea className={classes.cardPosition}>
                            <Typography className={classes.cardTitle}>
                                title
                            </Typography>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="120"
                            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />      
                        </CardActionArea> 
                    </Link> 
                </Grid>
                <Grid item md={3}>
                    <Link exact="false" to="/dd" >
                        <CardActionArea className={classes.cardPosition}>
                            <Typography className={classes.cardTitle}>
                                title
                            </Typography>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="120"
                            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />      
                        </CardActionArea> 
                    </Link> 
                </Grid>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(ItemDashboardHistory);