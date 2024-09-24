// reducers.ts
interface AppState {
    // Define the types for your initial state properties
    // Example:
    count: number;
  }
  
  const initialState: AppState = {
    // Initial state of your store
    // Add your initial state properties here
    count: 0,
  };
  
  type AppAction = {
    type: 'INCREMENT'; // Add more action types as needed
  };
  
  const rootReducer = (state: AppState = initialState, action: AppAction): AppState => {
    switch (action.type) {
      // Add your action cases here
      // Example:
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      default:
        return state;
    }
  };
  
  export default rootReducer;