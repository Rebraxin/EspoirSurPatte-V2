import { SET_DARK_THEME, SET_LIGHT_THEME } from '../actions';

const initialState = {
  testState: 'Hello State!',
  isDark: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DARK_THEME: {
      return {
        ...state,
        isDark: true,
      };
    }
    case SET_LIGHT_THEME: {
      return {
        ...state,
        isDark: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;
