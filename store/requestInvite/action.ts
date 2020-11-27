import { REQUEST_INVITE_ACTION_TYPES } from '../../constants'

export const requestInvite = (data) => ({
  type: REQUEST_INVITE_ACTION_TYPES.REQUEST,
  data,
})

export const requestFail = (error) => ({
  type: REQUEST_INVITE_ACTION_TYPES.FAIL,
  error,
})

export const requestSuccess = () => ({
  type: REQUEST_INVITE_ACTION_TYPES.SUCCESS,
})

export const requestReset = () => ({
  type: REQUEST_INVITE_ACTION_TYPES.RESET,
})
