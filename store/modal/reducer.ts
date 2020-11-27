import { MODAL_ACTION_TYPES } from '../../constants'

export interface ModalState {
  visible: boolean
}

const modalInitialState: ModalState = {
  visible: false,
}

export default function reducer(state = modalInitialState, action) {
  switch (action.type) {
    case MODAL_ACTION_TYPES.OPEN:
      return {
        ...state,
        visible: true,
      }
    case MODAL_ACTION_TYPES.CLOSE:
      return {
        ...state,
        visible: false,
      }
    default:
      return state
  }
}
