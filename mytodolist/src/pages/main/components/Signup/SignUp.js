import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
const SignUp = () => {
    return (
        <SignUpContent>
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
    );
};

export default SignUp;
const SignUpContent = styled.div``;
const FormContent = styled(Form)`
    width: 440px;
    border-radius: 4px;
    border: solid 2px gray;
    padding: 30px;
`;
