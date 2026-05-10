import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { updateProfileSchema } from '../../schemas/userSchema';
import { useAuth } from '../../context/AuthContext';
import { updateUser } from '../../api/api';
import FormInput from '../../components/FormInput';
import * as S from './EditProfile.styles';

const EditProfile = () => {
    const { user, login } = useAuth();
    const navigate = useNavigate();
    const methods = useForm({
        resolver: zodResolver(updateProfileSchema),
        defaultValues: { username: '', email: '' }
    });

    const { reset, handleSubmit, formState: { isSubmitting } } = methods;

    useEffect(() => {
        if (user) {
            reset({
                username: user.username,
                email: user.email
            });
        }
    }, [user, reset]);

    const onSubmit = async (data) => {
        try {
            const response = await updateUser(user.id, data);
            console.log("response: ", response);

            const token = localStorage.getItem('token');
            login(response.user, token);

            navigate('/');
        } catch (error) {
            alert(error.response?.error || "עדכון נכשל");
        }
    };

    return (
        <S.Container>
            <S.Title>עריכת פרופיל</S.Title>
            <FormProvider {...methods}>
                <S.StyledForm onSubmit={handleSubmit(onSubmit)}>

                    <FormInput name="username" label="שם משתמש" type="text" />
                    <FormInput name="email" label="אימייל" type="email" />

                    <S.SubmitButton type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "שומר שינויים..." : "עדכן פרטים"}
                    </S.SubmitButton>

                </S.StyledForm>
            </FormProvider>
        </S.Container>
    );
};

export default EditProfile;