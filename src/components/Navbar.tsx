import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, MapPin, ChevronDown, MessageCircle, Instagram, Leaf, Wheat, ShoppingBag, HardHat, Sprout, Wrench, Truck as TruckIcon, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const categoryIcons: Record<string, React.ElementType> = {
  findik: Wheat,
  tarim: Sprout,
  gida: ShoppingBag,
  insaat: HardHat,
  gubre: Leaf,
  hirdavat: Wrench,
  nakliye: TruckIcon,
};

const categoryColors: Record<string, string> = {
  findik: 'bg-amber-100 text-amber-700',
  tarim: 'bg-emerald-100 text-emerald-700',
  gida: 'bg-orange-100 text-orange-700',
  insaat: 'bg-slate-100 text-slate-700',
  gubre: 'bg-teal-100 text-teal-700',
  hirdavat: 'bg-blue-100 text-blue-700',
  nakliye: 'bg-red-100 text-red-700',
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  const categories = [
    { key: 'findik', label: t('nav.categories.findik'), path: '/findik-alim', desc: 'Üreticiden direkt alım', highlight: true },
    { key: 'tarim', label: t('nav.categories.tarim'), path: '/tarim-urunleri', desc: 'Ekipman ve tohum' },
    { key: 'gida', label: t('nav.categories.gida'), path: '/gida-urunleri', desc: 'Taze ve organik' },
    { key: 'insaat', label: t('nav.categories.insaat'), path: '/insaat-malzemeleri', desc: 'Yapı malzemeleri' },
    { key: 'gubre', label: t('nav.categories.gubre'), path: '/zirai-gubreler', desc: 'Fındık gübresi' },
    { key: 'hirdavat', label: t('nav.categories.hirdavat'), path: '/hirdavat', desc: 'El aletleri' },
    { key: 'nakliye', label: t('nav.categories.nakliye'), path: '/nakliye', desc: 'Türkiye geneli' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top contact bar */}
      <div className="relative bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 text-white text-xs py-2.5 hidden lg:block overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400" />
        <div className="relative max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <a href="tel:+905376935691" className="flex items-center gap-2 hover:text-amber-300 transition-colors group">
              <div className="w-6 h-6 bg-emerald-700 group-hover:bg-amber-600 rounded-md flex items-center justify-center transition-colors">
                <Phone size={11} />
              </div>
              <span className="font-medium tracking-wide">+90 537 693 56 91</span>
            </a>
            <div className="h-3.5 w-px bg-emerald-700" />
            <a href="https://wa.me/905376935691" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-300 transition-colors group">
              <div className="w-6 h-6 bg-emerald-700 group-hover:bg-green-600 rounded-md flex items-center justify-center transition-colors">
                <MessageCircle size={11} />
              </div>
              <span className="font-medium">WhatsApp</span>
            </a>
            <div className="h-3.5 w-px bg-emerald-700" />
            <div className="flex items-center gap-2 text-emerald-200">
              <MapPin size={11} />
              <span>Ordu Gürgentepe & Fatsa</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/ciger_tarm_urunleri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-300 transition-colors group">
              <div className="w-6 h-6 bg-emerald-700 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-orange-400 rounded-md flex items-center justify-center transition-all">
                <Instagram size={11} />
              </div>
              <span className="font-medium">Instagram</span>
            </a>
            <div className="h-3.5 w-px bg-emerald-700" />
            <div className="flex items-center gap-1.5 text-amber-300">
              <Leaf size={12} />
              <span className="font-semibold">Güvenilir Ticaret, Kaliteli Hizmet</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 z-50">
        <div className={`relative bg-white/97 backdrop-blur-lg border-b border-gray-100/80 shadow-sm transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'min-h-[64px]' : 'min-h-[88px] lg:min-h-[100px]'}`}>

              {/* Logo */}
              <Link to="/" className="flex items-center shrink-0 group">
                <img
                  src="/Baru_E-Sports_[Kurtarilan]-01.png"
                  alt="Ciğer Tarım Logo"
                  className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${scrolled ? 'h-14' : 'h-20 lg:h-24'}`}
                />
              </Link>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
                <Link to="/" className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${isActive('/') ? 'text-emerald-700 bg-emerald-50' : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/50'}`}>
                  {t('nav.home')}
                  {isActive('/') && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-emerald-600 rounded-full" />}
                </Link>

                {/* Mega Dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className={`relative flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${dropdownOpen ? 'text-emerald-700 bg-emerald-50' : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/50'}`}>
                    {t('nav.products')}
                    <ChevronDown size={15} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Invisible bridge to prevent gap closing */}
                  <div className="absolute top-full left-0 right-0 h-3" />

                  {/* Mega Panel */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${dropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                    <div className="p-2">
                      <div className="grid grid-cols-2 gap-1">
                        {categories.map(cat => {
                          const Icon = categoryIcons[cat.key];
                          const colorClass = categoryColors[cat.key];
                          return (
                            <Link
                              key={cat.path}
                              to={cat.path}
                              onClick={() => setDropdownOpen(false)}
                              className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${cat.highlight ? 'bg-amber-50 hover:bg-amber-100 col-span-2' : 'hover:bg-gray-50'}`}
                            >
                              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${colorClass}`}>
                                <Icon size={17} />
                              </div>
                              <div className="min-w-0">
                                <p className={`text-sm font-semibold leading-tight ${cat.highlight ? 'text-amber-800' : 'text-gray-800'}`}>{cat.label}</p>
                                <p className={`text-xs mt-0.5 ${cat.highlight ? 'text-amber-600' : 'text-gray-500'}`}>{cat.desc}</p>
                              </div>
                              <ChevronRight size={14} className={`ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${cat.highlight ? 'text-amber-600' : 'text-gray-400'}`} />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                    <div className="border-t border-gray-50 px-4 py-3 bg-gray-50/50 flex items-center gap-2">
                      <Leaf size={13} className="text-emerald-600" />
                      <span className="text-xs text-gray-500">Tüm kategoriler için WhatsApp ile iletişime geçin</span>
                    </div>
                  </div>
                </div>

                <Link to="/hakkimizda" className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${isActive('/hakkimizda') ? 'text-emerald-700 bg-emerald-50' : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/50'}`}>
                  {t('nav.about')}
                  {isActive('/hakkimizda') && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-emerald-600 rounded-full" />}
                </Link>

                <Link to="/iletisim" className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${isActive('/iletisim') ? 'text-emerald-700 bg-emerald-50' : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/50'}`}>
                  {t('nav.contact')}
                  {isActive('/iletisim') && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-emerald-600 rounded-full" />}
                </Link>
              </div>

              {/* Right actions */}
              <div className="flex items-center gap-2">
                <a href="tel:+905376935691" className="hidden md:flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-md">
                  <Phone size={14} />
                  <span className="hidden xl:inline">{t('nav.call')}</span>
                </a>
                <a href="https://wa.me/905376935691" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-md">
                  <MessageCircle size={14} />
                  <span className="hidden xl:inline">WhatsApp</span>
                </a>
                <LanguageSwitcher />
                <button onClick={() => setIsOpen(true)} className="relative p-2.5 text-gray-600 hover:text-emerald-700 bg-gray-100 hover:bg-emerald-50 rounded-lg transition-all duration-200 group">
                  <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow">
                      {totalItems}
                    </span>
                  )}
                </button>
                <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2.5 text-gray-600 hover:text-emerald-700 bg-gray-100 hover:bg-emerald-50 rounded-lg transition-all duration-200">
                  {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[90vh]' : 'max-h-0'}`}>
          <div className="bg-white border-t border-gray-100 shadow-xl overflow-y-auto max-h-[90vh]">
            <div className="px-4 py-3 space-y-1">
              <Link to="/" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${isActive('/') ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                {t('nav.home')}
              </Link>

              {/* Products accordion */}
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span>{t('nav.products')}</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileProductsOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pl-2 pb-1 space-y-0.5">
                  {categories.map(cat => {
                    const Icon = categoryIcons[cat.key];
                    const colorClass = categoryColors[cat.key];
                    return (
                      <Link
                        key={cat.path}
                        to={cat.path}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors ${cat.highlight ? 'bg-amber-50 text-amber-800 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colorClass}`}>
                          <Icon size={15} />
                        </div>
                        {cat.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link to="/hakkimizda" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${isActive('/hakkimizda') ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                {t('nav.about')}
              </Link>
              <Link to="/iletisim" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${isActive('/iletisim') ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                {t('nav.contact')}
              </Link>
            </div>

            <div className="px-4 pb-4 flex flex-col gap-2 border-t border-gray-100 pt-3">
              <div className="flex justify-center mb-1">
                <LanguageSwitcher />
              </div>
              <a href="tel:+905376935691" className="flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-xl font-bold text-sm shadow-sm">
                <Phone size={16} />
                {t('nav.call')}
              </a>
              <a href="https://wa.me/905376935691" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold text-sm shadow-sm">
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
