import { Form, Button, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { DEFAULT_ERROR_MSG } from '../constants'
import { requestInvite } from '../store/requestInvite/action'
import { RequestInviteState } from '../store/requestInvite/reducer'
import { IRootState } from '../store/store'

const validateMessages = {
  required: 'Please enter ${name}',
  min: '${name} must have at least 3 characters',
  types: {
    email: '${name} is not in valid format',
  },
}

export const InviteForm = () => {
  const { sending, error } = useSelector<IRootState, RequestInviteState>(
    (state) => {
      return state.requestInvite
    }
  )
  const dispatch = useDispatch()

  const onFinish = async (values) => {
    const { fullname: name, email } = values
    dispatch(requestInvite({ name, email }))
  }

  return (
    <div>
      <div className="title">Request an invite</div>
      <div className="titleSeperator">
        <hr />
      </div>
      <Form onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name="fullname" rules={[{ required: true, min: 3 }]}>
          <Input placeholder="Full name" />
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true, type: 'email' }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="confirmEmail"
          dependencies={['email']}
          rules={[
            {
              required: true,
              message: 'Please confirm your email',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('email') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(
                  'The two emails that you entered do not match!'
                )
              },
            }),
          ]}
        >
          <Input placeholder="Confirm Email" />
        </Form.Item>
        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            className="send-button"
            loading={sending}
          >
            {sending ? 'Sending, please wait...' : 'Send'}
          </Button>
          {error ? (
            <div className="fail">{error.message || DEFAULT_ERROR_MSG}</div>
          ) : null}
        </Form.Item>
      </Form>
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
        .fail {
          cursor: default;
          color: red;
          margin: 10px auto;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default InviteForm
