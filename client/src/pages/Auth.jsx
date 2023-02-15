import React, {useContext, useState} from 'react';
import {Button, Form, FormControl, Row} from "react-bootstrap";
import {useLocation, useNavigate} from 'react-router-dom';
import {login, registration} from "../http/userAPI";
import {Context} from "../index";

const Auth = () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === '/login'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            if (isLogin) {
                await login(email, password);
            } else {
                await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate('/')
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <div>
            <div className="log__in__section">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">{isLogin ? 'Log In' : 'Sign Up'}</h2>
                    </div>
                    <div className="log__in">
                        <Form className='d-flex flex-column'>
                            <FormControl
                                className='mt-3'
                                placeholder="Enter your email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Form.Control
                                className='mt-3'
                                placeholder="Enter your password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                            />
                            <Row className='d-flex justify-content-between pl-3 pr-3'>
                                <Button
                                    className='mt-5'
                                    variant={"outline-light"}
                                    onClick={click}
                                >
                                    {isLogin ? 'Log In' : 'Sign Up'}
                                </Button>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
