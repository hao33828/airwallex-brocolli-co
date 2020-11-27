import { Button, Layout } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../components/Modal'
import { openModal } from '../store/modal/action'
import { ModalState } from '../store/modal/reducer'
import { IRootState } from '../store/store'

const { Header, Content, Footer } = Layout

export const Home = () => {
  const { visible } = useSelector<IRootState, ModalState>(
    (state) => state.modal
  )
  const dispatch = useDispatch()

  return (
    <Layout className="layout">
      <Header>
        <div className="logo">BROCCOLI &amp; CO.</div>
      </Header>
      <Content>
        <div className="main">
          <div className="content">
            <h1 className="title">A better way to enjoy every day</h1>
            <p className="description">Be the first to know when we launch.</p>
            <Button
              type="primary"
              shape="round"
              size="large"
              style={{ width: '200px' }}
              onClick={() => {
                dispatch(openModal())
              }}
            >
              Request an invite
            </Button>
          </div>
        </div>
      </Content>
      <Footer>
        <div className="footer">
          <div>Made with &hearts; in Melbourne.</div>
          <div>@ 2016 Broccoli &amp; co. All rights reserved.</div>
        </div>
      </Footer>
      {visible ? <Modal /> : null}

      <style jsx>{`
        .logo {
          color: #fff;
          height: 1em;
          cursor: default;
        }

        .main {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          bottom: 0;
          transform: translateY(-50%);
        }

        .content {
          align-items: center;
          margin-left: 150px;
          margin-right: 150px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }

        .footer {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          cursor: default;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 6rem;
          cursor: default;
        }

        .title,
        .description {
          text-align: center;
          text-shadow: -2px 1px 0 #a5f3ba73;
        }

        .description {
          color: #444;
          line-height: 1.5;
          font-size: 1.5rem;
          cursor: default;
        }

        @media (max-width: 667px) {
          .content {
            margin-left: 50px;
            margin-right: 50px;
          }

          .title {
            font-size: 2.4rem;
          }

          .description {
            font-size: 1rem;
          }
        }
      `}</style>
    </Layout>
  )
}

export default Home
