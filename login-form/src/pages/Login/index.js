import classNames from 'classnames/bind';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRef } from 'react';
import * as Yup from 'yup';
import { loginApi } from '~/services/authService';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

export default function Login() {
    const formikRef = useRef(null);

    const handleSubmit = async () => {
        const data = formikRef.current.values;
        const res = await loginApi(data);
        console.log('res:', res);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-container')}>
                <h3 className={cx('heading')}>WELCOME</h3>
                <Formik
                    innerRef={formikRef}
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Khong phai la email!').required('Ham nay la bat buoc'),
                        password: Yup.string().min(6, 'Can nhap toi thieu 6 ki tu').required('Khong duoc bo trong'),
                    })}
                    onSubmit={handleSubmit}
                >
                    <Form className={cx('form-container')}>
                        <div className={cx('form-group')}>
                            {/* <Field
                                className={cx('form-group-input')}
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Email"
                            /> */}
                            <Field
                                className={cx('form-group-input')}
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Email"
                            />
                            <span className={cx('err-message')}>
                                <ErrorMessage name="email" />
                            </span>
                        </div>
                        <div className={cx('form-group')}>
                            <Field
                                className={cx('form-group-input')}
                                id="password"
                                name="password"
                                type="text"
                                placeholder="Password"
                            />
                            <span className={cx('err-message')}>
                                <ErrorMessage name="password" />
                            </span>
                        </div>

                        <div className={cx('login-btn')}>
                            <button type="submit">Login</button>
                        </div>
                        <div className={cx('social-btn')}>
                            <div className={cx('login-btn social-btn-item')}>
                                <button className={cx('facebook-btn')} type="submit">
                                    Facebook
                                </button>
                            </div>
                            <div className={cx('login-btn social-btn-item')}>
                                <button className={cx('google-btn')} type="submit">
                                    Google
                                </button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
