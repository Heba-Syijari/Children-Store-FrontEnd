import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginHook from '../../hook/auth/login-hook';
import { ToastContainer } from 'react-toastify';
import ResetPasswordHook from '../../hook/auth/reset-password-hook';
import res from '../../images/Reset password.svg';

const RsetPasswordPage = () => {
  const [
    password,
    confirmPassword,
    ,
    OnChangePassword,
    OnChangeConfirmPassword,
    onSubmit,
  ] = ResetPasswordHook();

  return (
    <div className="d-lg-flex justify-content-evenly align-items-center">
      <div>
        <Container>
          <Row className=" d-flex justify-content-center ">
            <Col sm="12" className="d-flex flex-column ">
              <label className="mx-auto title-login">
                ادخل كلمة السر الجديده
              </label>
              <input
                value={password}
                onChange={OnChangePassword}
                placeholder="ادخل كلمه السر الجديدة"
                type="password"
                className="user-input my-3 text-center mx-auto"
              />
              <input
                value={confirmPassword}
                onChange={OnChangeConfirmPassword}
                placeholder="تاكيد كلمه السر الجديدة"
                type="password"
                className="user-input my-3 text-center mx-auto"
              />

              <button onClick={onSubmit} className="btn-login mx-auto mt-2">
                حفظ
              </button>
            </Col>
          </Row>
          <ToastContainer />
        </Container>
      </div>
      <div className="d-none d-lg-block ml-5">
        <img src={res} alt="" style={{ width: '500px', height: '500px' }} />
      </div>
    </div>
  );
};

export default RsetPasswordPage;
