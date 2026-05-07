import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { loginSchema } from '../../schemas/userSchema';
import * as S from './Login.styles';
import FormInput from '../../components/FormInput';
import { loginUser } from '../../api/api';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const methods = useForm({
        resolver: zodResolver(loginSchema),
        mode: "onTouched"
    });

    const onSubmit = async (data) => {
        try {
            const response = await loginUser(data);
            login(response.user, response.token);
            navigate('/'); 
        } catch (error) {
            alert(error.message || "Invalid credentials");
        }
    };

    return (
        <S.Container>
            <S.Title>Welcome Back</S.Title>

            <FormProvider {...methods}>
                <S.StyledForm onSubmit={methods.handleSubmit(onSubmit)}>

                    <FormInput
                        name="email"
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email"
                    />

                    <FormInput
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                    />

                    <S.SubmitButton type="submit" disabled={methods.formState.isSubmitting}>
                        {methods.formState.isSubmitting ? "Authenticating..." : "Login"}
                    </S.SubmitButton>

                    <S.LinkText>
                        Don't have an account? <span onClick={() => navigate('/register')}>Register here</span>
                    </S.LinkText>

                </S.StyledForm>
            </FormProvider>
        </S.Container>
    );
};

export default Login;