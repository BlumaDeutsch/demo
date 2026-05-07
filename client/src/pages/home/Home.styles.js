import styled, { keyframes } from 'styled-components';


/* ── Animations ── */
export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
`;

export const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

/* ── Palette ── */
export const C = {
  cream:     '#FAF7F2',
  ivory:     '#F5EFE4',
  gold:      '#C9A84C',
  goldLight: '#E8C96A',
  brown:     '#3D2B1F',
  brownMid:  '#6B4A33',
  charcoal:  '#1A1714',
  white:     '#FFFFFF',
  muted:     '#8C7B6E',
};

/* ── Hero ── */
export const HeroSection = styled.section`
  min-height: 100vh;
  background: ${C.charcoal};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 72px 5vw 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 70% at 50% 60%, rgba(201,168,76,0.06) 0%, transparent 70%),
      radial-gradient(ellipse 40% 40% at 20% 80%, rgba(61,43,31,0.8) 0%, transparent 60%);
  }
`;

export const HeroInner = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  max-width: 1100px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
`;

export const HeroText = styled.div`
  animation: ${fadeUp} 0.9s ease both;
`;

export const HeroEyebrow = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${C.gold};
  margin-bottom: 20px;
`;

export const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  line-height: 1.15;
  color: ${C.white};
  margin-bottom: 24px;

  em {
    font-style: italic;
    background: linear-gradient(90deg, ${C.gold}, ${C.goldLight}, ${C.gold});
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 4s linear infinite;
  }
`;

export const HeroSub = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1.05rem;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(250,247,242,0.65);
  margin-bottom: 40px;
  max-width: 440px;
`;

export const HeroCTA = styled.button`
  font-family: 'Lato', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 16px 40px;
  background: ${C.gold};
  color: ${C.charcoal};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${C.goldLight};
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(201,168,76,0.4);
  }
`;

export const HeroImageWrap = styled.div`
  animation: ${fadeUp} 0.9s 0.2s ease both;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const InstrumentSVG = styled.div`
  animation: ${float} 6s ease-in-out infinite;
  width: 100%;
  max-width: 420px;
`;

/* ── Divider ── */
export const GoldDivider = styled.div`
  width: 60px;
  height: 2px;
  background: ${C.gold};
  margin: 0 auto 32px;
`;

/* ── About Section ── */
export const AboutSection = styled.section`
  background: ${C.ivory};
  padding: 100px 5vw;
  text-align: center;
`;

export const SectionEyebrow = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${C.gold};
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  color: ${C.brown};
  margin-bottom: 20px;
`;

export const SectionBody = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1.05rem;
  font-weight: 300;
  line-height: 1.9;
  color: ${C.brownMid};
  max-width: 680px;
  margin: 0 auto;
`;

/* ── Lessons Section ── */
export const LessonsSection = styled.section`
  background: ${C.cream};
  padding: 100px 5vw;
`;

export const LessonsHeader = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Card = styled.div`
  background: ${C.white};
  border: 1px solid rgba(61,43,31,0.1);
  border-radius: 4px;
  padding: 40px 32px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: ${C.gold};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(61,43,31,0.12);
    &::after { transform: scaleX(1); }
  }
`;

export const CardIcon = styled.div`
  font-size: 2.4rem;
  margin-bottom: 20px;
`;

export const CardTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: ${C.brown};
  margin-bottom: 12px;
`;

export const CardText = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.8;
  color: ${C.muted};
`;

export const CardTag = styled.span`
  display: inline-block;
  margin-top: 20px;
  font-family: 'Lato', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${C.gold};
  border: 1px solid rgba(201,168,76,0.4);
  padding: 4px 12px;
  border-radius: 2px;
`;

/* ── Testimonials ── */
export const TestimonialsSection = styled.section`
  background: ${C.charcoal};
  padding: 100px 5vw;
  text-align: center;
`;

export const TestiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
  max-width: 1000px;
  margin: 56px auto 0;
`;

export const TestiCard = styled.div`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(201,168,76,0.15);
  border-radius: 4px;
  padding: 36px 28px;
  text-align: left;
`;

export const Quote = styled.p`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1rem;
  line-height: 1.85;
  color: rgba(250,247,242,0.75);
  margin-bottom: 24px;
  &::before { content: '"'; color: ${C.gold}; font-size: 1.4rem; }
  &::after  { content: '"'; color: ${C.gold}; font-size: 1.4rem; }
`;

export const QuoteAuthor = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${C.gold};
`;

/* ── Contact ── */
export const ContactSection = styled.section`
  background: ${C.ivory};
  padding: 100px 5vw;
`;

export const ContactInner = styled.div`
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 48px;
  text-align: left;
`;

export const Label = styled.label`
  font-family: 'Lato', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${C.brownMid};
  margin-bottom: 6px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  font-family: 'Lato', sans-serif;
  font-size: 0.95rem;
  font-weight: 300;
  padding: 13px 16px;
  background: ${C.white};
  border: 1px solid rgba(61,43,31,0.2);
  border-radius: 2px;
  color: ${C.brown};
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
  &:focus { border-color: ${C.gold}; }
  &::placeholder { color: rgba(140,123,110,0.5); }
`;

export const Textarea = styled.textarea`
  width: 100%;
  font-family: 'Lato', sans-serif;
  font-size: 0.95rem;
  font-weight: 300;
  padding: 13px 16px;
  background: ${C.white};
  border: 1px solid rgba(61,43,31,0.2);
  border-radius: 2px;
  color: ${C.brown};
  outline: none;
  resize: vertical;
  min-height: 140px;
  transition: border-color 0.2s;
  box-sizing: border-box;
  &:focus { border-color: ${C.gold}; }
  &::placeholder { color: rgba(140,123,110,0.5); }
`;

export const SubmitBtn = styled.button`
  align-self: flex-start;
  font-family: 'Lato', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 16px 48px;
  background: ${C.gold};
  color: ${C.charcoal};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background: ${C.goldLight};
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(201,168,76,0.4);
  }
`;

export const SuccessMsg = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  color: ${C.gold};
  text-align: center;
  margin-top: 16px;
`;

/* ── Footer ── */
export const Footer = styled.footer`
  background: ${C.charcoal};
  padding: 40px 5vw;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-size: 0.82rem;
  color: rgba(250,247,242,0.3);
  letter-spacing: 0.05em;
`;

