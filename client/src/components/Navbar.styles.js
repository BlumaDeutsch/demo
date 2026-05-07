import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const C = {
    cream: '#FAF7F2',
    ivory: '#F5EFE4',
    gold: '#C9A84C',
    goldLight: '#e8c869',
    brown: '#3D2B1F',
    brownMid: '#6B4A33',
    charcoal: '#1A1714',
    white: '#FFFFFF',
    muted: '#8C7B6E',
};

export const Nav = styled.nav`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
  height: 72px;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(201, 168, 76, 0.2);
`;

export const NavLogo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.35rem;
  color: ${C.goldLight};
  letter-spacing: 0.03em;
  span { color: ${C.white}; }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;

export const NavBtn = styled.button`
  font-family: 'Lato', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 9px 24px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.25s ease;

  ${({ variant }) => variant === 'outline' ? `
    background: transparent;
    border: 1px solid #c9a84c80;
    color: ${C.goldLight};
    &:hover { border-color: ${C.gold}; background: rgba(201,168,76,0.08); }
  ` : `
    background: ${C.gold};
    border: 1px solid ${C.gold};
    color: ${C.charcoal};
    &:hover { background: ${C.goldLight}; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(201,168,76,0.35); }
  `}
`;

// רכיב העטיפה של התפריט הנפתח
export const UserMenuWrapper = styled.div`
  position: relative;
  cursor: pointer;
  padding: 10px 0;
`;

export const UserName = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 9px 24px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.25s ease;
  background: transparent;
  color: ${C.goldLight};
  &:hover { border-color: ${C.gold}; background: #c9a84c14; }
`;

export const DropdownContent = styled.div`
  display: none; // מוסתר כברירת מחדל
  position: absolute;
  top: 100%;
  right: 0;
  background-color: C.charcoal;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
  border-radius: 4px;
  overflow: hidden;
  z-index: 1;

  ${UserMenuWrapper}:hover & {
    display: block;
  }
`;

export const DropdownItem = styled.div`
  color: ${C.goldLight};
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 0.9rem;
  transition: background 0.2s;
  text-align: right;

  &:hover {
    background-color: #c9a84c14;
  }
`;