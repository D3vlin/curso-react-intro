import React from "react";

const initialState = ({ initialValue }) => ({
  sincronizedItems: true,
  item: initialValue,
  loading: true,
  error: false
})

const actionTypes = {
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
  error: 'ERROR'
}

const reducerObject = (state, payload) => ({
  [actionTypes.success]: {
    ...state,
    sincronizedItems: true,
    item: payload,
    loading: false,
    error: false
  },

  [actionTypes.save]: {
    ...state,
    item: payload
  },

  [actionTypes.sincronize]: {
    ...state,
    sincronizedItems: false,
    loading: true,
  },

  [actionTypes.error]: {
    ...state,
    error: true,
  }
})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state
}

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }))

  const {
    sincronizedItems,
    item,
    loading,
    error
  } = state

  const onSuccess = (parsedItems) => dispatch({ type: actionTypes.success, payload: parsedItems })

  const onSave = (newItem) => dispatch({ type: actionTypes.save, payload: newItem })

  const onSincronize = () => dispatch({ type: actionTypes.sincronize })

  const onError = (error) => dispatch({ type: actionTypes.error, payload: error })

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItems)
      } catch (error) {
        onError(error)
      }
    }, 2000);
  }, [sincronizedItems]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      onSave(newItem)
    } catch (error) {
      onError(error)
    }
  };

  const sincronizeItem = () => {
    onSincronize()
  }

  return {
    sincronizeItem,
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage };
