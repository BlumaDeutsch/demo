import styled from 'styled-components';
import { Container, Title, StyledForm, SubmitButton } from '../register/Register.styles'; // שימוש בקומפוננטות מעוצבות קיימות   

export { Container, Title, StyledForm, SubmitButton };

export const LinkText = styled.p`
  margin-top: 15px;
  text-align: center;
  font-size: 0.9rem;
  color: #7f8c8d;
  
  span {
    color: #3498db;
    cursor: pointer;
    font-weight: bold;
    &:hover { text-decoration: underline; }
  }
`;