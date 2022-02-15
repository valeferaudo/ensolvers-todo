import {} from '../../Constants/actionTypes';

const initialState = {
    isLoading: false,
    isLoadingForm: false,
    list: [],
    messageType: '',
    messageText: '',
    showMessage: false,
    task: {}
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ALALA':
        return {
          ...state,
          isLoading: true
        };
      default:
        return state;
    }
  };
  
  export default tasksReducer;