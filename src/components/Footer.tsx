import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Facebook, Instagram, MessageCircle, CreditCard, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Payment method logos as SVG components
const TroyLogo = () => (
  <div className="w-14 h-8 bg-white rounded px-2 py-1 flex items-center justify-center">
    <svg viewBox="0 0 100 40" className="w-full h-full">
      <text x="5" y="28" fill="#E31E24" fontSize="20" fontWeight="bold" fontFamily="Arial">TROY</text>
    </svg>
  </div>
);

const MastercardLogo = () => (
  <div className="w-14 h-8 bg-white rounded px-2 py-1 flex items-center justify-center">
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <circle cx="35" cy="30" r="20" fill="#EB001B"/>
      <circle cx="65" cy="30" r="20" fill="#F79E1B"/>
      <path d="M50 15 a20,20 0 0,0 0,30 a20,20 0 0,0 0-30" fill="#FF5F00"/>
    </svg>
  </div>
);

const PaypalLogo = () => (
  <div className="w-14 h-8 bg-white rounded px-2 py-1 flex items-center justify-center">
    <svg viewBox="0 0 100 40" className="w-full h-full">
      <text x="5" y="28" fill="#003087" fontSize="18" fontWeight="bold" fontFamily="Arial">Pay</text>
      <text x="45" y="28" fill="#009CDE" fontSize="18" fontWeight="bold" fontFamily="Arial">Pal</text>
    </svg>
  </div>
);

const PaycellLogo = () => (
  <div className="w-16 h-8 bg-white rounded px-2 py-1 flex items-center justify-center">
    <svg viewBox="0 0 100 40" className="w-full h-full">
      <rect x="5" y="10" width="90" height="20" fill="#E4002B" rx="3"/>
      <text x="15" y="25" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">PAYCELL</text>
    </svg>
  </div>
);

const IninalLogo = () => (
  <div className="w-14 h-8 bg-white rounded px-2 py-1 flex items-center justify-center">
    <svg viewBox="0 0 100 40" className="w-full h-full">
      <text x="5" y="28" fill="#FF6600" fontSize="16" fontWeight="bold" fontFamily="Arial">ininal</text>
    </svg>
  </div>
);

const VisaLogo = () => (
  <div className="w-14 h-8 bg-white rounded px-2 py-1 flex items-center justify-center">
    <svg viewBox="0 0 100 40" className="w-full h-full">
      <text x="10" y="29" fill="#1A1F71" fontSize="22" fontWeight="bold" fontFamily="Arial" fontStyle="italic">VISA</text>
    </svg>
  </div>
);

const AxessLogo = () => (
  <div className="w-14 h-8 bg-white rounded px-2 py-1 flex items-center justify-center">
    <svg viewBox="0 0 100 40" className="w-full h-full">
      <text x="10" y="27" fill="#FF6B00" fontSize="15" fontWeight="bold" fontFamily="Arial">AXESS</text>
    </svg>
  </div>
);

const BonusLogo = () => (
  <div className="w-14 h-8 bg-white rounded px-2 py-1 flex items-center justify-center">
    <svg viewBox="0 0 100 40" className="w-full h-full">
      <text x="8" y="28" fill="#003E7E" fontSize="16" fontWeight="bold" fontFamily="Arial">BONUS</text>
    </svg>
  </div>
);

const MaximumLogo = () => (
  <div className="w-16 h-8 bg-white rounded px-2 py-1 flex items-center justify-center">
    <svg viewBox="0 0 100 40" className="w-full h-full">
      <text x="5" y="27" fill="#E31E24" fontSize="13" fontWeight="bold" fontFamily="Arial">MAXIMUM</text>
    </svg>
  </div>
);

const CardFinansLogo = () => (
  <div className="w-16 h-8 bg-white rounded px-2 py-1 flex items-center justify-center">
    <svg viewBox="0 0 100 40" className="w-full h-full">
      <text x="5" y="27" fill="#004D91" fontSize="12" fontWeight="bold" fontFamily="Arial">CARDFİNAS</text>
    </svg>
  </div>
);

const WorldLogo = () => (
  <div className="w-14 h-8 bg-white rounded px-2 py-1 flex items-center justify-center">
    <svg viewBox="0 0 100 40" className="w-full h-full">
      <text x="10" y="28" fill="#E20025" fontSize="17" fontWeight="bold" fontFamily="Arial">WORLD</text>
    </svg>
  </div>
);

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      {/* Decorative blur circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-green-400 to-amber-400"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand with enhanced styling */}
          <div>
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-green-400 rounded-xl blur-lg opacity-30"></div>
              <img
                src="/Baru_E-Sports_[Kurtarilan]-01.png"
                alt="Ciğer Tarım"
                className="relative h-32 md:h-36 w-auto object-contain brightness-0 invert drop-shadow-2xl"
              />
            </div>
            <p className="text-green-200 text-sm leading-relaxed mb-5">
              {t('footer.brandDescription')}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/905376935691"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center hover:from-green-500 hover:to-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.facebook.com/seref.ciger.5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/ciger_tarm_urunleri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl flex items-center justify-center hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links with enhanced hover effects */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
              <h3 className="font-bold text-lg text-white">{t('footer.quickAccess')}</h3>
            </div>
            <ul className="space-y-3">
              {[
                { label: 'Anasayfa', path: '/' },
                { label: 'Fındık Alım', path: '/findik-alim', highlight: true },
                { label: 'Tarım Ürünleri', path: '/tarim-urunleri' },
                { label: 'Gıda Ürünleri', path: '/gida-urunleri' },
                { label: 'İnşaat Malzemeleri', path: '/insaat-malzemeleri' },
                { label: 'Hakkımızda', path: '/hakkimizda' },
              ].map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`group flex items-center gap-2 text-sm transition-all duration-300 ${
                      item.highlight
                        ? 'text-amber-300 font-semibold hover:text-amber-200'
                        : 'text-green-200 hover:text-white'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      item.highlight ? 'bg-amber-400' : 'bg-green-600 group-hover:bg-green-400'
                    }`}></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
              <h3 className="font-bold text-lg text-white">{t('footer.productsServices')}</h3>
            </div>
            <ul className="space-y-3">
              {[
                { label: 'Ziraat Gübreler', path: '/zirai-gubreler' },
                { label: 'Hırdavat', path: '/hirdavat' },
                { label: 'Nakliye', path: '/nakliye' },
                { label: 'İletişim', path: '/iletisim' },
                { label: 'Gizlilik Politikası', path: '/gizlilik-politikasi' },
                { label: 'Kullanım Koşulları', path: '/kullanim-kosullari' },
              ].map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-2 text-green-200 hover:text-white text-sm transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 group-hover:bg-green-400 transition-all duration-300"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact with enhanced styling */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
              <h3 className="font-bold text-lg text-white">{t('footer.contact')}</h3>
            </div>
            <ul className="space-y-4">
              <li className="group flex items-start gap-3 p-3 bg-green-800/30 backdrop-blur-sm rounded-xl border border-green-700/30 hover:border-green-600/50 transition-all">
                <MapPin size={18} className="text-green-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-green-200 text-sm">
                  <p className="font-semibold text-white">{t('footer.branch1')}</p>
                  <p className="text-xs mt-1">Ordu Gürgentepe Hasancık Köyü Tekkiraz Mevkii</p>
                </div>
              </li>
              <li className="group flex items-start gap-3 p-3 bg-green-800/30 backdrop-blur-sm rounded-xl border border-green-700/30 hover:border-green-600/50 transition-all">
                <MapPin size={18} className="text-green-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-green-200 text-sm">
                  <p className="font-semibold text-white">{t('footer.branch2')}</p>
                  <p className="text-xs mt-1">Ordu Fatsa Bolaman Mevkii</p>
                </div>
              </li>
              <li className="group flex items-center gap-3 p-3 bg-green-800/30 backdrop-blur-sm rounded-xl border border-green-700/30 hover:border-green-600/50 transition-all">
                <Phone size={18} className="text-green-400 shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+905376935691" className="text-green-200 hover:text-white text-sm font-medium transition-colors">+90 537 693 56 91</a>
              </li>
              <li className="group flex items-center gap-3 p-3 bg-green-800/30 backdrop-blur-sm rounded-xl border border-green-700/30 hover:border-green-600/50 transition-all">
                <Mail size={18} className="text-green-400 shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@cigertarim.com" className="text-green-200 hover:text-white text-sm font-medium transition-colors">info@cigertarim.com</a>
              </li>
              <li className="mt-4">
                <a
                  href="https://wa.me/905376935691"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} />
                  {t('footer.whatsappWrite')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mt-12 pt-10 border-t border-green-700/50">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center gap-2">
              <Shield size={22} className="text-green-400" />
              <span className="text-white font-bold text-base">{t('footer.securePayment')}</span>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <TroyLogo />
              <MastercardLogo />
              <VisaLogo />
              <PaypalLogo />
              <AxessLogo />
              <BonusLogo />
              <MaximumLogo />
              <CardFinansLogo />
              <WorldLogo />
              <PaycellLogo />
              <IninalLogo />
            </div>
            <div className="flex items-center justify-center gap-2 text-green-300 text-sm">
              <CreditCard size={16} />
              <span>{t('footer.allCardsValid')}</span>
            </div>
          </div>
        </div>

        {/* Copyright with enhanced styling */}
        <div className="border-t border-green-700/50 mt-10">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-lg">🌰</span>
              </div>
              <p className="text-green-300 text-sm font-medium">{t('footer.copyright')}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/gizlilik-politikasi" className="text-green-400 hover:text-white text-sm transition-colors hover:underline">{t('footer.privacy')}</Link>
              <span className="text-green-700">•</span>
              <Link to="/kullanim-kosullari" className="text-green-400 hover:text-white text-sm transition-colors hover:underline">{t('footer.terms')}</Link>
              <span className="text-green-700">•</span>
              <Link to="/cerez-politikasi" className="text-green-400 hover:text-white text-sm transition-colors hover:underline">{t('footer.cookies')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
