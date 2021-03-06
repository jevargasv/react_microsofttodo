import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Hidden } from '@material-ui/core';
import HeaderSection from './Header/HeaderSectionContainer';
import BodySection from './Body/BodySection';
import FooterSection from './Footer/FooterSectionContainer';

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#FAFAFA'
    },
    drawerHeader: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
}));

const More = ({currentTask, tasks, open, onClose=f=>f}) => {
    const classes = useStyles();
    const selectedTask = tasks.filter(task => task.task_id === currentTask.id);

    return (
        <Hidden smDown implementation="css">
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={ open }
                classes={{
                    paper: classes.drawerPaper,
                }}>

                <div className={classes.drawerHeader}>
                    <div className={classes.toolbar} />

                    <HeaderSection currentTask={ currentTask } selectedTask={ selectedTask } />

                    <BodySection selectedTask={ selectedTask } tasks={ tasks } onClose={ onClose } />

                    <FooterSection selectedTask={ selectedTask } onClose={ onClose } />
                </div>
            </Drawer>
        </Hidden>
    )
};

More.propTypes = {
    currentTask: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired, 
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default More;