import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RegisterHook from '../../hook/auth/register-hook';
import { ToastContainer } from 'react-toastify';
import reg from '../../images/Sign-up.svg';

const RegisterPage = () => {
  const [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
  ] = RegisterHook();

  return (
    <div className="d-lg-flex justify-content-evenly align-items-center">
      <div>
        <Container>
          <Row className=" d-flex justify-content-center">
            <Col sm="12" className="d-flex flex-column ">
              <label className="mx-auto title-login">تسجيل حساب جديد</label>
              <input
                value={name}
                onChange={onChangeName}
                placeholder="اسم المستخدم..."
                type="text"
                className="user-input mt-3 text-center mx-auto"
              />
              <input
                value={email}
                onChange={onChangeEmail}
                placeholder="الايميل..."
                type="email"
                className="user-input my-3 text-center mx-auto"
              />
              <input
                value={phone}
                onChange={onChangePhone}
                placeholder="الهاتف..."
                type="phone"
                className="user-input  text-center mx-auto"
              />
              <input
                value={password}
                onChange={onChangePassword}
                placeholder="كلمه السر..."
                type="password"
                className="user-input text-center mt-3 mx-auto"
              />
              <input
                value={confirmPassword}
                onChange={onChangeConfirmPassword}
                placeholder="تاكيد كلمه السر..."
                type="password"
                className="user-input text-center mt-3 mx-auto"
              />
              <button onClick={OnSubmit} className="btn-login mx-auto mt-4">
                تسجيل الحساب
              </button>
              <label className="mx-auto my-4">
                لديك حساب بالفعل؟{' '}
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <span style={{ cursor: 'pointer' }} className="text-danger">
                    اضغط هنا
                  </span>
                </Link>
              </label>
            </Col>
          </Row>
          <ToastContainer />
        </Container>
      </div>
      <div className="d-none d-lg-block ml-5">
        <img src={reg} alt="" style={{ width: '500px', height: '500px' }} />
      </div>
    </div>
  );
};

export default RegisterPage;
