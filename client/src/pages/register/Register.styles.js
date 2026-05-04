import styled from 'styled-components';

export const Container = styled.div`
  max-width: 450px;
  margin: 60px auto;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Title = styled.h2`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 25px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SubmitButton = styled.button`
  padding: 12px;
  background-color: ${props => props.disabled ? '#bdc3c7' : '#3498db'};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.disabled ? '#bdc3c7' : '#2980b9'};
    transform: ${props => props.disabled ? 'none' : 'translateY(-1px)'};
  }
`;