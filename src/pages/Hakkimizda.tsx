import { Award, Users, Package, MapPin, Phone, MessageCircle, CheckCircle } from 'lucide-react';

const values = [
  { icon: Award, title: 'Kalite', desc: 'Ürün ve hizmetlerimizde en yüksek kaliteyi sunuyoruz.' },
  { icon: Users, title: 'Güven', desc: 'Müşteri memnuniyeti ve dönük ticaret ilkemizdir.' },
  { icon: Package, title: 'Çeşitlilik', desc: 'Geniş ürün yelpazesiyle her ihtiyaca çözüm sunuyoruz.' },
  { icon: CheckCircle, title: 'Dönüklük', desc: 'Yıllardir süregelen iş ortaklıklarımız güvenimizin kanıtıdır.' },
];

export default function Hakkimizda() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-700 to-green-800 text-white py-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Hakkımızda</h1>
          <p className="text-emerald-100 text-base md:text-lg max-w-2xl mx-auto">
            20 yılı aşkın deneyimimizle Karadeniz'in kalbi Ordu'da tarım ve ticaret alanında hizmet veriyoruz.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-80 shrink-0">
              <div className="relative">
                <div className="w-72 h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/seref_ciger.jpg" alt="Şeref Çiğer" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg whitespace-nowrap">
                  <p className="font-bold">Şeref Çiğer</p>
                  <p className="text-green-200 text-sm text-center">Kurucu & Yönetici</p>
                </div>
              </div>
            </div>
            <div className="pt-8 lg:pt-0">
              <span className="text-green-700 font-semibold uppercase text-sm tracking-wider">Firmamız Hakkında</span>
              <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-5">Ciğer Tarım'ın Hikayesi</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-base">
                Ciğer Tarım, Ordu ili Gürgentepe ilçesi Hasancık Köyü Tekkiraz Mevkiinde kurulmuş, tarım sektöründe geniş hizmet yelpazesiyle faaliyet gösteren bir ticaret firmasıdır.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Firmamızın kurucusu ve yöneticisi Şeref Çiğer, 20 yılı aşkın tarım ve ticaret deneyimiyle, bölgenin en güvenilir ve tercih edilen iş insanlarından biri haline gelmiştir.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fındık alım-satım, tarım ürünleri, organik gıda, inşaat malzemeleri, ziraat gübreler, hırdavat ve nakliye alanlarında kapsamlı hizmet sunan firmamız, her zaman müşteri memnuniyeti odaklı çalışmaktadır.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '20+', label: 'Yıllık Deneyim' },
                  { value: '500+', label: 'Mutlu Müşteri' },
                  { value: '7', label: 'Farklı Hizmet Alanı' },
                  { value: '2', label: 'Şube Noktası' },
                ].map(s => (
                  <div key={s.label} className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="text-2xl font-bold text-green-800">{s.value}</div>
                    <div className="text-gray-500 text-sm mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Değerlerimiz</h2>
            <p className="text-gray-600">İş anlayışımızın temelini oluşturan ilkeler</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={26} className="text-green-700" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Şubelerimiz</h2>
            <p className="text-gray-600">İki kolay erişim noktası, aynı yüksek hizmet kalitesi</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border-2 border-green-200 bg-green-50">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-green-700" size={24} />
                <h3 className="text-2xl font-bold text-green-900">Şube 1: Gürgentepe</h3>
              </div>
              <p className="text-gray-700 mb-2"><strong>Adres:</strong></p>
              <p className="text-gray-600 mb-4">Ordu, Gürgentepe, Hasancık Köyü, Tekkiraz Mevkii</p>
              <p className="text-sm text-gray-500">Ana şubemiz, tüm hizmetlerin tam kapsamı sunulur.</p>
            </div>
            <div className="p-8 rounded-2xl border-2 border-amber-200 bg-amber-50">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-amber-700" size={24} />
                <h3 className="text-2xl font-bold text-amber-900">Şube 2: Fatsa</h3>
              </div>
              <p className="text-gray-700 mb-2"><strong>Adres:</strong></p>
              <p className="text-gray-600 mb-4">Ordu, Fatsa, Bolaman Mevkii</p>
              <p className="text-sm text-gray-500">İkinci şubemiz, Fatsa ve çevresinde kolay erişim sağlar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-emerald-800 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Bize Ulaşın</h2>
          <p className="text-green-100 text-lg mb-8">Sorularınız ve önerileriniz için her zaman bize ulaşabilirsiniz</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905376935691"
              className="inline-flex items-center gap-2 bg-white text-green-800 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-colors"
            >
              <Phone size={20} />
              +90 537 693 56 91
            </a>
            <a
              href="https://wa.me/905376935691"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold transition-colors"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
