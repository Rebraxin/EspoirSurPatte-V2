// == Import npm
import { connect } from 'react-redux';

// == Import local
import App from '../App';
import { setDarkTheme, setLightTheme } from '../actions';

// == Fetch datas from state
const mapStateToProps = (state) => ({
  isDark: state.isDark,
});

// == Change datas from state
// Prepare functions to change state
const mapDispatchToProps = () => ({});

// == Building container
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

// == Export default container
export default AppContainer;
