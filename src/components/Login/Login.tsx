import React, { useState } from 'react';
import validator from 'validator';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';

import EmailField from './EmailField';
import ArrowImg from '../../static/img/logo_arrow.png';
import GoogleImg from '../../static/img/Google.png';
import FacebookImg from '../../static/img/Fb.png';
import TwitterImg from '../../static/img/Twitter.png';
import * as loginStyles from './styles';

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
    <loginStyles.Container>
      <loginStyles.LoginContainer>
        <loginStyles.Logo>
          Luckabo
          <loginStyles.LogoArrowImg src={ArrowImg} /> x
        </loginStyles.Logo>
        <loginStyles.LoginForm>
          <loginStyles.FormHeader>JUST LOGIN FIRST</loginStyles.FormHeader>
          <loginStyles.FormLabel>
            <loginStyles.LoginTitle>Sign in to Luckabox</loginStyles.LoginTitle>
            <loginStyles.LoginTitle>Customer</loginStyles.LoginTitle>
          </loginStyles.FormLabel>
          <loginStyles.FormField>
            <EmailField
              value={loginValues.email}
              onChange={handleChange('email')}
              error={errors.email}
            />
          </loginStyles.FormField>
          <loginStyles.FormField>
            <loginStyles.InputField
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
          </loginStyles.FormField>
          <loginStyles.FormField>
            <loginStyles.InputField
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
          </loginStyles.FormField>
          <loginStyles.LoginBtn variant="contained" color="primary">
            Login
          </loginStyles.LoginBtn>
          <loginStyles.SeperatWrapper>
            <loginStyles.SpearateLine />
            <loginStyles.Text>OR</loginStyles.Text>
            <loginStyles.SpearateLine />
          </loginStyles.SeperatWrapper>
          <loginStyles.SocialButtonWrapper container spacing={1}>
            <Grid item xs>
              <loginStyles.SocialButton>
                <loginStyles.SocialImg src={GoogleImg}></loginStyles.SocialImg>
              </loginStyles.SocialButton>
            </Grid>
            <Grid item xs>
              <loginStyles.SocialButton>
                <loginStyles.SocialImg
                  src={FacebookImg}
                ></loginStyles.SocialImg>
              </loginStyles.SocialButton>
            </Grid>
            <Grid item xs>
              <loginStyles.SocialButton>
                <loginStyles.SocialImg src={TwitterImg}></loginStyles.SocialImg>
              </loginStyles.SocialButton>
            </Grid>
          </loginStyles.SocialButtonWrapper>
        </loginStyles.LoginForm>
      </loginStyles.LoginContainer>
    </loginStyles.Container>
  );
};
export default Login;
