import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
const SignIn = () => {
    return (
        <SignInContent>
            {
                <FormContent>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' />
                        <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
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
        </SignInContent>
    );
};

export default SignIn;
const SignInContent = styled.div``;
const FormContent = styled(Form)`
    width: 440px;
    border-radius: 4px;
    border: solid 2px gray;
    padding: 30px;
`;
