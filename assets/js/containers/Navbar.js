// == Import npm
import { connect } from 'react-redux';

// == Import local
import Navbar from '../components/Navbar';

// == Fetch datas from state
const mapStateToProps = (state) => ({
  isDark: state.isDark,
});

// == Change datas from state
// Prepare functions to change state
const mapDispatchToProps = () => ({});

// == Building container
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

// == Export default container
export default NavbarContainer;
