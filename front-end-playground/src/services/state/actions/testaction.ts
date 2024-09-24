// actions.ts
type AppAction = {
    type: 'INCREMENT'; // Add more action types as needed
  };
  
  export const increment = (): AppAction => ({
    type: 'INCREMENT',
  });
  
  // Add more action creators as needed