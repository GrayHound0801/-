import SignUp from './components/Signup/SignUp';
import SignIn from './components/SignIn/SignIn';
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

            {isSigUpBtn ? <SignUp /> : <SignIn />}
        </AllInput>
    );
};

export default Main;

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
