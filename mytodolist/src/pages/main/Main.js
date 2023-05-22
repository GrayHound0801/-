import SignIn from './components/SignIn/SignIn';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Main = () => {
    const [isSigUpBtn, setIsSigUpBtn] = useState(false);
    const [isSignInBtn, setIsSignInBtn] = useState(false);

    const onClickSignUpBtn = () => {
        setIsSigUpBtn(true);
        setIsSignInBtn(false);
    };

    const onClickSignInBtn = () => {
        setIsSignInBtn(true);
        setIsSigUpBtn(false);
    };

    useEffect(() => {
        setIsSignInBtn(true);
    }, []);

    return (
        <AllInput>
            <Btnconteiner>
                <SignUpBtn togle={isSigUpBtn} onClick={onClickSignUpBtn}>
                    회원가입
                </SignUpBtn>
                <SignInBtn togle={isSignInBtn} onClick={onClickSignInBtn}>
                    로그인
                </SignInBtn>
            </Btnconteiner>

            {isSigUpBtn ? (
                <SignUpContent>
                    {
                        <FormContent>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type='email' placeholder='Enter email' />
                                <Form.Text className='text-muted'>
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Password' />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <Form.Label>Password Confirm</Form.Label>
                                <Form.Control type='password' placeholder='Password Confirm' />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                                <Form.Check type='checkbox' label='Check me out' />
                            </Form.Group>
                            <Button variant='primary' type='submit'>
                                Submit
                            </Button>
                        </FormContent>
                    }
                </SignUpContent>
            ) : (
                <SignInContent>
                    {
                        <FormContent>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type='email' placeholder='Enter email' />
                                <Form.Text className='text-muted'>
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Password' />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                                <Form.Check type='checkbox' label='Check me out' />
                            </Form.Group>
                            <Button variant='primary' type='submit'>
                                Submit
                            </Button>
                        </FormContent>
                    }
                    <SignIn />
                </SignInContent>
            )}
        </AllInput>
    );
};

export default Main;

const FormContent = styled(Form)`
    width: 440px;
    border-radius: 4px;
    border: solid 2px gray;
    padding: 30px;
`;

const AllInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
`;
const Btnconteiner = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    height: 60px;
    margin-bottom: 0px;
`;
const SignInBtn = styled.button`
    background-color: ${props => (props.togle ? '#4169E1' : '#6495ED')};
    width: 220px;
    border-radius: 0px 4px 4px 0px;
    border: solid 1px #dcdcdc;
`;
const SignUpBtn = styled.button`
    background-color: ${props => (props.togle ? '#4169E1' : '#6495ED')};
    border-radius: 4px 0px 0px 4px;
    width: 220px;
    border: solid 1px #dcdcdc;
`;

const SignInContent = styled.div``;

const SignUpContent = styled.div``;
