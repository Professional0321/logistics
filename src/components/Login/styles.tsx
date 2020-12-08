import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 20px);
  padding: 10px;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-weight: bold;
  font-style: normal;
  font-size: 46px;
  line-height: 70px;
  letter-spacing: 0.01em;
  color: #ffffff;
`;

export const LogoArrowImg = styled.img`
  align-items: center;
  height: 25px;
  width: 15px;
  margin-top: 8px;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 3px -5px 40px rgba(205, 205, 212, 0.1);
  border-radius: 20px;
  margin-top: 20px;
  padding: 25px;
`;

export const FormHeader = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 1px;
  color: #b5b5be;
  margin-top: 25px;
  margin-bottom: 15px;
`;

export const FormLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const LoginTitle = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #2a2d52;
`;

export const FormField = styled.div`
  margin-top: 15px;
  margin-bottom: 25px;
`;

export const InputField = styled(TextField)`
  display: flex;
  width: 100%;
  & .MuiInput-underline:after {
    border-bottom: 2px solid #00b796;
  }
  & .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid #00b796;
  }
`;

interface InputErrProps {
  readonly isValid: boolean;
}

export const EmailContainer = styled.div<InputErrProps>`
  & .MuiTextField-root {
    display: flex;
    width: 100%;
  }
  & .MuiInput-underline:after {
    border-bottom: 2px solid ${({ isValid }) => (isValid ? '#00b796' : 'red')};
  }
  & .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid ${({ isValid }) => (isValid ? '#00b796' : 'red')};
  }
  & .MuiInput-underline:before {
    border-bottom: 1px solid ${({ isValid }) => (isValid ? '#92929d' : 'red')};
  }
  & .MuiTypography-colorTextSecondary {
    color: ${({ isValid }) => !isValid && 'red'};
  }
`;

export const LoginBtn = styled(Button)`
  width: 100%;
  &.MuiButton-containedPrimary:hover {
    background-color: #00b796;
  }
`;

export const SeperatWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

export const SpearateLine = styled.div`
  border-bottom: 1px solid #f1f1f5;
  width: 50%;
`;

export const Text = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1px;
  color: #92929d;
  margin: 0 10px;
`;

export const SocialButtonWrapper = styled(Grid)`
  padding: 15px 0px;
`;

export const SocialButton = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  text-align: center;
  background: #ffffff;
  border: 1px solid #f1f1f5;
  box-sizing: border-box;
  border-radius: 10px;
  @media (max-width: 760px) {
    padding: 5px;
  }
`;

export const SocialImg = styled.img`
  width: 16px;
  height: 16px;
`;
