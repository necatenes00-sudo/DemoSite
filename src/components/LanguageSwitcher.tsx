import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
      className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg text-xs font-bold transition-all duration-300 shadow-md hover:shadow-lg group"
      title={language === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}
    >
      <Globe size={14} className="group-hover:rotate-180 transition-transform duration-500" />
      <span>{language === 'tr' ? 'EN' : 'TR'}</span>
    </button>
  );
}
