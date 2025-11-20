import { Star } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Slider } from './ui/slider';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: any;
  setFilters: (filters: any) => void;
}

const locations = [
  { id: 'all', label: 'Semua Lokasi' },
  { id: 'jakarta', label: 'Jakarta' },
  { id: 'bandung', label: 'Bandung' },
  { id: 'surabaya', label: 'Surabaya' },
  { id: 'yogyakarta', label: 'Yogyakarta' },
  { id: 'bali', label: 'Bali' }
];

const sortOptions = [
  { id: 'relevant', label: 'Paling Relevan' },
  { id: 'newest', label: 'Terbaru' },
  { id: 'price-low', label: 'Harga Terendah' },
  { id: 'price-high', label: 'Harga Tertinggi' },
  { id: 'popular', label: 'Paling Populer' }
];

export function FilterModal({ isOpen, onClose, filters, setFilters }: FilterModalProps) {
  const handleApply = () => {
    onClose();
  };

  const handleReset = () => {
    setFilters({
      priceRange: [0, 1000000],
      location: 'all',
      rating: 0,
      sortBy: 'relevant'
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-[#111827]">Filter & Urutkan</SheetTitle>
        </SheetHeader>

        <div className="space-y-6 overflow-y-auto h-[calc(85vh-140px)] pb-4">
          {/* Price Range */}
          <div>
            <label className="text-[#111827] mb-3 block">Rentang Harga</label>
            <div className="space-y-4">
              <Slider
                value={filters.priceRange}
                onValueChange={(value: number[]) => setFilters({ ...filters, priceRange: value })}
                min={0}
                max={2000000}
                step={50000}
                className="w-full"
              />
              <div className="flex items-center justify-between text-sm">
                <span className="px-3 py-2 bg-[#FFF4EA] rounded-xl text-[#111827]">
                  Rp {filters.priceRange[0].toLocaleString('id-ID')}
                </span>
                <span className="text-gray-400">-</span>
                <span className="px-3 py-2 bg-[#FFF4EA] rounded-xl text-[#111827]">
                  Rp {filters.priceRange[1].toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="text-[#111827] mb-3 block">Lokasi</label>
            <RadioGroup value={filters.location} onValueChange={(value: string) => setFilters({ ...filters, location: value })}>
              <div className="space-y-2">
                {locations.map((location) => (
                  <div key={location.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={location.id} id={`modal-${location.id}`} />
                    <Label htmlFor={`modal-${location.id}`} className="cursor-pointer text-[#111827]">
                      {location.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Rating */}
          <div>
            <label className="text-[#111827] mb-3 block">Rating Minimum</label>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setFilters({ ...filters, rating })}
                  className={`w-full flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                    filters.rating === rating
                      ? 'bg-[#0F6B66] text-white'
                      : 'bg-gray-50 text-[#111827]'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span>& keatas</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sort By */}
          <div>
            <label className="text-[#111827] mb-3 block">Urutkan</label>
            <RadioGroup value={filters.sortBy} onValueChange={(value: string) => setFilters({ ...filters, sortBy: value })}>
              <div className="space-y-2">
                {sortOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.id} id={`modal-sort-${option.id}`} />
                    <Label htmlFor={`modal-sort-${option.id}`} className="cursor-pointer text-[#111827]">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="flex-1 py-3 border border-gray-200 text-[#111827] rounded-xl hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={handleApply}
              className="flex-1 py-3 bg-[#0F6B66] text-white rounded-xl hover:bg-[#0a5450] transition-colors"
            >
              Terapkan Filter
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
