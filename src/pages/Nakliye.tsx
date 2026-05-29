import { Truck, Shield, Clock, MapPin, Phone, MessageCircle, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Karayolu Nakliye',
    desc: 'Turkiye genelinde kapsamli karayolu tasimacilik hizmeti. Her turlu yuk icin uygun araclar.',
  },
  {
    icon: MapPin,
    title: 'Turkiye Geneli Hizmet',
    desc: 'Tum il ve ilcelere teslimat yapilmaktadir. Uzak bolgeler icin de hizmet saglanir.',
  },
  {
    icon: Shield,
    title: 'Sigortalı Tasima',
    desc: 'Tum tasinan yukler sigortalidir. Herhangi bir hasarda tam geri odeme garantisi.',
  },
  {
    icon: Clock,
    title: 'Zamaninda Teslimat',
    desc: 'Belirlenen tarih ve saatte kesin teslimat taahhüdü. Hizli ve guvenilir.',
  },
];

const vehicleTypes = [
  {
    name: 'Kucuk Kamyon',
    cap: 'Kapasite: 1-3 ton',
    desc: 'Sehir ici ve kisa mesafe tasimalar icin',
    image: 'transit.jpg',
  },
  {
    name: 'Orta Boy Kamyon',
    cap: 'Kapasite: 5-10 ton',
    desc: 'Bolge arasi ve orta mesafe tasimalar icin',
    image: 'kamyon.jpg',
  },
  {
    name: 'TIR - Tam Dorse',
    cap: 'Kapasite: 20-28 ton',
    desc: 'Buyuk hacimli ve agir yuk tasimalar icin',
    image: 'tır.jpg',
  },
  {
    name: 'Ozel Tasima',
    cap: 'Ozel cozum',
    desc: 'Hassas, ozel veya agir makine tasimaciligı',
    image: 'özel.jpg',
  },
];

export default function Nakliye() {
  return (
    <div>
      {/* Hero */}
      <section className="relative text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/ChatGPT_Image_26_May_2026_19_48_11.png"
            alt="Nakliye"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nakliye Hizmetleri</h1>
          <p className="text-gray-200 text-xl max-w-2xl mx-auto mb-8">
            Yukunuz bizimle guvenle yolda. Turkiye genelinde hizli, guvenli ve sigortalı tasima hizmetleri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905376935691?text=Nakliye%20hizmetiniz%20hakkinda%20bilgi%20almak%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <MessageCircle size={22} />
              Fiyat Teklifi Alin
            </a>
            <a
              href="tel:+905376935691"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              <Phone size={22} />
              Hemen Ara
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Hizmetlerimiz</h2>
            <p className="section-subtitle">Profesyonel ve guvenilir nakliye cozumlerimiz</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all group">
                <div className="w-14 h-14 bg-green-100 group-hover:bg-green-200 rounded-2xl flex items-center justify-center mb-4 transition-colors">
                  <Icon size={26} className="text-green-700" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Arac Filomuz</h2>
            <p className="section-subtitle">Her turlu yuk icin dogru arac</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleTypes.map(v => (
              <div key={v.name} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="h-44 overflow-hidden">
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-800">{v.name}</h3>
                  <span className="text-xs text-green-700 font-medium">{v.cap}</span>
                  <p className="text-gray-500 text-sm mt-2">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Tasima Sureci</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { n: '1', t: 'Teklif Alin', d: 'Bize ulasin ve ihtiyacinizi belirtin' },
              { n: '2', t: 'Fiyat Onaylayın', d: 'Uygun fiyati kabul edin' },
              { n: '3', t: 'Arac Gonderilir', d: 'Belirtilen adrese arac gonderilir' },
              { n: '4', t: 'Yuk Alinir', d: 'Profesyonel yukleyici ekibimiz gelir' },
              { n: '5', t: 'Teslimat', d: 'Belirtilen yere guvenli teslimat yapilir' },
            ].map(s => (
              <div key={s.n} className="text-center">
                <div className="w-12 h-12 bg-green-700 text-white font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-3">
                  {s.n}
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">{s.t}</h4>
                <p className="text-gray-400 text-xs mt-1">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Neden Ciger Tarim Nakliye?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Genis Arac Filomuz',
              'Sigortali Tasima Garantisi',
              'Zamaninda Teslimat',
              'Uygun Fiyatlar',
              'Deneyimli Surucu Ekibi',
              '7/24 Musteri Hizmetleri',
            ].map(item => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-400 shrink-0" />
                <span className="text-green-100">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://wa.me/905376935691?text=Nakliye%20teklifi%20almak%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-800 hover:bg-green-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              <MessageCircle size={22} />
              Ucretsiz Teklif Alin
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
