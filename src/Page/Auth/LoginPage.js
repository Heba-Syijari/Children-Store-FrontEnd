import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginHook from './../../hook/auth/login-hook';
import { ToastContainer } from 'react-toastify';
import login from '../../images/Login.svg';

const LoginPage = () => {
  const [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    isPress,
  ] = LoginHook();
  return (
    <div className="d-lg-flex justify-content-evenly align-items-center">
      <div>
        <Container>
          <Row className=" d-flex justify-content-center ">
            <Col sm="12" className="d-flex flex-column ">
              <label className="mx-auto title-login">تسجيل الدخول</label>
              <input
                value={email}
                onChange={onChangeEmail}
                placeholder="الايميل..."
                type="email"
                className="user-input my-3 text-center mx-auto"
              />
              <input
                value={password}
                onChange={onChangePassword}
                placeholder="كلمه السر..."
                type="password"
                className="user-input text-center mx-auto"
              />
              <button onClick={onSubmit} className="btn-login mx-auto mt-4">
                تسجيل الدخول
              </button>
              <label className="mx-auto my-4">
                ليس لديك حساب ؟{' '}
                <Link to="/register" style={{ textDecoration: 'none' }}>
                  <span style={{ cursor: 'pointer' }} className="text-danger">
                    اضغط هنا
                  </span>
                </Link>
              </label>

              <label className="mx-auto my-4">
                <Link
                  to="/user/forget-password"
                  style={{ textDecoration: 'none', color: 'red' }}
                >
                  هل نسيت كلمةالسر
                </Link>
              </label>

              {isPress === true ? (
                loading === true ? (
                  <Spinner animation="border" role="status"></Spinner>
                ) : null
              ) : null}
            </Col>
          </Row>
          <ToastContainer />
        </Container>
      </div>
      <div className="d-none d-lg-block ml-5">
        <img src={login} alt="" style={{ width: '500px', height: '500px' }} />
      </div>
    </div>
  );
};

export default LoginPage;
