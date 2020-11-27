import { Modal as AModal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../store/modal/action'
import { RequestInviteState } from '../store/requestInvite/reducer'
import { IRootState } from '../store/store'
import InviteForm from './InviteForm'
import InviteSuccess from './InviteSuccess'

const Modal = () => {
  const { success } = useSelector<IRootState, RequestInviteState>((state) => {
    return state.requestInvite
  })
  const dispatch = useDispatch()

  return (
    <AModal
      centered
      visible={true}
      footer={null}
      onCancel={() => {
        dispatch(closeModal())
      }}
      closable={false}
    >
      {success ? <InviteSuccess /> : <InviteForm />}
    </AModal>
  )
}

export default Modal
