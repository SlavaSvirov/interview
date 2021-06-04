import initState from "../initState"
import { AUTH, LOG_OUT } from "../types/types"

function userReducer(state = initState.user, action) {
  switch (action.type) {
    case AUTH:
      return action.payload

    case LOG_OUT:
      return action.payload

    default:
      return state
  }
}

export default userReducer
