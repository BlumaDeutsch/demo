import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

import { registerSchema } from '../../schemas/userSchema';
import { createUser } from '../../api/api';
import FormInput from '../../components/FormInput';

// ייבוא הקומפוננטות המעוצבות
import * as S from './Register.styles'; 

const Register = () => {
  const navigate = useNavigate();
  const methods = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onTouched"
  });

  const onSubmit = async (data) => {
    try {
      await createUser(data);
      alert("User created successfully!");
      methods.reset();
      navigate('/home'); // נווט לדף הבית לאחר ההרשמה המצליחה
    } catch (error) {
      alert(error.message || "Something went wrong");
    }
  };

  const { isSubmitting } = methods.formState;

  return (
    <S.Container>
      <S.Title>Create Account</S.Title>
      
      <FormProvider {...methods}>
        <S.StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
          
          <FormInput name="username" label="Username" placeholder="Enter username" />
          <FormInput name="email" label="Email Address" type="email" placeholder="mail@example.com" />
          <FormInput name="password" label="Password" type="password" placeholder="Password (min 6 chars)" />

          <S.SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Sign Up"}
          </S.SubmitButton>
          
        </S.StyledForm>
      </FormProvider>
    </S.Container>
  );
};

export default Register;