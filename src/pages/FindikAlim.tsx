import { MessageCircle, Phone, AlertCircle, CheckCircle, TrendingUp, Scale, Handshake, Truck, MapPin, Clock, Star, ArrowRight } from 'lucide-react';

const whatsappUrl = 'https://wa.me/905376935691?text=Fındık%20alım%20ve%20satış%20fiyatları%20hakkında%20bilgi%20almak%20istiyorum';

const services = [
  { icon: Truck, title: 'Üreticiden Direkt Alım', desc: 'Çiftçiden kapınıza kadar güvenilir fındık alım hizmeti. Aracı olmadan doğrudan.', color: 'bg-amber-100 text-amber-700' },
  { icon: Scale, title: 'Tartım & Kontrol', desc: 'Sertifikalı ölçüm ekipmanlarıyla şeffaf tartım ve kalite kontrol hizmeti.', color: 'bg-emerald-100 text-emerald-700' },
  { icon: Handshake, title: 'Güvenilir Ortaklık', desc: '20 yılı aşkın ticari deneyimle çiftçilerin güvenilir ticaret ortağı.', color: 'bg-blue-100 text-blue-700' },
  { icon: TrendingUp, title: 'Güncel Pazar Fiyatı', desc: 'Borsa fiyatlarını takip ederek en rekabetçi alım fiyatlarını sunuyoruz.', color: 'bg-orange-100 text-orange-700' },
];

const steps = [
  { n: '01', title: 'İletişime Geçin', desc: 'WhatsApp veya telefon ile alım sorumlumuzla bağlantı kurun.' },
  { n: '02', title: 'Fiyat Görüşmesi', desc: 'Güncel pazar fiyatlarına göre adil bir alım fiyatı belirlenir.' },
  { n: '03', title: 'Kalite Kontrol', desc: 'Profesyonel tartım ve kalite denetimi gerçekleştirilir.' },
  { n: '04', title: 'Ödeme & Teslimat', desc: 'Anında ödeme yapılır, nakliye desteği sağlanır.' },
];

const reasons = [
  { title: 'Güncel Fiyatlar', items: ['Borsa takipli fiyatlandırma', 'Rekabetçi teklifler', 'Şeffaf fiyat politikası'] },
  { title: 'Uzman Hizmet', items: ['20+ yıllık sektör deneyimi', 'Profesyonel tartım ekipmanı', 'Kalite garantisi'] },
  { title: 'Hızlı İşlem', items: ['Anlaşmadan sonra anında alım', 'Nakliye desteği mümkün', 'Kısa sürede tamamlanır'] },
  { title: 'Güvenilir Ortaklık', items: ['Uzun vadeli ilişkiler', 'Adil ve şeffaf işlemler', 'Yasal güvence'] },
];

export default function FindikAlim() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/ChatGPT_Image_26_May_2026_19_46_17.png" alt="Fındık" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-amber-800/70 to-orange-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-700/60 backdrop-blur-sm text-amber-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <Star size={14} className="fill-amber-300 text-amber-300" />
              Fındık Tüccarı — 20 Yıllık Deneyim
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Fındık Alım &<br />Satım Hizmetleri
            </h1>
            <p className="text-amber-100 text-lg leading-relaxed mb-8">
              Üreticilerden direkt fındık alımı yapan, güncel fiyatlarla fındık satışı gerçekleştiren güvenilir bir ticaret ortağıyız. Çiftçilerin hakları korunur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
                <MessageCircle size={22} />
                WhatsApp ile Fiyat Al
              </a>
              <a href="tel:+905376935691"
                className="inline-flex items-center justify-center gap-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-base transition-all border border-white/30">
                <Phone size={22} />
                +90 537 693 56 91
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Important notice */}
      <section className="bg-amber-50 border-b-2 border-amber-200 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-3 text-amber-900">
            <AlertCircle size={20} className="shrink-0 mt-0.5 text-amber-600" />
            <div>
              <p className="font-bold text-sm">Fındık Tüccarı Olarak Hizmetimiz</p>
              <p className="text-sm mt-1 text-amber-800">
                Ciğer Tarım, fındık üretimi yapmaz. Üreticilerden fındık alıp ticari ortaklara satar. Tüm alım işlemleri güncel pazar fiyatlarına göre gerçekleştirilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Fındık Tüccarı Hizmetlerimiz</h2>
            <p className="text-gray-500">Profesyonel alım-satım sürecinin her adımında yanınızdayız</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="group p-6 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all text-center">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${color}`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Nasıl Çalışır?</h2>
            <p className="text-gray-500">Basit ve şeffaf bir süreç</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-amber-200" />
                )}
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white font-bold text-xl rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {s.n}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Neden Fındık Tüccarımızı Seçmeli?</h2>
            <p className="text-gray-500">Deneyimli ve güvenilir ortaklık</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reasons.map(s => (
              <div key={s.title} className="p-6 rounded-2xl border-2 border-amber-100 bg-amber-50 hover:border-amber-300 transition-all">
                <h3 className="font-bold text-amber-900 mb-4 text-lg">{s.title}</h3>
                <ul className="space-y-3">
                  {s.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={17} className="text-amber-700 mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-700 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Fındık Alım Satımına Başlayın</h2>
          <p className="text-amber-100 text-lg mb-8 max-w-xl mx-auto">
            En iyi fiyatlar ve güvenilir hizmetle fındık ticareti için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl">
              <MessageCircle size={20} />
              Hemen Fiyat Al
            </a>
            <a href="tel:+905376935691"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-800 hover:bg-amber-50 px-8 py-4 rounded-2xl font-bold transition-colors">
              <Phone size={20} />
              +90 537 693 56 91
            </a>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Şubelerimiz</h2>
            <p className="text-gray-500 text-sm">Her iki şubemizden de fındık alım-satım gerçekleştirebilirsiniz</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white p-6 rounded-2xl border-2 border-emerald-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <MapPin size={20} className="text-emerald-700" />
                </div>
                <h4 className="font-bold text-gray-900">Şube 1: Gürgentepe</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">Ordu, Gürgentepe, Hasancık Köyü, Tekkiraz Mevkii</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock size={12} />
                <span>Hafta içi 08:00 - 18:00</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-amber-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <MapPin size={20} className="text-amber-700" />
                </div>
                <h4 className="font-bold text-gray-900">Şube 2: Fatsa</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">Ordu, Fatsa, Bolaman Mevkii</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock size={12} />
                <span>Hafta içi 08:00 - 18:00</span>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <AlertCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                <strong>İletişim:</strong> Her iki şubeden de fındık alım-satımı gerçekleştirebilirsiniz. Çalışan ekibimiz tüm işlemlerinizde yardımcı olacaktır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
