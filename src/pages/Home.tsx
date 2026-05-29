import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Clock, Phone, MessageCircle, ChevronLeft, ChevronRight, Award, Users, Package, Zap, TrendingUp, CheckCircle, Heart, Handshake, Sparkles, Leaf, ArrowUp, Wheat, Sprout, ShoppingBag, HardHat, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const [currentBanner, setCurrentBanner] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const banners = [
    { image: 'ChatGPT Image 29 May 2026 01_04_51.png', alt: 'tarim ürünleri', path: '/tarimürünleri' },
    { image: '/ChatGPT Image 29 May 2026 00_45_08.png', alt: 'Fındık Ticareti', path: '/findik-alim' },
    { image: '/ChatGPT Image 29 May 2026 00_47_57.png', alt: 'Nakliye Hizmetleri', path: '/nakliye' },
    { image: '/ChatGPT Image 29 May 2026 00_43_46.png', alt: 'İnşaat Malzemeleri', path: '/insaat-malzemeleri' },
    { image: '/ChatGPT Image 29 May 2026 00_46_21.png', alt: 'hirdavat', path: '/hirdavat' },
    { image: '/ChatGPT Image 29 May 2026 00_52_20.png', alt: 'tarim ürünleri', path: '/tarimürünleri' },
    { image: 'ChatGPT Image 29 May 2026 00_42_19.png', alt: 'tarim ürünleri', path: '/tarimürünleri' },
    

];
  const categories = [
    { title: t('nav.categories.findik'), desc: 'Üreticiden direkt alım hizmeti', icon: Wheat, path: '/findik-alim', image: 'findikalim.png', color: 'from-amber-500 to-orange-500', light: 'bg-amber-50 border-amber-200 hover:border-amber-400', iconBg: 'bg-amber-100 text-amber-700', highlight: true },
    { title: t('nav.categories.tarim'), desc: 'Ekipman, tohum ve tarım aletleri', icon: Sprout, path: '/tarim-urunleri', image: 'tarım.png', color: 'from-emerald-500 to-green-600', light: 'bg-emerald-50 border-emerald-200 hover:border-emerald-400', iconBg: 'bg-emerald-100 text-emerald-700' },
    { title: t('nav.categories.gida'), desc: 'Taze ve organik ürünler', icon: ShoppingBag, path: '/gida-urunleri', image: 'gida.png', color: 'from-orange-500 to-red-500', light: 'bg-orange-50 border-orange-200 hover:border-orange-400', iconBg: 'bg-orange-100 text-orange-700' },
    { title: t('nav.categories.insaat'), desc: 'Çimento, tuğla, demir ve daha fazlası', icon: HardHat, path: '/insaat-malzemeleri', image: 'insaat.png', color: 'from-slate-500 to-zinc-600', light: 'bg-slate-50 border-slate-200 hover:border-slate-400', iconBg: 'bg-slate-100 text-slate-700' },
    { title: t('nav.categories.gubre'), desc: 'Fındık ve tarım için özel gübre', icon: Leaf, path: '/zirai-gubreler', image: 'gübre.png', color: 'from-teal-500 to-cyan-600', light: 'bg-teal-50 border-teal-200 hover:border-teal-400', iconBg: 'bg-teal-100 text-teal-700' },
    { title: t('nav.categories.hirdavat'), desc: 'El aletleri ve donanım', icon: Wrench, path: '/hirdavat', image: 'hırdavat.png', color: 'from-blue-500 to-sky-600', light: 'bg-blue-50 border-blue-200 hover:border-blue-400', iconBg: 'bg-blue-100 text-blue-700' },
    { title: t('nav.categories.nakliye'), desc: 'Türkiye geneli güvenli taşıma', icon: Truck, path: '/nakliye', image: 'nakliye.png', color: 'from-red-500 to-rose-600', light: 'bg-red-50 border-red-200 hover:border-red-400', iconBg: 'bg-red-100 text-red-700' },
  ];

  const features = [
    { icon: Zap, title: t('feature.fastProcess'), desc: t('feature.fastProcessDesc') },
    { icon: Truck, title: t('feature.delivery'), desc: t('feature.deliveryDesc') },
    { icon: Star, title: t('feature.quality'), desc: t('feature.qualityDesc') },
    { icon: Clock, title: t('feature.support'), desc: t('feature.supportDesc') },
  ];

  const stats = [
    { value: '20+', label: t('stats.years'), icon: Award },
    { value: '500+', label: t('stats.customers'), icon: Users },
    { value: '1000+', label: t('stats.products'), icon: Package },
    { value: '2', label: t('stats.branches'), icon: Handshake },
  ];

  const testimonials = [
    { name: 'Ahmet Yıldız', role: t('testimonial.farmer'), text: 'Şeref bey sayesinde fındık satış işlerimiz çok kolaylaştı. Güvenilir ve samimi bir ortak.', initials: 'AY' },
    { name: 'Fatih Demir', role: t('testimonial.contractor'), text: 'Malzemelerin kalitesi ve fiyat uygunluğu mükemmel. Her zaman seçeceğim firmadır.', initials: 'FD' },
    { name: 'Selin Kaya', role: t('testimonial.businessOwner'), text: 'Taze ürünler hızlı teslimatla gelir. Müşterilerim de çok memnun kalıyor.', initials: 'SK' },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentBanner(p => (p + 1) % banners.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="overflow-hidden bg-slate-50">

      {/* Hero Slider — Full screen mobile, box layout desktop */}
      <section className="relative bg-slate-900 md:bg-gradient-to-br md:from-emerald-900 md:via-emerald-800 md:to-emerald-900 md:py-6">
        {/* Mobile: Full width, no padding */}
        <div className="md:max-w-7xl md:mx-auto md:px-4 md:sm:px-6">
          <div className="relative overflow-hidden md:rounded-3xl md:border-4 md:border-white/20 md:shadow-2xl w-full" style={{ height: '60vh', minHeight: '300px' }}>
            {banners.map((banner, i) => (
              <Link
                key={i}
                to={banner.path}
                className={`absolute inset-0 transition-opacity duration-1000 ${i === currentBanner ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}

            {/* Controls */}
            <button
              onClick={() => setCurrentBanner(p => (p - 1 + banners.length) % banners.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-10"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => setCurrentBanner(p => (p + 1) % banners.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-10"
            >
              <ChevronRight size={22} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {banners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentBanner(i)}
                  className={`transition-all duration-300 rounded-full ${i === currentBanner ? 'bg-white w-7 h-2.5' : 'bg-white/50 w-2.5 h-2.5 hover:bg-white/75'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features strip — Enhanced */}
      <section className="relative bg-gradient-to-r from-emerald-800 via-green-700 to-emerald-800 text-white py-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=%2740%27 height=%2740%27 viewBox=%270 0 40 40%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%271%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M0 0h20v20H0V0zm20 20h20v20H20V20z%27/%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="group flex items-center gap-3 p-3 md:p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/30 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-white/30 transition-all">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm leading-tight">{title}</p>
                  <p className="text-emerald-100 text-xs leading-tight">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — Enhanced with animations */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs font-bold mb-3">BAŞARILAR</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">20 Yıllık Deneyim</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map(({ value, label, icon: Icon }, idx) => (
              <div key={label} className="group relative" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative p-6 md:p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 text-center transform group-hover:-translate-y-2">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent mb-2">{value}</div>
                  <div className="text-gray-500 text-sm font-semibold">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories — Premium Grid */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%2310b981%27 fill-opacity=%271%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs font-bold mb-4 shadow-sm">
              <Sparkles size={14} />
              {t('section.ourServices')}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">{t('section.categories')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">{t('section.categoriesDesc')}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.path}
                  to={cat.path}
                  className={`group relative flex flex-col rounded-2xl border-2 overflow-hidden transition-all duration-300 ${cat.light} hover:shadow-2xl hover:-translate-y-2`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full p-5 md:p-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-125 transition-all duration-300 ${cat.iconBg} shadow-md group-hover:shadow-lg shrink-0`}>
                      <Icon size={22} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-sm md:text-base mb-1.5 leading-tight">{cat.title}</h3>
                      <p className="text-gray-200 text-xs leading-relaxed mb-3">{cat.desc}</p>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:gap-2 transition-all`}>
                      {t('section.explore')} <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {cat.highlight && (
                    <span className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg z-20">Özel</span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials — Premium Design */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%271%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 text-white text-xs font-bold border border-white/20">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              {t('section.testimonials')}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">{t('section.testimonials')}</h2>
            <p className="text-emerald-100 text-sm md:text-base">{t('section.testimonialsDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <div key={i} className="group relative" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/10 backdrop-blur-xl p-7 rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 transform group-hover:-translate-y-2">
                  {/* Stars */}
                  <div className="flex gap-1.5 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-amber-400 text-amber-400" />)}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-white/95 mb-6 italic text-sm leading-relaxed font-medium">"{item.text}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg">
                      {item.initials}
                    </div>
                    <div>
                      <p className="font-bold text-white">{item.name}</p>
                      <p className="text-emerald-200 text-xs">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-amber-700 via-amber-600 to-orange-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            <div className="text-white lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 text-sm font-medium">
                <Heart size={14} className="text-red-300" />
                {t('section.meetFamily')}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">{t('section.meetFamilyTitle')}</h2>
              <p className="text-amber-100 text-base leading-relaxed mb-4">{t('section.meetFamilyDesc')}</p>
              <p className="text-amber-100 text-sm mb-8 leading-relaxed">
                Şeref Ciğer'in liderliğinde, profesyonel ekibimizle her gün en iyi hizmeti sunmak için çalışıyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/905376935691?text=Ciğer%20Tarım%20ailesiyle%20daha%20yakından%20tanışmak%20istiyorum" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg text-sm">
                  <MessageCircle size={18} />
                  {t('section.whatsappContact')}
                </a>
                <Link to="/hakkimizda" className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3.5 rounded-xl font-bold transition-colors border border-white/30 text-sm">
                  <ArrowRight size={18} />
                  {t('section.moreInfo')}
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full max-w-sm lg:max-w-none mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl blur-2xl opacity-30" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30">
                  <img src="/seref_ciger.jpg" alt="Şeref Ciğer" className="w-full h-auto object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 px-5 py-2.5 rounded-xl shadow-xl border-2 border-amber-200">
                  <p className="font-bold text-sm">Şeref Ciğer</p>
                  <p className="text-xs text-gray-500">Kurucu & Yönetici</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fındık CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'52\' height=\'26\' viewBox=\'0 0 52 26\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'nonzero\'%3E%3Cpath d=\'M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4S10 12.21 10 10z\'/%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full mb-3 text-white text-xs font-semibold">
              <Wheat size={13} /> {t('hazelnut.specialService')}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t('hazelnut.title')}</h2>
            <p className="text-amber-100 text-sm md:text-base mb-6 leading-relaxed">{t('hazelnut.desc')}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://wa.me/905376935691?text=Fındık%20alım%20fiyatları%20hakkında%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg">
                <MessageCircle size={17} />
                {t('hazelnut.getPrice')}
              </a>
              <a href="tel:+905376935691" className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-bold text-sm border border-white/30">
                <Phone size={17} />
                {t('hazelnut.callNow')} +90 537 693 56 91
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us — Premium Cards */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs font-bold mb-4 shadow-sm">
              <CheckCircle size={14} />
              {t('whyUs.title')}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">{t('whyUs.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">{t('whyUs.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle, title: t('whyUs.experience'), desc: t('whyUs.experienceDesc'), color: 'from-emerald-500 to-green-600', light: 'bg-emerald-100 text-emerald-700' },
              { icon: TrendingUp, title: t('whyUs.prices'), desc: t('whyUs.pricesDesc'), color: 'from-blue-500 to-cyan-600', light: 'bg-blue-100 text-blue-700' },
              { icon: Shield, title: t('whyUs.safe'), desc: t('whyUs.safeDesc'), color: 'from-amber-500 to-orange-600', light: 'bg-amber-100 text-amber-700' },
              { icon: Truck, title: t('whyUs.fastDelivery'), desc: t('whyUs.fastDeliveryDesc'), color: 'from-teal-500 to-cyan-600', light: 'bg-teal-100 text-teal-700' },
              { icon: Users, title: t('whyUs.satisfaction'), desc: t('whyUs.satisfactionDesc'), color: 'from-pink-500 to-rose-600', light: 'bg-pink-100 text-pink-700' },
              { icon: Clock, title: t('whyUs.support'), desc: t('whyUs.supportDesc'), color: 'from-sky-500 to-blue-600', light: 'bg-sky-100 text-sky-700' },
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                <div className="relative p-7 rounded-2xl bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-125 transition-all duration-300 ${item.light}`}>
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2.5">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%2310b981\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs font-bold mb-4 shadow-sm">
              <Sparkles size={14} />
              GALERİ
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">Ciğer Tarım'ın Dünyası</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">20 yılda sunduğumuz hizmetlerin ve ürünlerin görsel özeti</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              'cigerkamyon.jpeg.jpg',
              'ciger.jpg',
              'fındık.jpg',
              '3.jpg',
              '4.jpg',
              '5.jpg',
              '6.jpg',
              '7.jpg',
            ].map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square cursor-pointer">
                <img src={img} alt={`Galeri ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-semibold">Ciğer Tarım</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0V0zm20 20h20v20H20V20z\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full mb-4 text-white/90 text-xs font-medium">
            <Sparkles size={14} />
            {t('cta.startNow')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('cta.title')}</h2>
          <p className="text-emerald-100 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">{t('cta.desc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/905376935691" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-800 px-8 py-4 rounded-xl font-bold text-sm hover:bg-emerald-50 transition-colors shadow-xl">
              <MessageCircle size={18} />
              {t('cta.whatsappButton')}
            </a>
            <a href="tel:+905376935691" className="inline-flex items-center justify-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-4 rounded-xl font-bold text-sm border-2 border-white/20">
              <Phone size={18} />
              +90 537 693 56 91
            </a>
          </div>
        </div>
      </section>

      
      {/* Premium Benefits Showcase */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 0h20v20H0V0zm20 20h20v20H20V20z\'/%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '24/7', label: 'Kesintisiz Hizmet', bg: 'from-emerald-500 to-emerald-600' },
              { number: '2 Saat', label: 'Şehir İçi Teslimat', bg: 'from-green-500 to-emerald-600' },
              { number: '%100', label: 'Ürün Garantisi', bg: 'from-emerald-400 to-green-500' },
              { number: '1000+', label: 'Memnun Müşteri Hikayesi', bg: 'from-green-400 to-emerald-500' },
            ].map((item, i) => (
              <div key={i} className="text-white text-center p-8 rounded-2xl bg-gradient-to-br" style={{
                backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`
              }}>
                <div className={`text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r ${item.bg} bg-clip-text text-transparent`}>{item.number}</div>
                <p className="text-green-50 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll-to-top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-24 right-6 z-40 w-12 h-12 bg-emerald-700 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Yukarı çık"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
