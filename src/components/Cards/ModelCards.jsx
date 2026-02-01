export default function ModelCard({ model }) {
  return (
    <div className="group relative transition-all duration-300 overflow-hidden">
      {/* Image Container with good aspect ratio (16:10) */}
      <div className="relative w-full h-48 sm:h-60 md:h-[280px] overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        
        {/* Specs Badge Overlay */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {model.trueRange && (
            <div className="bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs font-semibold text-gray-800">{model.trueRange}</span>
            </div>
          )}
          {model.speed && (
            <div className="bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-xs font-semibold text-gray-800">{model.speed}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          {model.name}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-3">
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            Starting from
          </span>
          <span className="text-emerald-600 font-semibold text-base sm:text-lg">
            {model.priceRange}
          </span>
        </div>

        {/* Color Options */}
        {model.colorsAvailable && model.colorsAvailable.length > 0 && (
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-gray-500 uppercase tracking-wide">Colors</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {model.colorsAvailable.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 sm:w-4 sm:h-4 rounded-full shadow-md hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        )}

        {/* Specs Grid */}
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {model.trueRange && (
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-wide mb-1">Range</span>
                <span className="text-sm font-semibold text-gray-900">{model.trueRange}</span>
              </div>
            )}
            {model.speed && (
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-wide mb-1">Top Speed</span>
                <span className="text-sm font-semibold text-gray-900">{model.speed}</span>
              </div>
            )}
          </div>
          <p className="text-xs sm:text-sm text-gray-700 mt-3 pt-3 border-t border-gray-100">
            Competitive pricing with flexible EMI options
          </p>
        </div>
      </div>

      {/* Hover effect indicator */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-emerald-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold shadow-lg">
          View Details
        </div>
      </div>
    </div>
  );
}

