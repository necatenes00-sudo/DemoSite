import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 'hd-1',
    name: 'Mengene (150mm)',
    desc: 'Masaya monte edilen, 150mm agiz genisliginde sanayi tipi tezgah mengene.',
    price: 'Fiyat icin arayiniz',
    image: 'mengene.png',
  },
  {
    id: 'hd-2',
    name: 'El Matkabin Seti',
    desc: '13 parcali profesyonel el matkabi seti. HSS sert metal matkap uclarinı icerir.',
    price: 'Fiyat icin arayiniz',
    image: 'matkap.png',
    badge: 'Set',
  },
  {
    id: 'hd-3',
    name: 'Cekic Seti (3 Parca)',
    desc: 'Kalin, normal ve kaucuk cekicten olusan 3 parcali profesyonel cekic seti.',
    price: 'Fiyat icin arayiniz',
    image: 'çekiç.png',
  },
  {
    id: 'hd-4',
    name: 'Tornavida Seti (12 Parca)',
    desc: 'Yıldız ve düz agizli, paslanmaz celik uclu 12 parcali tornavida seti.',
    price: 'Fiyat icin arayiniz',
    image: 'tornavida.png',
    badge: 'Set',
  },
  {
    id: 'hd-5',
    name: 'M10 Vida Kutusu (100 Adet)',
    desc: 'Galvaniz kaplanmis, cilalı M10 inbus civi seti. Her turlu kullanim icin.',
    price: 'Fiyat icin arayiniz',
    image: 'vida.png',
  },
  {
    id: 'hd-6',
    name: 'Plastik Dubel (100 Adet)',
    desc: 'Beton ve tugla icin 6mm ve 8mm karısık plastik dubel paketi.',
    price: 'Fiyat icin arayiniz',
    image: 'dubel.png',
  },
  {
    id: 'hd-7',
    name: 'Boru Anahtarı Seti',
    desc: '250mm ve 350mm boyutlarında 2 parcali profesyonel boru anahtarı seti.',
    price: 'Fiyat icin arayiniz',
    image: 'anahtar.png',
  },
  {
    id: 'hd-8',
    name: 'Zincir (metre)',
    desc: '6mm, 8mm ve 10mm galvaniz celik zincir. Metre bazinda satilmaktadir.',
    price: 'Fiyat icin arayiniz',
    image: 'zincir.png',
  },
  {
    id: 'hd-9',
    name: 'Elektrik Kablosu (50m)',
    desc: 'NYM-J 2x2.5mm² ikikat yalitimli, standart elektrik kablosu.',
    price: 'Fiyat icin arayiniz',
    image: 'elektrik.png',
  },
  {
    id: 'hd-10',
    name: 'Koruyucu Is Eldiveni',
    desc: 'Kesmezlik, isi ve kimyasal maddelere karsi dayanikli profesyonel is eldiveni.',
    price: 'Fiyat icin arayiniz',
    image: 'eldiven.png',
  },
  {
    id: 'hd-11',
    name: 'Serit Metre (5m)',
    desc: 'Otomatik geriye cekilebilir, 5 metre paslanmaz serit olcüm mezurası.',
    price: 'Fiyat icin arayiniz',
    image: 'metre.png',
  },
  {
    id: 'hd-12',
    name: 'Yatay Su Terazisi',
    desc: '600mm uzunlugunda, hassas kabarcikli olcum terazisi. Profesyonel kullanim.',
    price: 'Fiyat icin arayiniz',
    image: 'terazi.png',
  },
];

export default function Hirdavat() {
  return (
    <div>
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-3">Hirdavat</h1>
          <p className="text-blue-100 text-lg max-w-2xl">El aletleri, civalar, vidalar, elektrik malzemeleri ve tum hirdavat ihtiyaclariniz.</p>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            {products.map(p => (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                description={p.desc}
                price={p.price}
                image={p.image}
                category="Hirdavat"
                badge={p.badge}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
