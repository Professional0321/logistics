import React, { useState } from 'react';
import validator from 'validator';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';

import EmailField from './EmailField';
import ArrowImg from '../../assets/img/logo_arrow.png';
import GoogleImg from '../../assets/img/Google.png';
import FacebookImg from '../../assets/img/Fb.png';
import TwitterImg from '../../assets/img/Twitter.png';
import * as Styles from './styles';

interface ILoginState {
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}
interface ILoginError {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [loginValues, setLoginValues] = useState<ILoginState>({
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const [errors, setErrors] = useState<ILoginError>({
    email: '',
    password: '',
  });

  const handleChange = (prop: keyof ILoginState) => (
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
    <Styles.Container>
      <Styles.LoginContainer>
        <Styles.Logo>
          Luckabo
          <Styles.LogoArrowImg src={ArrowImg} /> x
        </Styles.Logo>
        <Styles.LoginForm>
          <Styles.FormHeader>JUST LOGIN FIRST</Styles.FormHeader>
          <Styles.FormLabel>
            <Styles.LoginTitle>Sign in to Luckabox</Styles.LoginTitle>
            <Styles.LoginTitle>Customer</Styles.LoginTitle>
          </Styles.FormLabel>
          <Styles.FormField>
            <EmailField
              value={loginValues.email}
              onChange={handleChange('email')}
              error={errors.email}
            />
          </Styles.FormField>
          <Styles.FormField>
            <Styles.InputField
              required
              id="password"
              placeholder="Password"
              type={loginValues.showPassword ? 'text' : 'password'}
              value={loginValues.password}
              onChange={handleChange('password')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon fontSize="small" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {loginValues.showPassword ? (
                        <VisibilityOutlinedIcon fontSize="small" />
                      ) : (
                        <VisibilityOffOutlinedIcon fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Styles.FormField>
          <Styles.FormField>
            <Styles.InputField
              required
              id="confirmPassword"
              placeholder="Confirm Password"
              type={loginValues.showConfirmPassword ? 'text' : 'password'}
              value={loginValues.confirmPassword}
              onChange={handleChange('confirmPassword')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon fontSize="small" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickConfirmShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {loginValues.showConfirmPassword ? (
                        <VisibilityOutlinedIcon fontSize="small" />
                      ) : (
                        <VisibilityOffOutlinedIcon fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Styles.FormField>
          <Styles.LoginBtn variant="contained" color="primary">
            Login
          </Styles.LoginBtn>
          <Styles.SeperatWrapper>
            <Styles.SpearateLine />
            <Styles.Text>OR</Styles.Text>
            <Styles.SpearateLine />
          </Styles.SeperatWrapper>
          <Styles.SocialButtonWrapper container spacing={1}>
            <Grid item xs>
              <Styles.SocialButton>
                <Styles.SocialImg src={GoogleImg}></Styles.SocialImg>
              </Styles.SocialButton>
            </Grid>
            <Grid item xs>
              <Styles.SocialButton>
                <Styles.SocialImg src={FacebookImg}></Styles.SocialImg>
              </Styles.SocialButton>
            </Grid>
            <Grid item xs>
              <Styles.SocialButton>
                <Styles.SocialImg src={TwitterImg}></Styles.SocialImg>
              </Styles.SocialButton>
            </Grid>
          </Styles.SocialButtonWrapper>
        </Styles.LoginForm>
      </Styles.LoginContainer>
    </Styles.Container>
  );
};
export default Login;
