import React, { useState } from 'react';
import validator from 'validator';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import EmailInput from './EmailInput';

import ArrowImg from '../../static/img/logo_arrow.png';
import GoogleImg from '../../static/img/Google.png';
import FacebookImg from '../../static/img/Fb.png';
import TwitterImg from '../../static/img/Twitter.png';
import {
  Container,
  LoginContainer,
  Logo,
  LogoArrowImg,
  LoginForm,
  LoginFirst,
  TitleContent,
  LoginTitle,
  InputContainer,
  InputField,
  InPutIconStyle,
  BtnContainer,
  LoginBtn,
  UnderlineContainer,
  Underline,
  UnderText,
  BottomForm,
  BottomItem,
  BottomImg,
} from './styles';
interface LoginState {
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}
interface LoginError {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [loginValues, setLoginValues] = useState<LoginState>({
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const [errors, setErrors] = useState<LoginError>({
    email: '',
    password: '',
  });

  const handleChange = (prop: keyof LoginState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let error: string = '';
    if (event.target.id === 'email') {
      if (validator.isEmpty(event.target.value)) {
        error = 'Email is required';
      } else if (!validator.isEmail(event.target.value)) {
        error = 'Email is invalid';
      }
      setErrors({
        ...errors,
        email: error,
      });
    }
    if (event.target.id === 'password') {
      if (validator.isEmpty(event.target.value)) {
        error = 'Password is required';
      } else if (!validator.isLength(event.target.value, { min: 8, max: 15 })) {
        error = 'Password must be between 8 and 15 characters';
      }
      setErrors({
        ...errors,
        password: error,
      });
    }
    setLoginValues({ ...loginValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setLoginValues({ ...loginValues, showPassword: !loginValues.showPassword });
  };

  const handleClickConfirmShowPassword = () => {
    setLoginValues({
      ...loginValues,
      showConfirmPassword: !loginValues.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container>
      <LoginContainer>
        <Logo>
          Luckabo
          <LogoArrowImg src={ArrowImg} /> x
        </Logo>
        <LoginForm>
          <LoginFirst>JUST LOGIN FIRST</LoginFirst>
          <TitleContent>
            <LoginTitle>Sign in to Luckabox</LoginTitle>
            <LoginTitle>Customer</LoginTitle>
          </TitleContent>
          <InputContainer>
            <EmailInput
              value={loginValues.email}
              onChange={handleChange('email')}
              error={errors.email}
            />
          </InputContainer>
          <InputContainer>
            <InputField
              required
              id="password"
              placeholder="Password"
              type={loginValues.showPassword ? 'text' : 'password'}
              value={loginValues.password}
              onChange={handleChange('password')}
              InputProps={{
                startAdornment: (
                  <InPutIconStyle position="start">
                    <LockOutlinedIcon />
                  </InPutIconStyle>
                ),
                endAdornment: (
                  <InPutIconStyle position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {loginValues.showPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InPutIconStyle>
                ),
              }}
            />
          </InputContainer>
          <InputContainer>
            <InputField
              required
              id="confirmPassword"
              placeholder="Confirm Password"
              type={loginValues.showConfirmPassword ? 'text' : 'password'}
              value={loginValues.confirmPassword}
              onChange={handleChange('confirmPassword')}
              InputProps={{
                startAdornment: (
                  <InPutIconStyle position="start">
                    <LockOutlinedIcon />
                  </InPutIconStyle>
                ),
                endAdornment: (
                  <InPutIconStyle position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickConfirmShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {loginValues.showConfirmPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InPutIconStyle>
                ),
              }}
            />
          </InputContainer>
          <BtnContainer>
            <LoginBtn variant="contained" color="primary">
              Login
            </LoginBtn>
          </BtnContainer>
          <UnderlineContainer>
            <Underline />
            <UnderText>OR</UnderText>
            <Underline />
          </UnderlineContainer>
          <BottomForm>
            <Grid container spacing={3}>
              <Grid item xs>
                <BottomItem>
                  <BottomImg src={GoogleImg}></BottomImg>
                </BottomItem>
              </Grid>
              <Grid item xs>
                <BottomItem>
                  <BottomImg src={FacebookImg}></BottomImg>
                </BottomItem>
              </Grid>
              <Grid item xs>
                <BottomItem>
                  <BottomImg src={TwitterImg}></BottomImg>
                </BottomItem>
              </Grid>
            </Grid>
          </BottomForm>
        </LoginForm>
      </LoginContainer>
    </Container>
  );
};
export default Login;
