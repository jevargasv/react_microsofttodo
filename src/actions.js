import C from './constants';

export const getListTitle = title => ({
    type: C.SET_TITLE,
    payload: title
})

export const loadTasks = () => ({
    type: C.LOAD_TASKS,
})

export const toggleCompleted = id => ({
    type: C.EDIT_TASK_STATUS_COMPLETE,
    payload: id
})

export const toggleImportant = id => ({
    type: C.EDIT_TASK_STATUS_IMPORTANT,
    payload: id
})

export const toggleMyDay = id => ({
    type: C.EDIT_TASK_STATUS_MYDAY,
    payload: id
})

export const toggleMoreInfo = task => ({
    type: C.SET_MOREINFO,
    payload: task
})

export const addTask = (
        task_id, item, list, date_created_full, date_created, date_due, 
        completedStatus=false, importantStatus=false, my_day, planned, important, tasks=true
    ) => dispatch => {
        dispatch({
            type: C.ADD_TASK,
            payload: {
                task_id, item, list, date_created_full, date_created, date_due, 
                completedStatus, importantStatus, my_day, planned, important, tasks
            }
        })
}

export const removeTask = id => ({
    type: C.REMOVE_TASK,
    payload: id
})