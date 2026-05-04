import React from 'react';
import { useFormContext } from 'react-hook-form';
import * as S from './FormInput.styles';

const FormInput = ({ name, label, type = "text", ...props }) => {
  // שאיבת המתודות מהקונטקסט של FormProvider
  const { register, formState: { errors } } = useFormContext();
  
  // בדיקה האם קיימת שגיאה ספציפית לשדה הזה
  const error = errors[name];

  return (
    <S.InputWrapper>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      
      <S.StyledInput
        id={name}
        type={type}
        {...register(name)}
        hasError={!!error} // המרה לבוליאני עבור ה-Styled Component
        {...props}
      />
      
      {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.InputWrapper>
  );
};

export default FormInput;