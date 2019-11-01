import React from 'react';
import PropTypes from 'prop-types';
import { ClickAwayListener, ListItem } from '@material-ui/core';

const Note = ({renderNote, selectedTask, onClick=f=>f, onClickAway=f=>f}) => {
    return (
        <ClickAwayListener onClickAway={onClickAway}>
            <ListItem style={{margin: '10px 3px'}} onClick={onClick}>
                { selectedTask[0].note ? 
                    renderNote.note() : renderNote.placeholder()
                }
            </ListItem>
        </ClickAwayListener>
    );
}

Note.propTypes = {
    renderNote: PropTypes.object.isRequired,
    selectedTask: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickAway: PropTypes.func.isRequired
}
export default Note;