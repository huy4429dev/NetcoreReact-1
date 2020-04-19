import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import styles from './style';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

class FormAddTasks extends Component {
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Box>
                    <Card className={classes.cardAdd}>
                        <CardContent>
                            <Box>
                                <input placeholder="Nhập tiêu đề danh sách..." className={classes.cardInput}/>
                            </Box>
                        </CardContent>
                        <CardActions  display="flex">
                            <Button size="small" className={classes.btnAddCard}>Thêm thẻ</Button>
                            <CloseIcon className={classes.btnClose}/>
                        </CardActions>
                    </Card>
                </Box>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(FormAddTasks);
