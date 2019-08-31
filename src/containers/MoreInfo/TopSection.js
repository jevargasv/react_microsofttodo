import React from 'react';
import { connect } from 'react-redux';
import { setTask, toggleCompleted, toggleImportant, updateTask } from '../../actions'; 
import { FaCheckCircle, FaRegCircle, FaStar, FaRegStar } from 'react-icons/fa';
import TopSection from '../../components/MoreInfo/TopSection';

const TopSectionContainer = ({currentTask, selectedTask, onSetTask=f=>f, onToggleComplete=f=>f, onToggleImportant=f=>f, onUpdateTask=f=>f}) => {
    if (!selectedTask[0]) return null;

    const topStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        position: 'fixed',
        zIndex: 2,
        background: '#fafafa'
    }

    const onSubmit = e => {
        e.preventDefault();

        if (currentTask.task === '') {
            let subTask = selectedTask[0].item
            onUpdateTask(currentTask.id, subTask, selectedTask[0].note, selectedTask[0].steps);
        } else {
            onUpdateTask(currentTask.id, currentTask.task, selectedTask[0].note, selectedTask[0].steps);
        }
    }

    const onEnterPress = e => {
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();
            onSubmit(e);
        }
    }

    const completed =
        <FaCheckCircle className="list-icon list-icon-margin-rt green" onClick={() => onToggleComplete(selectedTask[0].task_id)} />

    const notCompleted =
        <FaRegCircle className="list-icon list-icon-margin-rt gray" onClick={() => onToggleComplete(selectedTask[0].task_id)} />

    const important =
        <FaStar className="list-icon blue" onClick={() => onToggleImportant(selectedTask[0].task_id)} />
    
    const notImportant =
        <FaRegStar className="list-icon gray" onClick={() => onToggleImportant(selectedTask[0].task_id)} />


    const renderStatus = {
        completed,
        notCompleted,
        important,
        notImportant
    }

    return (
        <TopSection
            currentTask={ currentTask }
            renderStatus={ renderStatus }
            selectedTask={ selectedTask }
            topStyle={ topStyle }
            onEnterPress={ onEnterPress }
            onSetTask={ onSetTask }
            onSubmit={ onSubmit }
        />
    );
}


const mapDispatchToProps = dispatch => ({
    
    onToggleComplete(id) {
        dispatch(
            toggleCompleted(id)
        )
    },

    onToggleImportant(id) {
        dispatch(
            toggleImportant(id)
        )
    },

    onSetTask(id, task, note, steps) {
        dispatch(
            setTask(id, task, note, steps)
        )
    },

    onUpdateTask(id, task, note, steps) {
        dispatch(
            setTask(id, task, note, steps)
        )

        dispatch(
            updateTask(id, task)
        )
    }

})

export default connect(null, mapDispatchToProps)(TopSectionContainer);