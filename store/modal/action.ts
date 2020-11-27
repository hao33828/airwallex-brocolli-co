import { MODAL_ACTION_TYPES } from '../../constants'

export const openModal = () => ({ type: MODAL_ACTION_TYPES.OPEN })

export const closeModal = () => ({ type: MODAL_ACTION_TYPES.CLOSE })
