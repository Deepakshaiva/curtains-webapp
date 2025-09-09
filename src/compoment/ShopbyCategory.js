import React from 'react';

export default function ShopByCategory() {
  return (
    <div className="container my-8">
      <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="/curtains" className="group block">
          <div className="overflow-hidden rounded-lg">
            <img src="https://drapestory.in/cdn/shop/files/566A_1_jpg_765x.jpg?v=1713078931" alt="Curtains" className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-300" />
          </div>
          <h3 className="text-center font-bold text-lg mt-4 text-gray-700">Curtains</h3>
        </a>
        <a href="/home-decor" className="group block">
          <div className="overflow-hidden rounded-lg">
            <img src="https://cdn.ddecor.com/media/mageplaza/bannerslider/banner/image/s/a/sandscape.jpg" alt="Home Decor" className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-300" />
          </div>
          <h3 className="text-center font-bold text-lg mt-4 text-gray-700">Home Decor</h3>
        </a>
        <a href="/lighting" className="group block">
          <div className="overflow-hidden rounded-lg">
            <img src="https://cdn.ddecor.com/media/mageplaza/bannerslider/banner/image/a/f/african-vibes_theme_1920x1080-pix.jpg" alt="Lighting" className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-300" />
          </div>
          <h3 className="text-center font-bold text-lg mt-4 text-gray-700">Lighting</h3>
        </a>
      </div>
    </div>
  );
}