// == Import npm
import { connect } from 'react-redux';

// == Import local
import ThemeToggler from '../components/ThemeToggler';
import { setDarkTheme, setLightTheme } from '../actions';

// == Fetch datas from state
const mapStateToProps = (state) => ({
  isDark: state.isDark,
});

// == Change datas from state
// Prepare functions to change state
const mapDispatchToProps = (dispatch) => ({
  setDarkTheme: () => {
    dispatch(setDarkTheme());
  },
  setLightTheme: () => {
    dispatch(setLightTheme());
  },
});

// == Building container
const ThemeTogglerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeToggler);

// == Export default container
export default ThemeTogglerContainer;
