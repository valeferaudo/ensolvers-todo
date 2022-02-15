
import {} from '../../Constants/actionTypes';
  
  const initialState = {
    isLoading: false,
    authenticated: false,
    error: false,
    showMessage: false,
    messageType: '',
    messageText: '',
    loggedUser: {}
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      default: {
        return state;
      }
    }
  };
  
  export default authReducer;