import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, Package, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const { items, removeItem, updateQuantity, clearCart, isOpen, setIsOpen, totalItems } = useCart();

  const whatsappMessage = () => {
    if (items.length === 0) return;
    const text = items.map(i => `- ${i.name} x${i.quantity}`).join('\n');
    const msg = encodeURIComponent(`Merhaba, aşağıdaki ürünleri sipariş etmek istiyorum:\n\n${text}\n\nLütfen bilgi verir misiniz?`);
    window.open(`https://wa.me/905376935691?text=${msg}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm md:max-w-md bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-emerald-800 to-emerald-700 text-white">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <ShoppingBag size={18} />
            </div>
            <div>
              <h2 className="font-bold text-lg">Sepetim</h2>
              <p className="text-emerald-200 text-xs">{totalItems} ürün</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/20 rounded-xl transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Package size={32} className="opacity-40" />
              </div>
              <p className="font-semibold text-gray-600 mb-1">Sepetiniz boş</p>
              <p className="text-sm text-gray-400">Ürün ekleyerek alışverişe başlayın</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors"
              >
                Alışverişe Başla
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map(item => (
                <div key={item.id} className="flex gap-3 p-3 bg-slate-50 rounded-xl border border-gray-100 hover:border-emerald-200 transition-colors">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl shrink-0 shadow-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 text-sm leading-tight truncate">{item.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.category}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-700 flex items-center justify-center transition-colors"
                      >
                        <Plus size={12} />
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-4 md:px-6 py-4 border-t border-gray-100 bg-slate-50 space-y-3">
            {/* Summary */}
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Toplam ürün</span>
              <span className="font-semibold">{totalItems} adet</span>
            </div>

            {/* WhatsApp button */}
            <button
              onClick={whatsappMessage}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <MessageCircle size={18} />
              WhatsApp ile Sipariş Ver
              <ArrowRight size={16} />
            </button>

            {/* Clear cart */}
            <button
              onClick={clearCart}
              className="w-full text-gray-400 hover:text-red-500 text-xs py-2 transition-colors flex items-center justify-center gap-1"
            >
              <Trash2 size={12} />
              Sepeti Temizle
            </button>
          </div>
        )}
      </div>
    </>
  );
}
