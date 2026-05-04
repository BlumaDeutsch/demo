import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
  padding: 12px 15px;
  border-radius: 6px;
  border: 2px solid ${props => props.hasError ? '#e74c3c' : '#dfe6e9'};
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:focus {
    border-color: ${props => props.hasError ? '#e74c3c' : '#3498db'};
    box-shadow: 0 0 8px ${props => props.hasError ? 'rgba(231, 76, 60, 0.2)' : 'rgba(52, 152, 219, 0.2)'};
  }

  &::placeholder {
    color: #b2bec3;
  }
`;

export const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.4rem;
  font-weight: 500;
`;