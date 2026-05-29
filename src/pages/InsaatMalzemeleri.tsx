import { useState, useMemo, useEffect } from 'react';
import { Search, HardHat, CheckCircle, Star, Shield } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 'im-1', name: 'Portland Çimento (50kg)', desc: 'CEM I 42.5R standartında yüksek dayanımlı Portland çimentosu. Her türlü inşaat için.', image: 'ChatGPT Image 29 May 2026 14_36_26.png', badge: 'Çok Satan', category: 'Bağlayıcı' },
  { id: 'im-2', name: 'Bims Tuğla (adet)', desc: 'Hafif yapılı, ısı ve ses yalıtımlı bims tuğla. 19x19x39 standart ölçü.', image: 'ChatGPT Image 29 May 2026 14_38_46.png', category: 'Duvar' },
  { id: 'im-3', name: 'Alçı (25kg Torba)', desc: 'İnce sıva ve iç mekan uygulamaları için yüksek kaliteli yapı alçısı.', image: 'ChatGPT Image 29 May 2026 14_41_29.png', category: 'Bağlayıcı' },
  { id: 'im-4', name: 'Sıva Harcı', desc: 'Hazır karma dış ve iç sıva harcı, uygulaması kolay çimento esaslı.', image: 'ChatGPT Image 29 May 2026 14_44_37.png', category: 'Bağlayıcı' },
  { id: 'im-5', name: 'Boru Çeşitleri (PVC/Galvaniz)', desc: 'Su, doğalgaz ve çöp için PVC, PE ve galvaniz boru. Her ölçüde mevcut.', image: 'ChatGPT Image 29 May 2026 14_46_57.png', category: 'Tesisat' },
  { id: 'im-6', name: 'Menfez Boru (Koruge)', desc: 'Yol altı ve drenaj sistemleri için dayanıklı HDPE koruge menfez boru.', image: 'ChatGPT Image 29 May 2026 14_51_32.png', category: 'Tesisat' },
  { id: 'im-7', name: 'Çivi Çeşitleri (kg)', desc: 'Yapı, çatı ve beton çivisi çeşitleri. Galvanizli ve siyah seçenekler.', image: 'ChatGPT Image 29 May 2026 14_55_31.png', category: 'Bağlantı' },
  { id: 'im-8', name: 'Boya Fırçası Seti', desc: 'Profesyonel boyacı fırçası ve rulo seti. Her türlü yüzey uygulaması için.', image: 'ChatGPT Image 29 May 2026 14_58_22.png', category: 'Boya' },
  { id: 'im-9', name: 'İnşaat Demiri (12mm)', desc: 'TSE standartında 420B kalitesinde nervürlü inşaat demiri. 12 metre boy.', image: 'ChatGPT Image 29 May 2026 15_01_05.png', badge: 'Çok Satan', category: 'Yapı İskeleti' },
  { id: 'im-10', name: 'İnşaat Kumu (ton)', desc: 'Yıkanmış, standart kalitede ince kum. Sıva, beton ve harç için uygundur.', image: 'ChatGPT Image 29 May 2026 15_19_56.png', category: 'Agrega' },
  { id: 'im-11', name: 'Kireç (Toz)', desc: 'Sönmüş sönmemiş kireç çeşitleri. Badana, sıva ve zemin iyileştirme.', image: 'ChatGPT Image 29 May 2026 15_22_47.png', category: 'Bağlayıcı' },
  { id: 'im-12', name: 'Seramik Yapıştırıcısı (25kg)', desc: 'C2 sınıfı fayans ve seramik yapıştırıcı. İç ve dış mekân uygulamaları.', image: 'ChatGPT Image 29 May 2026 15_25_43.png', category: 'Döşeme' },
  { id: 'im-13', name: 'Fayans & Seramik (m²)', desc: 'Geniş model ve renk yelpazesiyle yer ve duvar seramiği. Birinci sınıf.', image: 'ChatGPT Image 29 May 2026 15_27_47.png', category: 'Döşeme' },
  { id: 'im-14', name: 'PVC Boru & Bağlantı', desc: 'Su tesisatı için basınçlı PVC boru ve bağlantı ekipmanları. PN10-PN16.', image: 'ChatGPT Image 29 May 2026 15_30_58.png', category: 'Tesisat' },
  { id: 'im-15', name: 'Su Tesisatı Seti', desc: 'Komple mutfak ve banyo su tesisat malzemesi seti. Vana, rakort ve dirsek.', image: 'ChatGPT Image 29 May 2026 15_35_57.png', category: 'Tesisat' },
  { id: 'im-16', name: 'Beton Harcı (Hazır)', desc: 'Hazır karma kuru beton harcı. Küçük inşaat ve tamir işlemleri için ideal.', image: 'ChatGPT Image 29 May 2026 15_38_33.png', category: 'Bağlayıcı' },
  { id: 'im-17', name: 'Silikon (Üniversal)', desc: 'Su geçirmez, elastik şeffaf ve renkli üniversal yapı silikonu. 280ml.', image: 'ChatGPT Image 29 May 2026 15_41_15.png', category: 'Kimyasal' },
  { id: 'im-18', name: 'Matkap Uçları Seti', desc: 'Beton, ahşap ve metal için çoklu matkap ucu seti. 19 parça takım.', image: 'ChatGPT Image 29 May 2026 15_42_39.png', category: 'Bağlantı' },
  { id: 'im-19', name: 'İnşaat Elyafı (Polipropilen)', desc: 'Beton çatlama ve büzülmeyi önleyen polipropilen inşaat elyafı. 900gr/m²', image: 'ChatGPT Image 29 May 2026 15_45_40.png', category: 'Yapı İskeleti' },
  { id: 'im-20', name: 'Derz Dolgu Malzemesi', desc: 'Seramik, fayans ve mermer derzleri için hazır dolgu ve derz dolgu malzemesi.', image: 'ChatGPT Image 29 May 2026 15_47_12.png', category: 'Döşeme' },
];

const categories = ['Tümü', 'Bağlayıcı', 'Duvar', 'Yapı İskeleti', 'Agrega', 'Tesisat', 'Döşeme', 'Bağlantı', 'Boya', 'Kimyasal'];

export default function InsaatMalzemeleri() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [sort, setSort] = useState<'default' | 'az' | 'za'>('default');
  const [showFilters, setShowFilters] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setShowFilters(false);
      } else {
        setShowFilters(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const filtered = useMemo(() => {
    let list = products.filter(p =>
      (activeCategory === 'Tümü' || p.category === activeCategory) &&
      (p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase()))
    );
    if (sort === 'az') list = [...list].sort((a, b) => a.name.localeCompare(b.name, 'tr'));
    if (sort === 'za') list = [...list].sort((a, b) => b.name.localeCompare(a.name, 'tr'));
    return list;
  }, [search, activeCategory, sort]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-zinc-800 text-white py-14 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 0h20v20H0V0zm20 20h20v20H20V20z\'/%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <HardHat size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">İnşaat Malzemeleri</h1>
              <p className="text-slate-300 text-sm mt-1">Sağlam yapılar, güvenilir malzemeler — {products.length} ürün</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            {[{ icon: CheckCircle, text: 'TSE Standartları' }, { icon: Star, text: 'Yüksek Kalite' }, { icon: Shield, text: 'Güvenli Ticaret' }].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white/15 px-3 py-1.5 rounded-lg text-sm">
                <Icon size={14} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className={`bg-white border-b border-gray-100 sticky top-[64px] z-40 shadow-md transition-all duration-300 ${showFilters ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="relative flex-1 max-w-xs">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Ürün ara..." value={search} onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-100" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeCategory === cat ? 'bg-slate-700 text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  {cat}
                </button>
              ))}
            </div>
            <select value={sort} onChange={e => setSort(e.target.value as typeof sort)}
              className="text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-slate-500 ml-auto">
              <option value="default">Varsayılan</option>
              <option value="az">A'dan Z'ye</option>
              <option value="za">Z'den A'ya</option>
            </select>
          </div>
          <p className="text-xs text-gray-400 mt-2">{filtered.length} ürün listeleniyor</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Search size={40} className="mx-auto mb-3 opacity-30" />
              <p className="font-medium">Ürün bulunamadı</p>
              <button onClick={() => { setSearch(''); setActiveCategory('Tümü'); }} className="mt-3 text-slate-600 text-sm hover:underline">Filtreleri temizle</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
              {filtered.map(p => (
                <ProductCard key={p.id} id={p.id} name={p.name} description={p.desc} price="Fiyat için arayınız" image={p.image} category="İnşaat Malzemeleri" badge={p.badge} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
