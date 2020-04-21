import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles';
import styles from './style';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

class ItemTask extends Component {
    render() {
        const {classes,task} = this.props;
        return (
            <React.Fragment>
                <Card className={classes.listTask}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {task.title}
                        </Typography>
                    </CardContent>
                </Card>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(ItemTask);