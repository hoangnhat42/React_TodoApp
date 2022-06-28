import { connect } from 'react-redux'
import Footer from '../../components/layout/Footer'
import { saveTheme } from '../actions/changeThemeAction'

const mapDispatchToProps = dispatch => ({
    dispatch,
    saveColorTheme: color => dispatch(saveTheme(color)),
});

function mapStateToProps(state) {
    return {
        themeColor: state.color,
    };
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (Footer);