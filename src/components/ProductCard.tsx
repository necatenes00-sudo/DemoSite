import { ShoppingCart, Check, CheckCircle, Star, Shield } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  badge?: string;
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
      <div className="bg-gray-200" style={{ aspectRatio: '4/3' }} />
      <div className="p-3.5 md:p-4">
        <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-2 bg-gray-200 rounded w-full mb-3" />
        <div className="flex gap-2 mb-3">
          <div className="h-2 bg-gray-200 rounded w-12" />
          <div className="h-2 bg-gray-200 rounded w-12" />
          <div className="h-2 bg-gray-200 rounded w-12" />
        </div>
        <div className="h-9 bg-gray-200 rounded-xl" />
      </div>
    </div>
  );
}

export default function ProductCard({ id, name, description, price, image, category, badge }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAdd = () => {
    addItem({ id, name, price, image, category });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-emerald-200 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: '4/3' }}>
        {/* Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
        )}
        <img
          src={image}
          alt={name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
        />

        {/* Badge */}
        {badge && (
          <span className="absolute top-2.5 left-2.5 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow z-10">
            {badge}
          </span>
        )}

        {/* Quick view overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="text-white text-sm font-semibold bg-emerald-700/80 px-4 py-2 rounded-lg transform scale-90 group-hover:scale-100 transition-transform">
            Detayları Gör
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3.5 md:p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-800 text-xs md:text-sm leading-snug mb-1.5 line-clamp-2">{name}</h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2 flex-1">{description}</p>

        {/* Micro icons */}
        <div className="flex items-center gap-2.5 mb-3">
          <div className="flex items-center gap-1 text-emerald-600" title="Stokta Hazır">
            <CheckCircle size={11} />
            <span className="text-xs text-gray-500 hidden sm:inline">Stokta</span>
          </div>
          <div className="flex items-center gap-1 text-amber-500" title="Yüksek Kalite">
            <Star size={11} />
            <span className="text-xs text-gray-500 hidden sm:inline">Kaliteli</span>
          </div>
          <div className="flex items-center gap-1 text-blue-500" title="Güvenli Ticaret">
            <Shield size={11} />
            <span className="text-xs text-gray-500 hidden sm:inline">Güvenli</span>
          </div>
        </div>

        <button
          onClick={handleAdd}
          className={`w-full flex items-center justify-center gap-1.5 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
            added
              ? 'bg-emerald-100 text-emerald-800'
              : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm hover:shadow-md active:scale-95'
          }`}
        >
          {added ? <Check size={14} /> : <ShoppingCart size={14} />}
          <span>{added ? 'Sepete Eklendi' : 'Sepete Ekle'}</span>
        </button>
      </div>
    </div>
  );
}
