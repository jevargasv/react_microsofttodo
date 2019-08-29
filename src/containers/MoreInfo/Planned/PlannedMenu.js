import PlannedMenu from '../../../components/MoreInfo/Planned/PlannedMenu';
import { connect } from 'react-redux';
import { addDateDue } from '../../../actions';

const mapDispatchToProps = dispatch => ({
    
    onAddDateDue(id, date) {
        dispatch(
            addDateDue(id, date)
        )
    }

})

export default connect(null, mapDispatchToProps)(PlannedMenu);