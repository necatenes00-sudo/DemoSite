import { useState } from 'react';
import { Phone, MapPin, Mail, MessageCircle, Clock, CheckCircle } from 'lucide-react';

export default function Iletisim() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    const text = encodeURIComponent(`*${form.name}*\n${form.phone ? 'Tel: ' + form.phone + '\n' : ''}\n${form.message}`);
    window.open(`https://wa.me/905376935691?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div>
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">İletişim</h1>
          <p className="text-green-100 text-lg">Sorularınız için bize ulaşın, en kısa sürede dönebileceğiz.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">İletişim Bilgileri</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Şube 1: Gürgentepe</h3>
                    <p className="text-gray-600 text-sm">Ordu Gürgentepe Hasancık Köyü</p>
                    <p className="text-gray-600 text-sm">Tekkiraz Mevkii</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Şube 2: Fatsa</h3>
                    <p className="text-gray-600 text-sm">Ordu Fatsa</p>
                    <p className="text-gray-600 text-sm">Bolaman Mevkii</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Telefon</h3>
                    <a href="tel:+905376935691" className="text-green-700 font-medium hover:text-green-800">+90 537 693 56 91</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">E-posta</h3>
                    <a href="mailto:info@cigertarim.com" className="text-green-700 font-medium hover:text-green-800">info@cigertarim.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Çalışma Saatleri</h3>
                    <p className="text-gray-600 text-sm">Pazartesi - Cumartesi: 08:00 - 19:00</p>
                    <p className="text-gray-600 text-sm">Pazar: 09:00 - 17:00</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="tel:+905376935691"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-700 text-white py-4 rounded-xl font-semibold hover:bg-green-800 transition-colors"
                >
                  <Phone size={18} />
                  Hemen Ara
                </a>
                <a
                  href="https://wa.me/905376935691"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Mesaj Gönderin</h2>
              <form onSubmit={handleWhatsApp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adınız *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    required
                    placeholder="Adınızı girin"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon Numaranız</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                    placeholder="+90 5XX XXX XX XX"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız *</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    required
                    rows={5}
                    placeholder="Mesajınızı yazın..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition-colors"
                >
                  {sent ? (
                    <>
                      <CheckCircle size={20} />
                      Mesaj Gönderildi!
                    </>
                  ) : (
                    <>
                      <MessageCircle size={20} />
                      WhatsApp ile Gönder
                    </>
                  )}
                </button>
                <p className="text-gray-400 text-xs text-center">Mesajınız WhatsApp üzerinden gönderilecektir.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
