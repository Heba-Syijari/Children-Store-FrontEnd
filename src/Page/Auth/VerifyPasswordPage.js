import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginHook from '../../hook/auth/login-hook';
import { ToastContainer } from 'react-toastify';
import VerifyPasswordHook from '../../hook/auth/verify-password-hook';
import verify from '../../images/Reset password-va.svg';

const VerifyPasswordPage = () => {
  const [code, OnChangeCode, onSubmit] = VerifyPasswordHook();

  return (
    <div className="d-lg-flex justify-content-evenly align-items-center">
      <div>
        <Container>
          <Row className=" d-flex justify-content-center ">
            <Col sm="12" className="d-flex flex-column ">
              <label className="mx-auto title-login">
                ادخل الكود المرسل فى الايميل
              </label>
              <input
                value={code}
                onChange={OnChangeCode}
                placeholder="ادخل الكود..."
                type="email"
                className="user-input my-3 text-center mx-auto"
              />

              <button onClick={onSubmit} className="btn-login mx-auto mt-2">
                تاكيد
              </button>
            </Col>
          </Row>
          <ToastContainer />
        </Container>
      </div>
      <div className="d-none d-lg-block ml-5">
        <img src={verify} alt="" style={{ width: '500px', height: '500px' }} />
      </div>
    </div>
  );
};
export default VerifyPasswordPage;
