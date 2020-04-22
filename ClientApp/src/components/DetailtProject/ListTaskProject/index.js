import React, {Component} from 'react';
import ItemTaskProject from './../ItemTaskProject/index';
import { withStyles } from '@material-ui/core';
import styles from './style';
import Grid from '@material-ui/core/Grid';


class ListTaskProject extends Component {
    render() {
        
        return(
            <React.Fragment>
                <Grid container spacing={2}>
                    {this.props.children}
                </Grid>   
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ListTaskProject);