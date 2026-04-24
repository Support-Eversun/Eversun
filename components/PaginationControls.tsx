interface PaginationControlsProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isPageTransitioning?: boolean;
}

export default function PaginationControls({
  page,
  totalPages,
  onPageChange,
  isPageTransitioning = false,
}: PaginationControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="px-4 py-2 rounded-lg border border-primary bg-primary text-secondary hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm font-semibold hover:scale-[1.01]"
      >
        Précédent
      </button>
      <div className="flex items-center gap-1">
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-10 h-10 rounded-lg transition-all duration-200 text-sm font-bold ${
                page === pageNum
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md transform scale-[1.02]'
                  : 'border border-primary bg-primary text-secondary hover:bg-secondary hover:scale-[1.01]'
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="px-4 py-2 rounded-lg border border-primary bg-primary text-secondary hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm font-semibold hover:scale-[1.01]"
      >
        Suivant
      </button>
    </div>
  );
}
