import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import * as S from './Navbar.styles';

const Navbar = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <S.Nav>
            <S.NavLogo to="/">MyPlatform</S.NavLogo>
            <S.NavLinks>
                <S.NavBtn onClick={() => navigate('/home')}>Home</S.NavBtn>
                {isAuthenticated ? (
                    <>
                        <S.UserMenuWrapper>
                            <S.UserName>שלום, {user.username} ▾</S.UserName>
                            <S.DropdownContent>
                                <S.DropdownItem onClick={() => navigate('/edit-profile')}>
                                    עריכת פרטים
                                </S.DropdownItem>
                                <S.DropdownItem onClick={handleLogout} isLogout>
                                    התנתק
                                </S.DropdownItem>
                            </S.DropdownContent>
                        </S.UserMenuWrapper>                    </>
                ) : (
                    <>
                        <S.NavBtn variant="outline" onClick={() => navigate('/login')}>
                            Login
                        </S.NavBtn>
                        <S.NavBtn onClick={() => navigate('/register')}>Register</S.NavBtn>
                    </>
                )}
            </S.NavLinks>
        </S.Nav>
    );
};

export default Navbar;