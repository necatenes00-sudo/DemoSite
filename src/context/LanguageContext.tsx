import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  tr: {
    // Navbar
    'nav.home': 'Anasayfa',
    'nav.products': 'Ürünler & Hizmetler',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'nav.call': 'Hemen Ara',
    'nav.cart': 'Sepet',
    'nav.categories.findik': 'Fındık Alım',
    'nav.categories.tarim': 'Tarım Ürünleri',
    'nav.categories.gida': 'Gıda Ürünleri',
    'nav.categories.insaat': 'İnşaat Malzemeleri',
    'nav.categories.gubre': 'Ziraat Gübreler',
    'nav.categories.hirdavat': 'Hırdavat',
    'nav.categories.nakliye': 'Nakliye',

    // Categories
    'category.hazelnut': 'Fındık Alım',
    'category.agriculture': 'Tarım Ürünleri',
    'category.food': 'Gıda Ürünleri',
    'category.construction': 'İnşaat Malzemeleri',
    'category.fertilizers': 'Ziraat Gübreler',
    'category.hardware': 'Hırdavat',
    'category.transport': 'Nakliye',

    // Hero
    'hero.hazelnutTitle': 'Fındık Alım Satım',
    'hero.hazelnutDesc': 'En güncel fiyatlarla fındık alım-satım hizmetleri',
    'hero.transportTitle': 'Nakliye Hizmetleri',
    'hero.transportDesc': 'Türkiye geneli güvenli ve hızlı taşıma',
    'hero.constructionTitle': 'İnşaat Malzemeleri',
    'hero.constructionDesc': 'Kaliteli yapı malzemeleri ve ekipmanları',
    'hero.seeDetails': 'Detayları Gör',

    // Features
    'feature.fastProcess': 'Hızlı İşlem',
    'feature.fastProcessDesc': 'Dakikalar içinde işlem',
    'feature.delivery': 'Kapı Teslimi',
    'feature.deliveryDesc': 'Hızlı teslimat',
    'feature.quality': 'Kaliteli Ürünler',
    'feature.qualityDesc': 'Garantili ürünler',
    'feature.support': '7/24 Destek',
    'feature.supportDesc': 'Her zaman hazır',

    // Stats
    'stats.years': 'Yıllık Deneyim',
    'stats.customers': 'Mutlu Müşteri',
    'stats.products': 'Ürün Çeşidi',
    'stats.branches': 'Şube',

    // Sections
    'section.ourServices': 'HİZMETLERİMİZ',
    'section.categories': 'Kategorilerimiz',
    'section.categoriesDesc': 'Geniş ürün yelpazesiyle her ihtiyacınıza çözüm sunuyoruz',
    'section.explore': 'Keşfet',
    'section.testimonials': 'Müşteri Yorumları',
    'section.testimonialsDesc': 'Ciğer Tarım\'dan memnun müşterilerimiz',
    'section.meetFamily': 'BİZİMLE TANIŞIN',
    'section.meetFamilyTitle': 'Ciğer Tarım Ailesiyle Tanışın',
    'section.meetFamilyDesc': '20 yılı aşkın deneyimle Ordu\'da tarım ve ticaret alanında hizmet veren Ciğer Tarım, sadece bir firma değil, bir aile.',
    'section.whatsappContact': 'WhatsApp İletişim',
    'section.moreInfo': 'Daha Fazla Bilgi',

    // Hazelnut CTA
    'hazelnut.specialService': 'ÖZEL HİZMET',
    'hazelnut.title': 'Fındık Alım Satım',
    'hazelnut.desc': 'Güncel piyasa fiyatlarıyla fındık alıp satıyoruz. Üreticilerden direkt fındık alımı yapan, güvenilir ve samimi bir ortağız.',
    'hazelnut.getPrice': 'WhatsApp\'tan Fiyat Al',
    'hazelnut.callNow': 'Hemen Ara:',

    // Why Us
    'whyUs.title': 'Neden Bizi Seçmelisiniz?',
    'whyUs.subtitle': '20 yılı aşkın deneyim ve binlerce mutlu müşteri ile güvenilir ticaret',
    'whyUs.experience': 'Deneyimli Ekip',
    'whyUs.experienceDesc': '20 yıldan fazla sektör deneyimi',
    'whyUs.prices': 'Rekabetçi Fiyatlar',
    'whyUs.pricesDesc': 'Pazar koşullarına uygun fiyatlandırma',
    'whyUs.safe': 'Güvenli Ticaret',
    'whyUs.safeDesc': 'Yasal ve şeffaf işlemler',
    'whyUs.fastDelivery': 'Hızlı Teslimat',
    'whyUs.fastDeliveryDesc': 'Belirlenen zamanda kapı teslimi',
    'whyUs.satisfaction': 'Müşteri Memnuniyeti',
    'whyUs.satisfactionDesc': 'Her zaman müşteri odaklı hizmet',
    'whyUs.support': '7/24 Destek',
    'whyUs.supportDesc': 'Her zaman iletişime açık',

    // Final CTA
    'cta.startNow': 'HEMEN BAŞLAYIN',
    'cta.title': 'Ciğer Tarım Ailesine Katılın',
    'cta.desc': 'Ciğer Tarım ailesiyle tanışmak ve iş yapmak için bize ulaşın.',
    'cta.whatsappButton': 'WhatsApp ile İletişim',

    // Footer
    'footer.brandDescription': '20 yılı aşkın deneyimle Kaliteli tarım ürünleri, fındık alım-satım, inşaat malzemeleri ve nakliye hizmetleriyle hizmetinizdeyiz.',
    'footer.quickAccess': 'Hızlı Erişim',
    'footer.productsServices': 'Ürünler & Hizmetler',
    'footer.contact': 'İletişim',
    'footer.branch1': 'Şube 1: Gürgentepe',
    'footer.branch1Address': 'Ordu Gürgentepe Hasancık Köyü Tekkiraz Mevkii',
    'footer.branch2': 'Şube 2: Fatsa',
    'footer.branch2Address': 'Ordu Fatsa Bolaman Mevkii',
    'footer.whatsappWrite': 'WhatsApp\'tan Yaz',
    'footer.securePayment': 'Güvenli Ödeme Yöntemleri',
    'footer.allCardsValid': 'Tüm kartlar ve ödeme yöntemleri geçerlidir',
    'footer.copyright': '© 2024 Ciğer Tarım. Tüm hakları saklıdır.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Kullanım Koşulları',
    'footer.cookies': 'Çerez Politikası',

    // Testimonials
    'testimonial.farmer': 'Çiftçi',
    'testimonial.contractor': 'İnşaat Müteahhidi',
    'testimonial.businessOwner': 'Gıda İşletmeci',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.products': 'Products & Services',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.call': 'Call Now',
    'nav.cart': 'Cart',
    'nav.categories.findik': 'Hazelnut Trade',
    'nav.categories.tarim': 'Agricultural Products',
    'nav.categories.gida': 'Food Products',
    'nav.categories.insaat': 'Construction Materials',
    'nav.categories.gubre': 'Agricultural Fertilizers',
    'nav.categories.hirdavat': 'Hardware',
    'nav.categories.nakliye': 'Transportation',

    // Categories
    'category.hazelnut': 'Hazelnut Trade',
    'category.agriculture': 'Agricultural Products',
    'category.food': 'Food Products',
    'category.construction': 'Construction Materials',
    'category.fertilizers': 'Agricultural Fertilizers',
    'category.hardware': 'Hardware',
    'category.transport': 'Transportation',

    // Hero
    'hero.hazelnutTitle': 'Hazelnut Trade',
    'hero.hazelnutDesc': 'Hazelnut buying and selling services at current prices',
    'hero.transportTitle': 'Transportation Services',
    'hero.transportDesc': 'Safe and fast transportation across Turkey',
    'hero.constructionTitle': 'Construction Materials',
    'hero.constructionDesc': 'Quality building materials and equipment',
    'hero.seeDetails': 'See Details',

    // Features
    'feature.fastProcess': 'Fast Process',
    'feature.fastProcessDesc': 'Process in minutes',
    'feature.delivery': 'Door Delivery',
    'feature.deliveryDesc': 'Fast delivery',
    'feature.quality': 'Quality Products',
    'feature.qualityDesc': 'Guaranteed products',
    'feature.support': '24/7 Support',
    'feature.supportDesc': 'Always ready',

    // Stats
    'stats.years': 'Years Experience',
    'stats.customers': 'Happy Customers',
    'stats.products': 'Product Types',
    'stats.branches': 'Branches',

    // Sections
    'section.ourServices': 'OUR SERVICES',
    'section.categories': 'Our Categories',
    'section.categoriesDesc': 'Solutions for all your needs with our wide product range',
    'section.explore': 'Explore',
    'section.testimonials': 'Customer Reviews',
    'section.testimonialsDesc': 'Satisfied customers of Ciğer Tarım',
    'section.meetFamily': 'MEET US',
    'section.meetFamilyTitle': 'Meet the Ciğer Tarım Family',
    'section.meetFamilyDesc': 'With over 20 years of experience in agriculture and trade in Ordu, Ciğer Tarım is not just a company, but a family.',
    'section.whatsappContact': 'WhatsApp Contact',
    'section.moreInfo': 'More Information',

    // Hazelnut CTA
    'hazelnut.specialService': 'SPECIAL SERVICE',
    'hazelnut.title': 'Hazelnut Trade',
    'hazelnut.desc': 'We buy and sell hazelnuts at current market prices. We are a reliable and friendly partner who buys hazelnuts directly from producers.',
    'hazelnut.getPrice': 'Get Price via WhatsApp',
    'hazelnut.callNow': 'Call Now:',

    // Why Us
    'whyUs.title': 'Why Choose Us?',
    'whyUs.subtitle': 'Reliable trade with over 20 years of experience and thousands of happy customers',
    'whyUs.experience': 'Experienced Team',
    'whyUs.experienceDesc': 'More than 20 years of industry experience',
    'whyUs.prices': 'Competitive Prices',
    'whyUs.pricesDesc': 'Pricing suitable for market conditions',
    'whyUs.safe': 'Safe Trade',
    'whyUs.safeDesc': 'Legal and transparent transactions',
    'whyUs.fastDelivery': 'Fast Delivery',
    'whyUs.fastDeliveryDesc': 'Door delivery at specified time',
    'whyUs.satisfaction': 'Customer Satisfaction',
    'whyUs.satisfactionDesc': 'Always customer-oriented service',
    'whyUs.support': '24/7 Support',
    'whyUs.supportDesc': 'Always available for contact',

    // Final CTA
    'cta.startNow': 'START NOW',
    'cta.title': 'Join the Ciğer Tarım Family',
    'cta.desc': 'Contact us to meet and do business with the Ciğer Tarım family.',
    'cta.whatsappButton': 'Contact via WhatsApp',

    // Footer
    'footer.brandDescription': 'With over 20 years of experience, we serve you with quality agricultural products, hazelnut trade, construction materials and transportation services.',
    'footer.quickAccess': 'Quick Access',
    'footer.productsServices': 'Products & Services',
    'footer.contact': 'Contact',
    'footer.branch1': 'Branch 1: Gürgentepe',
    'footer.branch1Address': 'Ordu Gürgentepe Hasancık Village Tekkiraz Location',
    'footer.branch2': 'Branch 2: Fatsa',
    'footer.branch2Address': 'Ordu Fatsa Bolaman Location',
    'footer.whatsappWrite': 'Write on WhatsApp',
    'footer.securePayment': 'Secure Payment Methods',
    'footer.allCardsValid': 'All cards and payment methods are valid',
    'footer.copyright': '© 2024 Ciğer Tarım. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.cookies': 'Cookie Policy',

    // Testimonials
    'testimonial.farmer': 'Farmer',
    'testimonial.contractor': 'Construction Contractor',
    'testimonial.businessOwner': 'Food Business Owner',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'tr' || saved === 'en') ? saved : 'tr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
