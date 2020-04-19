import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './style';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TableChartIcon from '@material-ui/icons/TableChart';
import Grid from '@material-ui/core/Grid';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Link} from 'react-router-dom';

class SiderbarDashboard extends Component {
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Grid item md={3}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                            <ListItemIcon>
                                <TableChartIcon />
                            </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                        </ListItem>
                        <Link to="/user.html" className={classes.sidebarLink}>
                            <ListItem button>
                                <ListItemIcon>
                                    <AccountBoxIcon />
                                </ListItemIcon>
                                <ListItemText primary="User" />
                            </ListItem>
                        </Link>
                    </List>
                </Grid>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(SiderbarDashboard);

