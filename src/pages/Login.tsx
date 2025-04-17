import styled from "styled-components";
import { COLORS } from "../consts/colors";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${COLORS.BACKGROUND};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background: ${COLORS.BUTTON_TEXT};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: ${COLORS.PARAGRAPH};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: ${COLORS.BUTTON_TEXT};
  background-color: ${COLORS.BUTTON};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.HEADLINE};
  }
`;

const Login = () => {
  return (
    <LoginContainer>
      <h1>ログイン</h1>
      <Form>
        <FormGroup>
          <Label htmlFor="email">メールアドレス</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">パスワード</Label>
          <Input type="password" id="password" name="password" required />
        </FormGroup>
        <Button type="submit">ログイン</Button>
      </Form>
    </LoginContainer>
  );
};

export default Login;
