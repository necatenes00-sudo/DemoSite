import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 'zg-1',
    name: 'Can Kalsiyum Amonyum Nitrat',
    desc: 'Findik bahceleri icin ozel formule edilmis, potasyum ve magnezyum zengin gubre. 25 kg.',
    price: 'Fiyat icin arayiniz',
    image: 'kalsiyum.png',
    badge: 'Findiga Ozel',
  },
  {
    id: 'zg-2',
    name: 'Azotlu Gubre (Ure) 25kg',
    desc: '%46 N icerigi ile yuksek azotlu ure gubresi. Yaprak ve kok gubre olarak kullanilabilir.',
    price: 'Fiyat icin arayiniz',
    image: '%26.png',
    badge: 'Cok Satan',
  },
  
];

export default function ZiraiGubreler() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-teal-800 via-teal-700 to-cyan-800 text-white py-14 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Ziraat Gübreler</h1>
          <p className="text-teal-100 text-sm md:text-base max-w-2xl">Fındık ve tarım bahçeleri için özel formüle edilmiş, yüksek verimli zirai gübre çeşitleri.</p>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {['Fındık Gübresi', 'Azotlu Gübreler', 'Fosforlu Gübreler', 'Organik Gübreler', 'Mikro Elementler'].map(tag => (
              <span key={tag} className="bg-teal-50 text-teal-800 text-xs px-3 py-1.5 rounded-lg font-medium border border-teal-200 cursor-pointer hover:bg-teal-100 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {products.map(p => (
              <ProductCard key={p.id} id={p.id} name={p.name} description={p.desc} price={p.price} image={p.image} category="Zirai Gubreler" badge={p.badge} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
