import { REQUEST_INVITE_ACTION_TYPES } from '../../constants'

export interface RequestInviteState {
  data: any
  error: Error | null
  sending: boolean
  success: boolean
}

const requestInviteInitialState: RequestInviteState = {
  data: null,
  error: null,
  sending: false,
  success: false,
}

export default function reducer(state = requestInviteInitialState, action) {
  switch (action.type) {
    case REQUEST_INVITE_ACTION_TYPES.REQUEST:
      return {
        ...state,
        error: null,
        data: action.data,
        sending: true,
        success: false,
      }
    case REQUEST_INVITE_ACTION_TYPES.SUCCESS:
      return {
        ...state,
        error: null,
        sending: false,
        data: null,
        success: true,
      }
    case REQUEST_INVITE_ACTION_TYPES.FAIL:
      return {
        ...state,
        error: action.error,
        sending: false,
        data: null,
        success: false,
      }
    case REQUEST_INVITE_ACTION_TYPES.RESET:
      return {
        ...state,
        error: null,
        sending: false,
        data: null,
        success: false,
      }
    default:
      return state
  }
}
