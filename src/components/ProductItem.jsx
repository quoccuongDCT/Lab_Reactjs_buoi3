export default function ProductItem({ item, setStateModal }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">{item.name}</h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.shortDescription}</p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-blue-600">${item.price}</span>
          <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
        </div>

        <button
          onClick={() => setStateModal(item)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  )
}
