"use client";

interface PaginationProps {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  current,
  total,
  onPageChange,
}: PaginationProps) {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => onPageChange(current - 1)}
        disabled={current === 1}
        className="text-xs text-gray-400 px-2 py-1 disabled:opacity-40"
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-6 h-6 text-xs rounded-full ${
            current === page
              ? "bg-blue-600 text-white"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}
      <span className="text-xs text-gray-400 px-1">...</span>
      <button
        onClick={() => onPageChange(total)}
        className="text-xs text-gray-500 hover:bg-gray-100 w-6 h-6 rounded-full"
      >
        {total}
      </button>
      <button
        onClick={() => onPageChange(current + 1)}
        disabled={current === total}
        className="text-xs text-gray-400 px-2 py-1 disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}
