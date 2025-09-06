import React from 'react'

export default function Testjs() {
    return (
        <div> <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">Product Details</h2>
                    <button className="text-gray-500 hover:text-gray-700 text-2xl font-bold">
                        ×
                    </button>
                </div>
                <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="aspect-square overflow-hidden rounded-lg">
                            <img

                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-gray-800"></h3>

                            <div className="flex items-center gap-4">
                                <span className="text-3xl font-bold text-blue-600"></span>
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                    in stock
                                </span>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Short Description:</h4>
                                <p className="text-gray-600"></p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Full Description:</h4>
                                <p className="text-gray-600 leading-relaxed"></p>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
                                    Add to Cart
                                </button>
                                <button className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-md hover:bg-gray-300 transition-colors duration-200 font-medium">
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    )
}
