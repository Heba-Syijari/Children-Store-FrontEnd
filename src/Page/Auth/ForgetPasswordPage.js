import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginHook from '../../hook/auth/login-hook';
import { ToastContainer } from 'react-toastify';
import ForgetPasswordHook from '../../hook/auth/forget-password-hook';
import forget from '../../images/Forgot password-bro.svg';

const ForgetPasswordPage = () => {
  const [OnChangeEmail, email, onSubmit] = ForgetPasswordHook();
  return (
    <div className="d-lg-flex justify-content-evenly align-items-center">
      <div>
        <Container>
          <Row className=" d-flex justify-content-center ">
            <Col sm="12" className="d-flex flex-column ">
              <label className="mx-auto title-login">نسيت كلمة السر</label>
              <input
                value={email}
                onChange={OnChangeEmail}
                placeholder="ادخل الايميل..."
                type="email"
                className="user-input my-3 text-center mx-auto"
              />

              <button onClick={onSubmit} className="btn-login mx-auto mt-2">
                ارسال الكود
              </button>
            </Col>
          </Row>
          <ToastContainer />
        </Container>
      </div>
      <div className="d-none d-lg-block ml-5">
        <img src={forget} alt="" style={{ width: '500px', height: '500px' }} />
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
