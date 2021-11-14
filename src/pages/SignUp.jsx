import React, { useState } from 'react'
import { Typography, Grid, Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useHistory } from 'react-router';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import * as api from '../apis'
import MyInput from '../components/UI/Input/MyInput'
import MyButton from './../components/UI/Button/MyButton';
import { useFetching } from '../hooks/useFetching';

export default function SignUp() {
    const history = useHistory();
    const [sex, setSex] = useState('female');
    const [date, setDate] = useState(null);
    const [fetchToken] = useFetching(async () => {
        const token = await api.getToken();
        const redirectUrl = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${process.env.REACT_APP_REDIRECT_LINK}`;
        window.open(redirectUrl, '_blank', 'noopener noreferrer');
    })

    const handleChange = (event) => {
        setSex(event.target.value);
    };

    const schema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: yup.string()
            .required('Confirm Password is required')
            .oneOf([yup.ref('password')], 'Passwords must match'),
        userName: yup.string().required()
    }).required();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        fetchToken()
        history.push(`${process.env.REACT_APP_REDIRECT_LINK}/movies`)
        reset()
    };

    return (
        <>
            <Grid container
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Grid item xs={12} lg={6}>
                    <Typography variant='h4' component='h4' sx={{ textAlign: 'center', my: 4 }}>Sign Up</Typography>

                    <form
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            textAlign: 'left',
                            border: '1px solid #032541',
                            borderRadius: '14px',
                            padding: '20px',
                            margin: '20px 0px',
                        }}
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <MyInput
                            {...register("firstName")}
                            label="Enter first name"
                            error={!!errors.firstName}
                            helperText={errors?.firstName?.message}
                        />

                        <MyInput
                            {...register("lastName")}
                            label="Enter last name"
                            error={!!errors.lastName}
                            helperText={errors?.lastName?.message}
                        />

                        <LocalizationProvider dateAdapter={AdapterDateFns} >
                            <DatePicker
                                disableFuture
                                {...register("dateOfBirth")}
                                label="Date of birth"
                                required={true}
                                value={date}
                                onChange={(newValue) => {
                                    setDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                                error={!!errors.dateOfBirth}
                                helperText={errors?.dateOfBirth?.message}
                            />
                        </LocalizationProvider>

                        <FormControl component="fieldset" sx={{ mt: 2, mb: 2 }}>
                            <label component="legend">Gender</label>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group"
                                {...register("sex")}
                                value={sex}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>

                        <MyInput
                            {...register("email")}
                            label="Enter email"
                            error={!!errors.email}
                            helperText={errors?.email?.message}
                        />

                        <MyInput
                            {...register("password")}
                            label="Enter password"
                            type='password'
                            error={!!errors.password}
                            helperText={errors?.password?.message}
                        />

                        <MyInput
                            {...register("confirmPassword")}
                            label="Confirm password"
                            type='password'
                            error={!!errors.confirmPassword}
                            helperText={errors?.confirmPassword?.message}
                        />

                        <MyInput
                            {...register("userName", { required: true, maxLength: 16 })}
                            label="Confirm user name"
                            inputProps={{ pattern: "^[a-z][a-zA-Z0-9_.]*$" }}
                            error={!!errors.userName}
                            helperText={errors?.userName?.message}
                        />
                        <span style={{ color: '#bebebe', float: 'left' }}>
                            *Don't use this special characters(!@#$%^&*())
                            <br />
                            *Must start with a small letter
                        </span>

                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                            <MyButton type='submit' sx={{ mr: 2 }} >Sign up</MyButton>
                            <MyButton type='reset' >reset</MyButton>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}
