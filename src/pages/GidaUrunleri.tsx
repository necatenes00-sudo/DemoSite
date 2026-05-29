import { useState, useMemo, useEffect } from 'react';
import { Search, ShoppingBag, CheckCircle, Star, Shield, AlertTriangle, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  desc: string;
  image: string;
  badge?: string;
  category: string;
  isTobacco?: boolean;
}

const products: Product[] = [
  { id: 'gu-1', name: 'Günlük Taze Ekmek', desc: 'Her sabah taze pişirilmiş, geleneksel taş fırında ekmek. Tam buğday ve beyaz ekmek çeşitleri.', image: '1ekmek.png', badge: 'Taze', category: 'Fırın' },
  { id: 'gu-2', name: 'Köy Yumurtası (30 adet)', desc: 'Serbest gezen tavuklardan elde edilmiş, doğal sarı sarılı köy yumurtası.', image: '2yumurta.png', badge: 'Organik', category: 'Süt & Yumurta' },
  { id: 'gu-3', name: 'Süt (1L)', desc: 'Günlük taze, pastörize edilmiş tam yağlı inek sütü.', image: '3.png', badge: 'Taze', category: 'Süt & Yumurta' },
  { id: 'gu-4', name: 'Organik Bal (500g)', desc: 'Karadeniz dağlarının özünden elde edilmiş, sertifikalı organik çiçek balı.', image: '4.png', badge: 'Organik', category: 'Kahvaltılık' },
  { id: 'gu-5', name: 'Bakliyat Çeşitleri (1kg)', desc: 'Kuru fasulye, mercimek, nohut ve barbunya. Doğal tarla koşullarında yetiştirilmiş.', image: '5.png', category: 'Bakkal' },
  { id: 'gu-6', name: 'Kahvaltılık Çeşitleri', desc: 'Zeytin, peynir, bal ve reçel içeren geleneksel kahvaltı tabağı ürünleri.', image: '6.png', category: 'Kahvaltılık' },
  { id: 'gu-7', name: 'Yağ Çeşitleri (1L)', desc: 'Zeytinyağı, ayçiçeği ve mısır özü yağı. Sağlıklı ve doğal seçenekler.', image: '70.png', category: 'Bakkal' },
  { id: 'gu-8', name: 'Tuz (1kg)', desc: 'Doğal kaynak tuzu, katkısız ve mineral bakımınca zengin iri tuz.', image: '80.png', category: 'Bakkal' },
  { id: 'gu-9', name: 'Şeker (1kg)', desc: 'Pancar şekeri, rafine beyaz şeker. Her türlü kullanım için uygundur.', image: '9.png', category: 'Bakkal' },
  { id: 'gu-10', name: 'İçecek Çeşitleri', desc: 'Meyve suyu, gazlı içecek ve su çeşitleri. Soğuk veya oda sıcaklığı.', image: '10.png', category: 'İçecek' },
  { id: 'gu-11', name: 'Tütün Ürünleri (18+)', desc: 'Çeşitli marka sigara ve tütün ürünleri. SADECE 18 YAŞ VE ÜZERİNE SATILIR.', image: '11.png', badge: '18+', category: 'Tütün', isTobacco: true },
  { id: 'gu-12', name: 'Peynir Çeşitleri (500g)', desc: 'Beyaz peynir, kaşar, tulum peyniri. Tam yağlı, taze üretim.', image: '12.png', badge: 'Taze', category: 'Kahvaltılık' },
  { id: 'gu-13', name: 'Zeytin Çeşitleri (400g)', desc: 'Siyah Gemlik ve yeşil zeytin. Salamuralı, doğal ve çeşitli tatlarda.', image: '13.png', category: 'Kahvaltılık' },
  { id: 'gu-14', name: 'Reçel Çeşitleri (360g)', desc: 'Karadeniz ürünleriyle yapılmış çilek, kiraz, incir ve kayısı reçeli.', image: '14.png', category: 'Kahvaltılık' },
  { id: 'gu-15', name: 'Çay (500g)', desc: 'Rize çekimi, Karadeniz orijinli özgün siyah çay. Zengin aroma.', image: '15.png', badge: 'Popüler', category: 'Sıcak İçecek' },
  { id: 'gu-16', name: 'Kahve Çeşitleri', desc: 'Türk kahvesi, filtre kahve ve hazır kahve çeşitleri. Seçkin markalar.', image: '16.png', category: 'Sıcak İçecek' },
  { id: 'gu-17', name: 'Makarna Çeşitleri (500g)', desc: 'Spagetti, penne, bowtie ve erişte. Sertifikalı Türk buğdayından üretim.', image: '17.png', category: 'Bakkal' },
  { id: 'gu-18', name: 'Pirinç (1kg)', desc: 'Baldo ve osmancık pirinç çeşitleri. Pilav ve dolma için ideal.', image: '18.png', category: 'Bakkal' },
  { id: 'gu-19', name: 'Un Çeşitleri (1kg)', desc: 'Buğday, mısır ve tam buğday unu. Taş değirmende öğütülmüş seçenekler.', image: '19.png', category: 'Bakkal' },
  { id: 'gu-20', name: 'Atıştırmalık Ürünler', desc: 'Fındık, ceviz, leblebi ve çeşitli kuruyemiş. Günlük atıştırmalık seçenekler.', image: '20.png', category: 'Atıştırmalık' },
];

const categories = ['Tümü', 'Fırın', 'Süt & Yumurta', 'Kahvaltılık', 'Bakkal', 'İçecek', 'Sıcak İçecek', 'Atıştırmalık', 'Tütün'];

function TobaccoCard({ product }: { product: Product }) {
  const [showPopup, setShowPopup] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const { addItem } = useCart();

  const handleConfirm = () => {
    setConfirmed(true);
    setShowPopup(false);
    addItem({ id: product.id, name: product.name, price: 'Fiyat için arayınız', image: product.image, category: 'Gıda Ürünleri' });
  };

  return (
    <>
      <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-orange-200 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 relative">
        {/* Blurred image with 18+ overlay */}
        <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: '4/3' }}>
          <img src={product.image} alt={product.name} className="w-full h-full object-cover blur-sm opacity-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/60">
            <AlertTriangle size={28} className="text-amber-400 mb-1.5" />
            <span className="text-white font-bold text-lg">18+</span>
            <span className="text-white/80 text-xs">Yaş Sınırı</span>
          </div>
          <span className="absolute top-2.5 left-2.5 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">18+</span>
        </div>
        <div className="p-3.5 md:p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-gray-800 text-xs md:text-sm leading-snug mb-1.5">{product.name}</h3>
          <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2 flex-1">{product.desc}</p>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex items-center gap-1 text-emerald-600"><CheckCircle size={11} /><span className="text-xs text-gray-500 hidden sm:inline">Stokta</span></div>
            <div className="flex items-center gap-1 text-amber-500"><Star size={11} /><span className="text-xs text-gray-500 hidden sm:inline">Kaliteli</span></div>
            <div className="flex items-center gap-1 text-red-500"><AlertTriangle size={11} /><span className="text-xs text-gray-500 hidden sm:inline">18+ Uyarı</span></div>
          </div>
          <button
            onClick={() => confirmed ? addItem({ id: product.id, name: product.name, price: 'Fiyat için arayınız', image: product.image, category: 'Gıda Ürünleri' }) : setShowPopup(true)}
            className="w-full flex items-center justify-center gap-1.5 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-semibold bg-red-700 hover:bg-red-800 text-white shadow-sm transition-all"
          >
            <Shield size={14} />
            <span>Yaşımı Onaylıyorum & Ekle</span>
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-7 relative">
            <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
            <div className="text-center mb-5">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle size={30} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Yaş Doğrulama</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Bu ürün <strong>18 yaş ve üzeri</strong> kişilere satılmaktadır. Devam ederek 18 yaşından büyük olduğunuzu beyan etmiş olursunuz.
              </p>
            </div>
            <div className="text-xs text-gray-400 bg-amber-50 border border-amber-200 rounded-xl p-3 mb-5 text-center">
              Tütün ürünleri 18 yaş altına satılamaz. Yanlış beyan yasal sorumluluk doğurur.
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowPopup(false)} className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors">
                Vazgeç
              </button>
              <button onClick={handleConfirm} className="flex-1 py-3 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-colors">
                18+ Onaylıyorum
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function RegularCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({ id: product.id, name: product.name, price: 'Fiyat için arayınız', image: product.image, category: 'Gıda Ürünleri' });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-orange-200 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: '4/3' }}>
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {product.badge && (
          <span className="absolute top-2.5 left-2.5 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">{product.badge}</span>
        )}
      </div>
      <div className="p-3.5 md:p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-800 text-xs md:text-sm leading-snug mb-1.5 line-clamp-2">{product.name}</h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2 flex-1">{product.desc}</p>
        <div className="flex items-center gap-2.5 mb-3">
          <div className="flex items-center gap-1 text-emerald-600"><CheckCircle size={11} /><span className="text-xs text-gray-500 hidden sm:inline">Stokta</span></div>
          <div className="flex items-center gap-1 text-amber-500"><Star size={11} /><span className="text-xs text-gray-500 hidden sm:inline">Kaliteli</span></div>
          <div className="flex items-center gap-1 text-blue-500"><Shield size={11} /><span className="text-xs text-gray-500 hidden sm:inline">Güvenli</span></div>
        </div>
        <button onClick={handleAdd}
          className={`w-full flex items-center justify-center gap-1.5 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${added ? 'bg-emerald-100 text-emerald-800' : 'bg-orange-600 hover:bg-orange-700 text-white shadow-sm'}`}>
          {added ? <><CheckCircle size={14} /><span>Sepete Eklendi</span></> : <><ShoppingBag size={14} /><span>Sepete Ekle</span></>}
        </button>
      </div>
    </div>
  );
}

export default function GidaUrunleri() {
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
      <section className="relative bg-gradient-to-br from-orange-700 via-orange-600 to-amber-700 text-white py-14 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <ShoppingBag size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Doğal ve Günlük Taze Ürünler</h1>
              <p className="text-orange-100 text-sm mt-1">Organik ve taze gıda çeşitleri — {products.length} ürün</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            {[{ icon: CheckCircle, text: 'Günlük Taze' }, { icon: Star, text: 'Organik Ürünler' }, { icon: Shield, text: 'Güvenli Gıda' }].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white/15 px-3 py-1.5 rounded-lg text-sm">
                <Icon size={14} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-white border-b border-gray-100 sticky top-[64px] z-40 shadow-md transition-all duration-300 ${showFilters ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="relative flex-1 max-w-xs">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Ürün ara..." value={search} onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeCategory === cat ? 'bg-orange-600 text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  {cat}
                </button>
              ))}
            </div>
            <select value={sort} onChange={e => setSort(e.target.value as typeof sort)}
              className="text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-orange-500 ml-auto">
              <option value="default">Varsayılan</option>
              <option value="az">A'dan Z'ye</option>
              <option value="za">Z'den A'ya</option>
            </select>
          </div>
          <p className="text-xs text-gray-400 mt-2">{filtered.length} ürün listeleniyor</p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Search size={40} className="mx-auto mb-3 opacity-30" />
              <p className="font-medium">Ürün bulunamadı</p>
              <button onClick={() => { setSearch(''); setActiveCategory('Tümü'); }} className="mt-3 text-orange-600 text-sm hover:underline">Filtreleri temizle</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
              {filtered.map(p => p.isTobacco ? <TobaccoCard key={p.id} product={p} /> : <RegularCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
