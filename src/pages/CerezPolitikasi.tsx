export default function CerezPolitikasi() {
  return (
    <div>
      <section className="bg-green-800 text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Çerez Politikası</h1>
          <p className="text-green-200 mt-2">Son guncelleme: Ocak 2024</p>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Cerez Nedir?</h2>
              <p>Cerezler, web sitelerinin tarayiciniza yerlestirdigi kucuk metin dosyalaridir. Kullanici deneyimini iyilestirmek, site trafikini analiz etmek ve bazi islevleri yerine getirmek icin kullanilirlar.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Kullanilan Cerez Turleri</h2>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                  <h3 className="font-semibold text-gray-800 mb-1">Zorunlu Cerezler</h3>
                  <p className="text-sm text-gray-600">Sitenin duzgun calisabilmesi icin gerekli olan temel cerezlerdir. Sepet bilgileri, oturum yonetimi gibi islevler icin kullanilirlar.</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <h3 className="font-semibold text-gray-800 mb-1">Analitik Cerezler</h3>
                  <p className="text-sm text-gray-600">Ziyaretci sayisi, kullanilan sayfalar ve siteye erisim sekli gibi istatistiksel veriler toplamak icin kullanilir.</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <h3 className="font-semibold text-gray-800 mb-1">Islevsellik Cerezleri</h3>
                  <p className="text-sm text-gray-600">Dil tercihi gibi kisiler ayarlarinizi hatirlamak icin kullanilir.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Cerezleri Nasil Kontrol Edebilirsiniz?</h2>
              <p className="mb-3">Tarayicinizin ayarlarindan cerezleri kontrol edebilirsiniz:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Google Chrome:</strong> Ayarlar - Gizlilik ve Guvenlik - Cerezler</li>
                <li><strong>Mozilla Firefox:</strong> Ayarlar - Gizlilik ve Guvenlik - Cerezler</li>
                <li><strong>Safari:</strong> Tercihler - Gizlilik - Cerezleri Engelle</li>
                <li><strong>Microsoft Edge:</strong> Ayarlar - Gizlilik - Cerezler</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Daha Fazla Bilgi</h2>
              <p>Cerez politikamiz hakkinda sorulariniz icin bizimle iletisime geciniz.</p>
              <div className="mt-3 text-green-700 font-medium">
                <p>Tel: <a href="tel:+905376935691" className="hover:text-green-800">+90 537 693 56 91</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
