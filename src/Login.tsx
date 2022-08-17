import { Box, Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SendIcon from '@mui/icons-material/Send';

import { Component } from "react";

interface IProps {}

interface IState {
  login: string;
  password: string;
  showPassword: boolean;
}

class Login extends Component<IProps,  IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            login: "",
            password: "",
            showPassword: false,
        };
    }

    handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword})
    };

    /*
        Valid login:
            - can consist only of: small english letters, numbers, dot, dash, and ONE @
            - part before @ must have at least 5 chars
            - part after @ whatever from allowed chars
     */
    isLoginValid(login : string) {
        const regex = new RegExp('^[a-z0-9.-]{5,}@[a-z-.0-9]*$')
        return regex.test(login)
    }

    /*
        Valid password:
            - length must be at least 5 chars
     */
    isPasswordValid(password : string) {
        return password.length > 5
    }

    getError(value: string, type: string) {
        if(!(type === 'login' ? this.isLoginValid(value) : this.isPasswordValid(value)) && value.length !== 0) return "Incorrect " + type + ". Please read instructions."
        else return ""
    }

    getColor(value: string, type: string) {
        if(value.length === 0) {
            return undefined
        }
        else return (type === 'login' ? this.isLoginValid(value) : this.isPasswordValid(value)) ? "success" : "error"
    }

    isDataValid(login: string, password: string) {
        return Boolean(this.isLoginValid(login) && this.isPasswordValid(password))
    }

    sendData() {
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({login: this.state.login, password: this.state.password}),
            })
            .then((response) => {
                // faking a happy response
                alert(this.isDataValid(this.state.login, this.state.password) ? "Success! Congratulations" : "Mission Failed! We'll Get Em Next Time");
            })
            .catch((error) => {
                console.error('Error:', error);
        });
    }

    render() {
        return (<div className="login">
            <Box
                component="form"
                id="form"
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        size="small"
                        fullWidth 
                        id="login"
                        label="Login"
                        margin="dense"
                        value={this.state.login}
                        color={this.getColor(this.state.login, 'login')}
                        error={this.getError(this.state.login, "login") !== ""}
                        onChange={(e) => this.setState({login : e.target.value})}
                        helperText={this.getError(this.state.login, "login")}
                    />
                </div>
                <div>
                    <FormControl variant="outlined"
                                 margin="dense"
                                 size="small"
                                 error={this.getError(this.state.password, "password") !== ""}
                                 color={this.getColor(this.state.password, 'password')}
                                 fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={(e) => this.setState({password : e.target.value})}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                    edge="end"
                                >
                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                        {this.getError(this.state.password, "password") !== "" && <FormHelperText error id="component-helper-text">
                            {this.getError(this.state.password, "password")}
                        </FormHelperText>}
                    </FormControl>
                </div>
                <div className='button'>
                    <Button 
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={(e) => this.sendData()}
                        disabled={!this.isDataValid(this.state.login, this.state.password)}
                    >
                        Send
                    </Button>
                </div>
            </Box>
        </div>
    )
    }
}

export default Login
