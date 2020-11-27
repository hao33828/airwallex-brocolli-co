import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { closeModal } from '../store/modal/action'

export const InviteSuccess = () => {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(closeModal())
  }

  return (
    <div>
      <div className="title">All done!</div>
      <div className="titleSeperator">
        <hr />
      </div>
      <div className="successMessage">
        You will be one of the first to experience Brocolli &amp; Co. when we
        launch.
      </div>
      <Button block type="primary" onClick={onClick}>
        OK
      </Button>
      <style jsx>{`
        .title {
          text-align: center;
          font-size: 24px;
          cursor: default;
        }
        .titleSeperator {
          width: 100px;
          margin: 20px auto;
          cursor: default;
        }
        .successMessage {
          cursor: default;
          margin: 50px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default InviteSuccess
