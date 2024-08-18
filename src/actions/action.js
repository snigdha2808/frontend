// Action creators
export const addCategory = (category) => {
    return {
      type: 'ADD_CATEGORY',
      payload: category
    };
  };
  
  export const removeCategory = (categoryId) => {
    return {
      type: 'REMOVE_CATEGORY',
      payload: categoryId
    };
  };
  export const addWidget = (category) => {
    return {
      type: 'ADD_WIDGET',
      payload: category
    };
  };
  
  export const removeWidget = (category) => {
    return {
      type: 'REMOVE_WIDGET',
      payload: category
    };
  };