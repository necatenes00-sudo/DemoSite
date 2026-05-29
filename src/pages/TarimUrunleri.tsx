import { useState, useMemo, useEffect } from 'react';
import { Search, Sprout, CheckCircle, Star, Shield } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 'tu-1', name: 'Bahçe Eldiveni', desc: 'Dayanıklı, nefes alabilir deri ve pamuk karışımı bahçe eldiveni. Çiftçi tipi.', image: 'ChatGPT Image 29 May 2026 01_17_08.png', badge: 'Popüler', category: 'El Aleti' },
  { id: 'tu-2', name: 'Ot Motoru Misinası', desc: 'Her ot motoruyla uyumlu, çift hatlı dayanıklı naylon misina. 2.7mm kalınlık.', image: 'ChatGPT Image 29 May 2026 01_22_12.png', category: 'Ekipman' },
  { id: 'tu-3', name: 'Bıçkı ', desc: 'Karadeniz dağlarına uygun, profesyonel bıçkı testere. Güçlü motor, uzun çubuk.', image: 'ChatGPT Image 29 May 2026 01_23_45.png', category: 'Ekipman' },
  { id: 'tu-4', name: 'Fındık Çuvalı', desc: 'Sağlam dokuma, 50 kg kapasiteli fındık depolama ve taşıma çuvalı.', image: 'ChatGPT Image 29 May 2026 01_25_58.png', badge: 'Sezon', category: 'Hasat' },
  { id: 'tu-5', name: 'Fındık Çadırı', desc: 'Yağmur ve güneşe dayanıklı, fındık serme ve kurutma çadırı. 10x15m.', image: 'ChatGPT Image 29 May 2026 01_30_09.png', badge: 'Sezon', category: 'Hasat' },
  { id: 'tu-6', name: 'Ot Maskesi (Toz Maskesi)', desc: 'Tarım ilacı ve ot biçimi sırasında ağız-burun koruması. N95 kalitesinde.', image: 'ChatGPT Image 29 May 2026 01_32_48.png', category: 'Koruyucu' },
  { id: 'tu-7', name: 'Bahçe Hortumu (25m)', desc: 'UV dayanıklı, yarım inçlik esnek bahçe sulama hortumu. Bağlantı aparatlı.', image: 'ChatGPT Image 29 May 2026 01_46_00.png', category: 'Sulama' },
  { id: 'tu-8', name: 'Tırmık', desc: 'Galvanizli çelik dişli, ahşap saplı 16 dişli bahçe ve tarla tırmığı.', image: 'ChatGPT Image 29 May 2026 01_51_28.png', category: 'El Aleti' },
  { id: 'tu-9', name: 'Tel Örgü (50m Rulo)', desc: 'Galvanizli, bahçe ve tarla çitleme için 50 metre tel örgü rulosu. 1.5mm tel.', image: 'ChatGPT Image 29 May 2026 01_54_10.png', category: 'Çit & Çevre' },
  { id: 'tu-10', name: 'İlaç Pompası Şişesi', desc: 'Manüel sırt pompası, 16 litre kapasiteli tarım ilacı uygulama şişesi.', image: 'ChatGPT Image 29 May 2026 01_56_12.png', category: 'Ekipman' },
  { id: 'tu-11', name: 'Budama Makası', desc: 'Ergonomik kavrama, paslanmaz çelik bıçaklı profesyonel budama makası.', image: 'ChatGPT Image 29 May 2026 01_59_10.png', category: 'El Aleti' },
  { id: 'tu-12', name: 'Kürek', desc: 'Ağır hizmet tipi, çelik başlıklı ve dayanıklı ahşap saplı tarım küreği.', image: 'ChatGPT Image 29 May 2026 02_01_42.png', category: 'El Aleti' },
  { id: 'tu-13', name: 'İlaç Motoru', desc: 'Sertifikalı , Motorlu Tarım Aletleri', image: 'ChatGPT Image 29 May 2026 02_05_32.png', category: 'El Aleti' },
  { id: 'tu-14', name: 'Sulama Aparatları Seti', desc: 'Damla sulama, yağmurlama ve sprinkler aparatları. Komple bağlantı seti.', image: 'ChatGPT Image 29 May 2026 02_08_18.png', category: 'Sulama' },
  { id: 'tu-15', name: 'Çapa (El Çapası)', desc: 'Paslanmaz çelik çapa bıçağı, ayarlanabilir uzunlukta alüminyum sap.', image: 'ChatGPT Image 29 May 2026 02_10_10.png', category: 'El Aleti' },
  { id: 'tu-16', name: 'Tarım İpi (Bağlama İpi)', desc: 'Doğal sisal tarım bağlama ipi. 200m makara. Domates ve sebze bağlamaya uygun.', image: 'ChatGPT Image 29 May 2026 02_13_01.png', category: 'Hasat' },
  { id: 'tu-17', name: 'Fındık Toplama Filesi', desc: 'Fındık hasadında kullanılan, 6x8m büyüklüğünde hasır toplama filesi.', image: 'ChatGPT Image 29 May 2026 02_15_15.png', badge: 'Sezon', category: 'Hasat' },
  { id: 'tu-18', name: 'Sera Naylonu (100m)', desc: 'UV katkılı, 200 micron kalınlıkta seracılık naylonu. 4m genişlik.', image: 'ChatGPT Image 29 May 2026 13_59_15.png', category: 'Sera' },
  { id: 'tu-19', name: 'Motorlu Testere', desc: 'Sertifikalı , Motorlu Tarım Aletleri', image: 'ChatGPT Image 29 May 2026 14_03_35.png', category: 'Ekipman' },
  { id: 'tu-20', name: 'Ot Motoru', desc: 'Sertifikalı, Motorlu Tarım Aletleri', image: 'ChatGPT Image 29 May 2026 14_06_03.png', badge: 'Önerilen', category: 'Fidan & Tohum' },
];

const categories = ['Tümü', 'El Aleti', 'Ekipman', 'Hasat', 'Sulama', 'Koruyucu', 'Çit & Çevre', 'Sera', 'Fidan & Tohum'];

export default function TarimUrunleri() {
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
      <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-700 to-green-800 text-white py-14 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'52\' height=\'26\' viewBox=\'0 0 52 26\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'nonzero\'%3E%3Cpath d=\'M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4S10 12.21 10 10z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <Sprout size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Profesyonel Tarım Ekipmanları</h1>
              <p className="text-emerald-200 text-sm mt-1">Tarım ihtiyaçlarınız için tek adres — {products.length} ürün</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            {[{ icon: CheckCircle, text: 'Stokta Hazır' }, { icon: Star, text: 'Kaliteli Ürünler' }, { icon: Shield, text: 'Güvenli Ticaret' }].map(({ icon: Icon, text }) => (
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
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Ürün ara..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
            {/* Category pills */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeCategory === cat ? 'bg-emerald-700 text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Sort */}
            <select
              value={sort}
              onChange={e => setSort(e.target.value as typeof sort)}
              className="text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500 ml-auto"
            >
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
              <button onClick={() => { setSearch(''); setActiveCategory('Tümü'); }} className="mt-3 text-emerald-600 text-sm hover:underline">Filtreleri temizle</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
              {filtered.map(p => (
                <ProductCard key={p.id} id={p.id} name={p.name} description={p.desc} price="Fiyat için arayınız" image={p.image} category="Tarım Ürünleri" badge={p.badge} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
