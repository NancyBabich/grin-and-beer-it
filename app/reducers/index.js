export const modalStateReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL_STATE':
      return action.isModal;
    default:
      return state;
  }
};
