import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { EmailContainer } from './styles';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const EmailField: React.FC<InputProps> = (props) => {
  const { value, onChange, error } = props;
  return (
    <EmailContainer isValid={!error}>
      <TextField
        required
        id="email"
        placeholder="Email"
        type="email"
        value={value}
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon fontSize="small" />
            </InputAdornment>
          ),
          endAdornment: <InputAdornment position="end">{error}</InputAdornment>,
        }}
      />
    </EmailContainer>
  );
};

export default EmailField;
