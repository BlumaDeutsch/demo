import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import pianoIMG from '../../piano-violin.png';
import * as S from './Home.styles';

const LESSONS = [
    {
        icon: '🎹',
        title: 'פסנתר קלאסי',
        text: 'מסע מוזיקלי מהיסודות ועד לרפרטואר קלאסי מתקדם — מוצרט, שופן, בטהובן ועוד.',
        tag: 'כל הרמות',
    },
    {
        icon: '🎻',
        title: 'כינור',
        text: 'לימוד טכניקה מדויקת, יציבה נכונה ומוזיקה מהגיל הצעיר. מתאים לילדים ומבוגרים.',
        tag: 'מתחילים–מתקדמים',
    },
    {
        icon: '🎵',
        title: 'תיאוריה מוזיקלית',
        text: 'הבנה עמוקה של הרמוניה, קריאת תווים וסולפג׳ — הבסיס לכל מוזיקאי.',
        tag: 'מקוון ופרונטלי',
    },
    {
        icon: '🏠',
        title: 'שיעורים בבית',
        text: 'מגיעים אליך! שיעורים פרטיים בסביבה נוחה ומוכרת — ללא צורך בנסיעה.',
        tag: 'אזור השרון',
    },
];

const TESTIMONIALS = [
    {
        quote: 'בתי התחילה ללמוד פסנתר לפני שנה ואני לא מאמינה כמה התקדמה. המורה סבלנית ומאוד מקצועית.',
        author: 'רחל כ. — אמא של תלמידה',
    },
    {
        quote: 'למדתי כינור במשך שנים אבל רק כאן הרגשתי שאני באמת מבין מה אני עושה. ממליץ בחום.',
        author: 'נועם ב. — תלמיד מתקדם',
    },
    {
        quote: 'האווירה בשיעורים מדהימה, תמיד מהנה ולא מלחיץ. הצלחתי לנגן שיר שלם תוך חודשיים.',
        author: 'מיכל ש. — מתחילה',
    },
];


const Home = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', phone: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = e =>
        setForm(p => ({ ...p, [e.target.name]: e.target.value }));

    const handleSubmit = e => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <>
            {/* ── Hero ── */}
            <S.HeroSection>
                <S.HeroInner>
                    <S.HeroText>
                        <S.HeroEyebrow>שיעורים פרטיים לנגינה</S.HeroEyebrow>
                        <S.HeroTitle>
                            תנו לנגינה <em>לדבר</em><br />בעדכם
                        </S.HeroTitle>
                        <S.HeroSub>
                            פסנתר, כינור ותיאוריה מוזיקלית — שיעורים אישיים ומותאמים
                            לכל גיל ורמה, באווירה חמה ומקצועית.
                        </S.HeroSub>
                        <S.HeroCTA onClick={() => {
                            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                        }}>
                            קבעו שיעור ניסיון
                        </S.HeroCTA>
                    </S.HeroText>

                    <S.PianoImage src={pianoIMG} alt="Piano and Violin" />
                </S.HeroInner>
            </S.HeroSection>

            {/* ── About ── */}
            <S.AboutSection>
                <S.SectionEyebrow>קצת עלינו</S.SectionEyebrow>
                <S.GoldDivider />
                <S.SectionTitle>מוזיקה היא שפה — בואו ללמוד אותה</S.SectionTitle>
                <S.SectionBody>
                    עם ניסיון של מעל 15 שנה בהוראה פרטית, אנו מתמחים
                    בהתאמה אישית של כל שיעור לתלמיד. בין אם אתם מתחילים חדשים
                    ובין אם מנגנים שרוצים להתקדם — אנחנו כאן כדי להוביל אתכם
                    בדרך המוזיקלית שלכם, בסבלנות, בשמחה ובמקצועיות.
                </S.SectionBody>
            </S.AboutSection>

            {/* ── Lessons ── */}
            <S.LessonsSection>
                <S.LessonsHeader>
                    <S.SectionEyebrow>מה אנחנו מציעים</S.SectionEyebrow>
                    <S.GoldDivider />
                    <S.SectionTitle>השיעורים שלנו</S.SectionTitle>
                </S.LessonsHeader>
                <S.CardsGrid>
                    {LESSONS.map((l, i) => (
                        <S.Card key={i}>
                            <S.CardIcon>{l.icon}</S.CardIcon>
                            <S.CardTitle>{l.title}</S.CardTitle>
                            <S.CardText>{l.text}</S.CardText>
                            <S.CardTag>{l.tag}</S.CardTag>
                        </S.Card>
                    ))}
                </S.CardsGrid>
            </S.LessonsSection>

            {/* ── Testimonials ── */}
            <S.TestimonialsSection>
                <S.SectionEyebrow style={{ color: S.C.goldLight }}>מה אומרים עלינו</S.SectionEyebrow>
                <S.GoldDivider />
                <S.SectionTitle style={{ color: S.C.white }}>תלמידים מרוצים</S.SectionTitle>
                <S.TestiGrid>
                    {TESTIMONIALS.map((t, i) => (
                        <S.TestiCard key={i}>
                            <S.Quote>{t.quote}</S.Quote>
                            <S.QuoteAuthor>{t.author}</S.QuoteAuthor>
                        </S.TestiCard>
                    ))}
                </S.TestiGrid>
            </S.TestimonialsSection>

            {/* ── Contact ── */}
            <S.ContactSection id="contact">
                <S.ContactInner>
                    <S.SectionEyebrow>צרו קשר</S.SectionEyebrow>
                    <S.GoldDivider />
                    <S.SectionTitle>קבעו שיעור ניסיון</S.SectionTitle>
                    <S.SectionBody>
                        מלאו את הטופס ונחזור אליכם תוך 24 שעות לתיאום שיעור ראשון חינמי.
                    </S.SectionBody>

                    {!sent ? (
                        <S.Form onSubmit={handleSubmit}>
                            <div>
                                <S.Label htmlFor="name">שם מלא</S.Label>
                                <S.Input
                                    id="name" name="name" placeholder="ישראל ישראלי"
                                    value={form.name} onChange={handleChange} required
                                />
                            </div>
                            <div>
                                <S.Label htmlFor="phone">טלפון</S.Label>
                                <S.Input
                                    id="phone" name="phone" placeholder="050-0000000"
                                    value={form.phone} onChange={handleChange} required
                                />
                            </div>
                            <div>
                                <S.Label htmlFor="message">הודעה</S.Label>
                                <S.Textarea
                                    id="message" name="message"
                                    placeholder="ספרו לנו קצת — מה הכלי שמעניין אתכם, מה הגיל, האם יש ניסיון קודם..."
                                    value={form.message} onChange={handleChange}
                                />
                            </div>
                            <S.SubmitBtn type="submit">שלחו הודעה</S.SubmitBtn>
                        </S.Form>
                    ) : (
                        <S.SuccessMsg>✓ תודה! נחזור אליכם בהקדם.</S.SuccessMsg>
                    )}
                </S.ContactInner>
            </S.ContactSection>

            {/* ── Footer ── */}
            <S.Footer>
                © {new Date().getFullYear()} מוזיקה מהלב · כל הזכויות שמורות
            </S.Footer>
        </>
    );
};

export default Home;
