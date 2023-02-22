export function sessionReducer(state: any, action: any) {
  switch (action.type) {
    //Example
    case "field": {
      return {
        ...state,
        [action.field]: action.value,
      }
    }

    default:
      break
  }
  return state
}
