import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { removeTask } from '../../actions';
import BottomSection from '../../components/MoreInfo/BottomSection';

const BottomSectionContainer = ({selectedTask, onClose=f=>f, onRemoveTask=f=>f}) => {
    if (!selectedTask[0]) return null;

    const bottomStyle = {
        width: '95%',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        bottom: 0
    }

    const getFormattedDate = (inputDate) => {
        let formattedDate;
        if (inputDate === moment(new Date()).format('YYYY-MM-DD')) {
            formattedDate = 'Today';
        } else if (inputDate === moment(new Date()).add(1, 'days').format('YYYY-MM-DD')) {
            formattedDate = 'Tomorrow';
        } else if (inputDate === moment(new Date()).add(-1, 'days').format('YYYY-MM-DD')) {
            formattedDate = 'Yesterday';
        } else {
            formattedDate = moment(inputDate).format('ddd, MMM D')
        }
        
        return formattedDate;
    }

    const completed =
        <span style={{fontSize: '.75rem'}}>
            Completed {' '} { getFormattedDate(selectedTask[0].date_completed) }
        </span>
    
    const created =
        <span style={{fontSize: '.75rem'}}>
            Created {' '} { getFormattedDate(selectedTask[0].date_created) }
        </span>

    const renderDate = {
        completed,
        created
    }

    const onRemove = (id) => {
        onRemoveTask(id);
        onClose();
    }

    return (
        <BottomSection 
            bottomStyle={ bottomStyle }
            renderDate={ renderDate }
            selectedTask={ selectedTask }
            onClose={ onClose }
            onRemove={ onRemove }
        />
    )
}

const mapDispatchToProps = dispatch => ({

    onRemoveTask(id) {
        dispatch(
            removeTask(id)
        )
    }
    
})

export default connect(null, mapDispatchToProps)(BottomSectionContainer);