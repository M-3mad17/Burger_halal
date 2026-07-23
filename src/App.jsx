import { useState, useEffect, useRef, useCallback } from 'react';
import { menuData, dips, t } from './data';

function useFadeUp() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: .15 });
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Navbar({ lang, toggleLang }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="mainNav" style={{ background: scrolled ? 'rgba(10,10,10,.99)' : 'rgba(10,10,10,.97)' }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src="/graphics/fooiewagen-logo.svg" alt="The Foodie Wagon" />
          <div className="d-none d-sm-block">
            <div style={{ color: 'var(--gold)', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '.06em' }}>
              {t(lang, 'THE FOODIE WAGON', 'ذا فودي واجون')}
            </div>
            <div style={{ color: '#888', fontSize: '.65rem', letterSpacing: '.15em' }}>
              {t(lang, 'WHERE FLAVOR HITS THE ROAD', 'حيث النكهة تصبح رحلة')}
            </div>
          </div>
        </a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" style={{ color: '#fff' }}>
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-center gap-lg-2 gap-1">
            <li className="nav-item"><a className="nav-link" href="#menu">{t(lang, 'Menu', 'القائمة')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#location">{t(lang, 'Location', 'الموقع')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">{t(lang, 'Contact', 'تواصل معنا')}</a></li>
            <li className="nav-item d-flex align-items-center gap-2 ms-lg-2">
              <span style={{ color: '#888', fontSize: '.8rem' }}><i className="bi bi-geo-alt-fill text-warning"></i> Ingolstadt</span>
            </li>
            <li className="nav-item ms-lg-2">
              <button className="lang-btn" onClick={toggleLang}>
                {lang === 'en' ? '🇸🇦 العربية' : '🇬🇧 English'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Hero({ lang }) {
  return (
    <section id="hero">
      <div className="glow-orb g1"></div>
      <div className="glow-orb g2"></div>
      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-2 order-lg-1 fade-up">
            <img src="/graphics/halal-logo.svg" alt="Halal" style={{ height: 64 }} className="mb-3" />
            <div className="hero-title mb-2">
              <span className="line1">{t(lang, 'THE FOODIE', 'ذا فودي')}</span><br />
              <span className="line2">{t(lang, 'WAGON', 'واجون')}</span>
            </div>
            <p className="hero-tag">{t(lang, 'Where Flavor Hits The Road', 'حيث النكهة تصبح رحلة')}</p>
            <p className="hero-desc">{t(lang,
              'Premium Halal Burgers, crispy Fried Chicken, and authentic Street Food — straight from our food truck to you.',
              'برجر حلال فاخر، دجاج مقرمش، وطعام شارع أصيل — مباشرة من شاحنتنا إليك.'
            )}</p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <a href="tel:+4917600000000" className="btn btn-gold d-flex align-items-center gap-2">
                <i className="bi bi-telephone-fill"></i> +49 176 00000000
              </a>
              <a href="#menu" className="btn btn-outline-gold d-flex align-items-center gap-2">
                <span>{t(lang, 'View Menu', 'عرض القائمة')}</span> <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className="location-badge mt-4">
              <img src="/graphics/truck.svg" alt="Truck" />
              <div>
                <div style={{ color: 'var(--gold)', fontWeight: 900, fontSize: '1.6rem' }}>
                  {t(lang, 'Every Saturday', 'كل سبت')}
                </div>
                <div style={{ fontWeight: 700 }}>{t(lang, 'Am Westpark 7, Ingolstadt', 'أم ويستبارك 7، إنغولشتات')}</div>
                <div style={{ color: 'var(--muted)', fontSize: '.9rem' }}>11:00 – 20:00</div>
              </div>
            </div>
            <div className="row g-3 mt-3" style={{ maxWidth: 360 }}>
              <div className="col-4"><div className="stat-num">11+</div><div className="stat-lbl">{t(lang, 'BURGERS', 'برجر')}</div></div>
              <div className="col-4"><div className="stat-num">10+</div><div className="stat-lbl">{t(lang, 'DIPS', 'صلصات')}</div></div>
              <div className="col-4"><div className="stat-num">100%</div><div className="stat-lbl">HALAL</div></div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 text-center fade-up">
            <img src="/graphics/tasty-burger.png" alt="Burger" className="hero-burger" />
          </div>
        </div>
      </div>
      <div className="scroll-down text-warning"><i className="bi bi-chevron-double-down fs-4"></i></div>
    </section>
  );
}

function SpiceDots({ n }) {
  return (
    <div>
      {[1,2,3,4,5].map(i => (
        <span key={i} className={`spice-dot ${i <= n ? 'spice-hot' : 'spice-off'}`}></span>
      ))}
    </div>
  );
}

function Menu({ lang }) {
  const [activeTab, setActiveTab] = useState('beef');
  const items = menuData[activeTab];

  return (
    <section id="menu">
      <div className="container">
        <h2 className="section-title fade-up">{t(lang, 'OUR MENU', 'قائمتنا')}</h2>
        <p className="section-sub fade-up">{t(lang,
          'Homemade Beef Patties, crispy Fried Chicken & fresh ingredients',
          'باتي لحم بقري محلي الصنع، دجاج مقرمش وخضروات طازجة'
        )}</p>

        <div className="deal-banner my-5 fade-up">
          <div style={{ color: 'var(--gold)', fontSize: 'clamp(1.5rem,4vw,2.5rem)', fontWeight: 900 }}>
            🔥 {t(lang, 'MENU DEAL', 'عرض الوجبة')} 🔥
          </div>
          <div className="deal-price mt-1">
            <span>{t(lang, 'Burger + Fries + Drink =', 'برجر + بطاطس + مشروب =')}</span>
            <span style={{ color: '#fff' }}> only </span>
            <span>€4.50</span>
          </div>
        </div>

        <ul className="nav menu-tabs justify-content-center mb-5 flex-wrap">
          {[
            { key: 'beef', label: t(lang, '🥩 Beef Burger', '🥩 برجر لحم بقري') },
            { key: 'chicken', label: t(lang, '🍗 Chicken Burger', '🍗 برجر دجاج') },
            { key: 'veggie', label: t(lang, '🥦 Veggie', '🥦 نباتي') },
            { key: 'drinks', label: t(lang, '🥤 Drinks', '🥤 مشروبات') },
          ].map(tab => (
            <li className="nav-item" key={tab.key}>
              <a className={`nav-link ${activeTab === tab.key ? 'active' : ''}`}
                 href="javascript:void(0)" onClick={() => setActiveTab(tab.key)}>
                {tab.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="row g-4" id="menuGrid">
          {items.map((item, i) => (
            <div className="col-sm-6 col-lg-4" key={i}>
              <div className="menu-card">
                {item.img ? (
                  <img src={item.img} alt={item.name} onError={e => e.target.style.display = 'none'} />
                ) : (
                  <div style={{ height: 200, background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>🍔</div>
                )}
                <div className="menu-card-body">
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <h5>{item.name}</h5>
                    <span className="price">{item.price}</span>
                  </div>
                  <p className="desc">{item.desc}</p>
                  {item.spice > 0 && <SpiceDots n={item.spice} />}
                  <img src="/graphics/halal-logo.svg" alt="Halal" style={{ height: 28, marginTop: '.5rem' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="section-title mt-5 mb-4 fade-up" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
          {t(lang, 'APPETIZERS & SIDES', 'المقبلات والإضافات')}
        </h3>
        <div className="row g-4 justify-content-center fade-up">
          <div className="col-6 col-md-3"><div className="app-card"><img className="app-img" src="/Appetizers/Chilli-Cheese-Nuggets.webp" alt="Chili Cheese Nuggets" /><div className="app-name">Chili Cheese Nuggets</div><div className="app-price">6pc €5 · 10pc €7.50 · 16pc €11</div></div></div>
          <div className="col-6 col-md-3"><div className="app-card"><img className="app-img" src="/Appetizers/Mozarella-Sticks.webp" alt="Mozzarella Sticks" /><div className="app-name">Mozzarella Sticks</div><div className="app-price">4pc €5 · 8pc €9 · 14pc €14</div></div></div>
          <div className="col-6 col-md-3"><div className="app-card"><img className="app-img" src="/Appetizers/Onion-Rings.webp" alt="Onion Rings" /><div className="app-name">Onion Rings</div><div className="app-price">6pc €4 · 12pc €7 · 24pc €12</div></div></div>
          <div className="col-6 col-md-3"><div className="app-card"><img className="app-img" src="/Appetizers/Pommes_3,5euros.webp" alt="Fries" /><div className="app-name">{t(lang, 'French Fries', 'بطاطس مقلية')}</div><div className="app-price">€3.50</div></div></div>
        </div>

        <h3 className="section-title mt-5 mb-4 fade-up" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
          {t(lang, 'FRIED CHICKEN', 'دجاج مقلي')}
        </h3>
        <div className="row g-4 justify-content-center fade-up">
          <div className="col-md-6"><div className="app-card"><img className="app-img" src="/Fried-Chicken/Chicken-Wings.webp" alt="Chicken Wings" style={{ maxHeight: 260 }} /><div className="app-name">Chicken Wings</div><div className="app-price">6pc €7.50 · 10pc €11 · 20pc €20</div></div></div>
          <div className="col-md-6"><div className="app-card"><img className="app-img" src="/Fried-Chicken/Chicken-Stripes.webp" alt="Chicken Strips" style={{ maxHeight: 260 }} /><div className="app-name">Chicken Strips</div><div className="app-price">3pc €6 · 6pc €11.50 · 9pc €16</div></div></div>
        </div>

        <h3 className="section-title mt-5 mb-4 fade-up" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
          {t(lang, 'SAUCES & DIPS', 'الصلصات والغموس')}
        </h3>
        <div className="row g-3 fade-up">
          {dips.map((d, i) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={i}>
              <div className="dip-card">
                <img src="/graphics/dips.png" alt={d.name} onError={e => e.target.style.display = 'none'} />
                <div className="dip-name">{d.name}</div>
                <div className="dip-price">{d.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs({ lang }) {
  const items = [
    { icon: '🏅', title: '100% Halal Certified', titleAr: 'معتمد حلال 100%', desc: 'All our meat is sourced from certified Halal suppliers only.', descAr: 'جميع اللحوم من موردين حلال معتمدين فقط.' },
    { icon: '🔥', title: 'Made Fresh Daily', titleAr: 'يُحضَّر طازجًا يوميًا', desc: 'Homemade 140g beef patties crafted fresh every single day.', descAr: 'باتي لحم بقري 140 غم يُصنع طازجًا كل يوم.' },
    { icon: '🚚', title: 'Street Food Experience', titleAr: 'تجربة طعام الشارع', desc: 'Authentic food truck vibes with premium restaurant quality.', descAr: 'أجواء شاحنة الطعام الأصيلة بجودة المطاعم الفاخرة.' },
    { icon: '❤️', title: 'Community Loved', titleAr: 'محبوب من المجتمع', desc: "Ingolstadt's favourite halal food truck since our first day.", descAr: 'شاحنة الطعام الحلال المفضلة في إنغولشتات منذ يومنا الأول.' },
  ];

  return (
    <section id="why" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <h2 className="section-title fade-up">{t(lang, 'WHY CHOOSE US?', 'لماذا تختارنا؟')}</h2>
        <p className="section-sub fade-up mb-5">{t(lang, 'Quality you can taste in every bite', 'جودة تشعر بها في كل لقمة')}</p>
        <div className="row g-4 fade-up">
          {items.map((item, i) => (
            <div className="col-sm-6 col-lg-3" key={i}>
              <div className="why-card">
                <span className="icon">{item.icon}</span>
                <h5>{t(lang, item.title, item.titleAr)}</h5>
                <p>{t(lang, item.desc, item.descAr)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ lang }) {
  const items = [
    { stars: '★★★★★', text: '"The best halal burger I have had in Germany. The Angry Bull is absolutely fire!"', textAr: '"أفضل برجر حلال تناولته في ألمانيا. الـ Angry Bull رائع جداً!"', author: '— Ahmed K.' },
    { stars: '★★★★★', text: '"Fresh ingredients, generous portions, and incredibly friendly staff. We go every Saturday!"', textAr: '"مكونات طازجة، حصص كريمة، وطاقم عمل ودود بشكل لا يصدق. نذهب كل سبت!"', author: '— Sara M.' },
    { stars: '★★★★★', text: '"The Crunchy Chicken is phenomenal! And the dips — I could eat them all day."', textAr: '"الـ Crunchy Chicken رائع! والصلصات — يمكنني تناولها طوال اليوم."', author: '— Lukas D.' },
  ];

  return (
    <section id="testimonials">
      <div className="container">
        <h2 className="section-title fade-up">{t(lang, 'WHAT PEOPLE SAY', 'ماذا يقول الناس')}</h2>
        <p className="section-sub fade-up mb-5">{t(lang, 'Real reviews from our customers', 'تقييمات حقيقية من عملائنا')}</p>
        <div className="row g-4 fade-up">
          {items.map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="testi-card">
                <div className="stars">{item.stars}</div>
                <p>{t(lang, item.text, item.textAr)}</p>
                <div className="author">{item.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location({ lang }) {
  return (
    <section id="location" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
          <img src="/graphics/truck.svg" alt="" style={{ height: 52 }} />
          <h2 className="section-title mb-0" style={{ textAlign: 'left' }}>{t(lang, 'FIND US', 'اعثر علينا')}</h2>
          <img src="/graphics/truck.svg" alt="" style={{ height: 52, transform: 'scaleX(-1)' }} />
        </div>
        <p className="section-sub fade-up mb-5">{t(lang,
          'Find us every Saturday at Saturn/Mediamarkt in Ingolstadt',
          'اعثر علينا كل سبت عند ساترن/ميديا ماركت في إنغولشتات'
        )}</p>
        <div className="row g-5 align-items-center fade-up">
          <div className="col-lg-6">
            <div className="map-wrap">
              <img src="/map-of-ingolstadt-germany-westpark-area-street-map.jpg" alt="Map" />
              <div className="map-pin">
                <div className="pulse-ring"></div>
                <div className="dot"><i className="bi bi-geo-alt-fill text-dark fs-4"></i></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info-card">
              <div className="info-row">
                <div className="icon-circle" style={{ background: 'rgba(245,158,11,.15)' }}><i className="bi bi-geo-alt-fill text-warning fs-5"></i></div>
                <div><h5 style={{ color: '#fff', fontWeight: 800 }}>{t(lang, 'Main Location', 'الموقع الرئيسي')}</h5><p style={{ color: '#999' }}>{t(lang, 'Saturn/Mediamarkt – Am Westpark 7, 85057 Ingolstadt', 'ساترن/ميديا ماركت – أم ويستبارك 7، 85057 إنغولشتات')}</p></div>
              </div>
              <div className="info-row">
                <div className="icon-circle" style={{ background: 'rgba(245,158,11,.15)' }}><i className="bi bi-calendar-event text-warning fs-5"></i></div>
                <div><h5 style={{ color: '#fff', fontWeight: 800 }}>{t(lang, 'Every Saturday!', 'كل سبت!')}</h5><p style={{ color: '#999' }}>{t(lang, 'Visit us weekly for fresh burgers and more.', 'زرنا أسبوعيًا للبرجر الطازج والمزيد.')}</p></div>
              </div>
              <div className="info-row mb-0">
                <div className="icon-circle" style={{ background: 'rgba(245,158,11,.15)' }}><i className="bi bi-clock text-warning fs-5"></i></div>
                <div><h5 style={{ color: '#fff', fontWeight: 800 }}>{t(lang, 'Opening Hours', 'أوقات العمل')}</h5><p style={{ color: '#999' }}>{t(lang, 'Saturday: 11:00 – 20:00', 'السبت: 11:00 – 20:00')}</p></div>
              </div>
            </div>
            <div style={{ background: 'rgba(245,158,11,.08)', border: '2px solid rgba(245,158,11,.25)', borderRadius: 14, padding: '1.5rem', marginTop: '1.5rem' }}>
              <h6 style={{ color: 'var(--gold)', fontWeight: 800 }}>
                🎉 {t(lang, 'Parties, Events & Festivals', 'حفلات، فعاليات ومهرجانات')}
              </h6>
              <p style={{ color: '#bbb', fontSize: '.9rem' }}>
                {t(lang, 'We cater private events too! Contact us for custom offers.', 'نقدم خدمة تقديم الطعام للفعاليات الخاصة أيضًا! تواصل معنا للعروض المخصصة.')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ lang }) {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title fade-up">{t(lang, 'CONTACT US', 'تواصل معنا')}</h2>
        <p className="section-sub fade-up mb-5">{t(lang,
          'Questions or want to book us for an event? Reach out!',
          'أسئلة أو تريد حجزنا لفعالية؟ تواصل معنا!'
        )}</p>
        <div className="row g-4 justify-content-center fade-up">
          <div className="col-md-4">
            <div className="contact-card">
              <div className="contact-icon"><i className="bi bi-telephone-fill"></i></div>
              <p style={{ color: '#888', fontSize: '.85rem' }}>{t(lang, 'Phone', 'هاتف')}</p>
              <a href="tel:+4917600000000" className="contact-link">+49 176 00000000</a>
              <p style={{ color: '#666', fontSize: '.85rem', marginTop: '.4rem' }}>{t(lang, 'Call us directly', 'اتصل بنا مباشرة')}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-card">
              <div className="contact-icon"><i className="bi bi-envelope-fill"></i></div>
              <p style={{ color: '#888', fontSize: '.85rem' }}>{t(lang, 'E-Mail', 'البريد الإلكتروني')}</p>
              <a href="mailto:info@foodiewagon.de" className="contact-link" style={{ fontSize: '.95rem' }}>info@foodiewagon.de</a>
              <p style={{ color: '#666', fontSize: '.85rem', marginTop: '.4rem' }}>{t(lang, 'Send us an email', 'أرسل لنا بريدًا إلكترونيًا')}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-card">
              <div className="contact-icon"><i className="bi bi-instagram"></i></div>
              <p style={{ color: '#888', fontSize: '.85rem' }}>Instagram</p>
              <a href="https://www.instagram.com/foodiewagon_demo" target="_blank" className="contact-link" rel="noreferrer">@foodiewagon_demo</a>
              <p style={{ color: '#666', fontSize: '.85rem', marginTop: '.4rem' }}>{t(lang, 'Follow us on Instagram', 'تابعنا على انستغرام')}</p>
            </div>
          </div>
        </div>
        <div style={{ background: 'rgba(245,158,11,.08)', border: '2px solid rgba(245,158,11,.25)', borderRadius: 16, padding: '2rem', textAlign: 'center', maxWidth: 600, margin: '3rem auto 0' }} className="fade-up">
          <p style={{ fontSize: '1.1rem', marginBottom: '.3rem' }}>
            <strong style={{ color: 'var(--gold)' }}>{t(lang, 'Every Saturday', 'كل سبت')}</strong> 11:00 – 20:00
          </p>
          <p style={{ color: '#888' }}>{t(lang, 'Am Westpark 7, 85057 Ingolstadt', 'أم ويستبارك 7، 85057 إنغولشتات')}</p>
          <p style={{ color: '#666', fontSize: '.85rem', marginTop: '.8rem' }}>{t(lang, 'Contact: Max (FoodieWagon GmbH)', 'تواصل: ماكس (FoodieWagon GmbH)')}</p>
        </div>
      </div>
    </section>
  );
}

function Footer({ lang }) {
  return (
    <footer>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="d-flex align-items-center gap-3 mb-3">
              <img src="/graphics/fooiewagen-logo.svg" alt="" style={{ height: 48 }} />
              <div>
                <div style={{ color: 'var(--gold)', fontWeight: 900, letterSpacing: '.06em' }}>{t(lang, 'THE FOODIE WAGON', 'ذا فودي واجون')}</div>
                <div style={{ color: '#666', fontSize: '.65rem', letterSpacing: '.12em' }}>{t(lang, 'WHERE FLAVOR HITS THE ROAD', 'حيث النكهة تصبح رحلة')}</div>
              </div>
            </div>
            <p style={{ color: '#666', fontSize: '.85rem' }}>{t(lang,
              'Premium Halal Street Food in Ingolstadt. Burgers, Fried Chicken, and more.',
              'طعام شارع حلال فاخر في إنغولشتات. برجر، دجاج مقلي والمزيد.'
            )}</p>
          </div>
          <div className="col-md-4">
            <h6>{t(lang, 'QUICK LINKS', 'روابط سريعة')}</h6>
            <a href="#menu">{t(lang, 'Menu', 'القائمة')}</a>
            <a href="#location">{t(lang, 'Location', 'الموقع')}</a>
            <a href="#contact">{t(lang, 'Contact', 'تواصل معنا')}</a>
            <a href="#why">{t(lang, 'Why Choose Us', 'لماذا تختارنا')}</a>
          </div>
          <div className="col-md-4">
            <h6>{t(lang, 'CONTACT', 'التواصل')}</h6>
            <a href="tel:+4917600000000"><i className="bi bi-telephone me-2"></i>+49 176 00000000</a>
            <a href="mailto:info@foodiewagon.de"><i className="bi bi-envelope me-2"></i>info@foodiewagon.de</a>
            <a href="#"><i className="bi bi-geo-alt me-2"></i>Am Westpark 7, Ingolstadt</a>
          </div>
        </div>
        <div className="footer-bot d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <div className="d-flex flex-wrap gap-3">
            <span>© {new Date().getFullYear()} FoodieWagon GmbH.</span>
            <span>{t(lang, 'All rights reserved.', 'جميع الحقوق محفوظة.')}</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <img src="/graphics/halal-logo.svg" alt="Halal" style={{ height: 40 }} />
            <a href="https://www.instagram.com/foodiewagon_demo" target="_blank" className="social-btn" rel="noreferrer"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyCta({ lang }) {
  return (
    <div className="sticky-cta">
      <a href="tel:+4917600000000"><i className="bi bi-telephone-fill"></i> <span>{t(lang, 'Call Now', 'اتصل الآن')}</span></a>
      <a href="#menu" style={{ background: '#1a1a1a', color: 'var(--gold)', border: '2px solid var(--gold)', boxShadow: 'none' }}>
        <i className="bi bi-list-ul"></i> <span>{t(lang, 'Menu', 'القائمة')}</span>
      </a>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next = prev === 'en' ? 'ar' : 'en';
      document.documentElement.setAttribute('lang', next === 'ar' ? 'ar' : 'en');
      document.documentElement.setAttribute('dir', next === 'ar' ? 'rtl' : 'ltr');
      return next;
    });
  }, []);

  useFadeUp();

  return (
    <>
      <Navbar lang={lang} toggleLang={toggleLang} />
      <Hero lang={lang} />
      <Menu lang={lang} />
      <WhyChooseUs lang={lang} />
      <Testimonials lang={lang} />
      <Location lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      <StickyCta lang={lang} />
    </>
  );
}
