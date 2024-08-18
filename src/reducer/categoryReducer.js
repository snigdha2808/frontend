const initialState = {
  categories: [
    {
      "categoryName": "CSPM Executive Dashboard",
      "widgets": [
        ]
    },
    {
      "categoryName": "CWPP Dashboard Dashboard",
      "widgets": [
       ]
    },
    {
      "categoryName": "Registry Scan",
      "widgets": [
        
      ]
    },
    {
      "categoryName": "my name is snigdha",
      "widgets": [
       
        
      ]
    }
  ]
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };

    case 'REMOVE_CATEGORY':
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.payload)
      };

    case 'ADD_WIDGET':
      console.log("here");
      return {
        ...state,
        categories: state.categories.map(category => 
          category.categoryName === action.payload.categoryName 
            ? { ...category, widgets: [...category.widgets, ...action.payload.widgets] }
            : category
        )
      };

    case 'REMOVE_WIDGET':
      console.log(state.categories,action.payload);
      return {
        ...state,
        categories: state.categories.map(category =>
          category.categoryName === action.payload.categoryName
            ? { 
                ...category, 
                // widgets: category.widgets.filter(widget => widget.widgetName !== action.payload.widgets.widgetName) 
                widgets: category.widgets.filter(widget => {
                  console.log(widget.widgetName,action.payload.widgets[0].widgetName)
                  return widget.widgetName !== action.payload.widgets[0].widgetName}) 

              }
            : category
        )
      };

    default:
      return state;
  }
};

export default categoryReducer;
