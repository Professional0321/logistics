import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { InPutIconStyle, EmailInputFieldWrapper } from './styles';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const EmailInput: React.FC<InputProps> = (props) => {
  const { value, onChange, error } = props;
  return (
    <EmailInputFieldWrapper isValid={!error}>
      <TextField
        required
        id="email"
        placeholder="Email"
        type="email"
        value={value}
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InPutIconStyle position="start">
              <MailOutlineIcon />
            </InPutIconStyle>
          ),
          endAdornment: <InputAdornment position="end">{error}</InputAdornment>,
        }}
      />
    </EmailInputFieldWrapper>
  );
};

export default EmailInput;
