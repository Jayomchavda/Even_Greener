import React from 'react'

export default function Gardening() {
    return (
        <div>
            <div className="flex flex-wrap gap-10 justify-center items-center my-10">
                <div className="flex flex-col items-center group relative overflow-hidden">
                    <img
                        src="/public/Gardening/img1.webp"
                        alt="Bokashi"
                        className="w-[300px] h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <p
                        className="absolute inset-0 flex items-center justify-center text-center text-white font-bold text-xl">
                        Gardening <br /> Accessories
                    </p>
                </div>
                <div className="flex flex-col items-center group relative overflow-hidden">
                    <img
                        src="/public/Gardening/img2.webp"
                        alt="Bokashi"
                        className="w-[300px] h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <p
                        className="absolute inset-0 flex items-center justify-center text-center text-white font-bold text-xl">
                        Watering Cans & <br /> Plant Misters
                    </p>
                </div>
                <div className="flex flex-col items-center group relative overflow-hidden">
                    <img
                        src="/public/Gardening/img3.webp"
                        alt="Bokashi"
                        className="w-[300px] h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <p
                        className="absolute inset-0 flex items-center justify-center text-center text-white font-bold text-xl">
                        Children's <br /> Gardening <br /> Range
                    </p>
                </div>
                <div className="flex flex-col items-center group relative overflow-hidden">
                    <img
                        src="/public/Gardening/img4.webp"
                        alt="Bokashi"
                        className="w-[300px] h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <p
                        className="absolute inset-0 flex items-center justify-center text-center text-white font-bold text-xl">
                        Gardening <br /> Gloves
                    </p>
                </div>
            </div>

            <div className='mx-[100px]'>
                <h1 className='text-[40px] font-bold  '>Gardening</h1>
                <p className='text-gray-600 my-10 text-[18px]'>Browse the complete range of EvenGreener gardening products to assist those green fingers of yours. Whether you're just getting started in the garden, or are a seasoned pro, we have everything you'll need for plenty of successful seasons ahead. Enhance your sustainable lifestyle with any of our watering cans, plant misters, gardening accessories, planters, and much more!</p>
            </div>

            <div className='mx-[100px] flex mt-10'>
                <div className=' max-w-[40%] mt-20'>
                    <h1 className='text-[30px] font-bold '>Pots & Planters</h1>
                    <p className='text-lg text-gray-600 mr-10 mt-5 '>Grow your own herbs, veg and much more with these eye-catching garden planters, Perfect for indoor and outdoor use.</p>
                    <button className="bg-[#296647] text-white py-3 px-6 text-base rounded-br-lg rounded-tl-lg transition-all duration-300 hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-l-none hover:rounded-r-none mt-5">
                        SHOP COLLECTION
                    </button>
                </div>
                <div className='w-[60%]'>
                    <img src="/public/Gardening/img5.webp" alt="Hot Composters" className="w-full h-[350px]" />
                </div>
            </div>

            <div className='flex gap-20 justify-center items-center my-10' >
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/public/Gardening/img6.jpg" alt="Blackwall Twin Pack Bokashi Bin" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg">Rowlinson Small Heritage Planter</p>
                </div>
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/public/Gardening/img7.webp" alt="Maze Twin Pack Bokashi Bin" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg">Rowlinson Medium Heritage Planter</p>
                </div>
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/public/Gardening/img8.jpg" alt="Bokashi Bran 3kg Refill" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg   ">Rowlinson Large Heritage Planter</p>
                </div>
            </div>

            <div className='mx-[100px] flex mt-10'>
                <div className=' max-w-[40%] mt-20'>
                    <h1 className='text-[30px] font-bold '>Gardening Accessories</h1>
                    <p className='text-lg text-gray-600 mr-10 mt-5 '>A wide selection of accessories to make your life in the garden easier than ever!</p>
                    <button className="bg-[#296647] text-white py-3 px-6 text-base rounded-br-lg rounded-tl-lg transition-all duration-300 hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-l-none hover:rounded-r-none mt-5">
                        SHOP COLLECTION
                    </button>
                </div>
                <div className='w-[60%]'>
                    <img src="/public/Gardening/img9.webp" alt="Hot Composters" className="w-full h-[350px]" />
                </div>
            </div>

            <div className='flex gap-20 justify-center items-center my-10' >
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/public/Gardening/img10.webp" alt=" Blackwall Twin Pack Bokashi Bin" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg">Wool Pots - Pack of 10</p>
                </div>
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/public/Gardening/img11.webp" alt="Maze Twin Pack Bokashi Bin" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg">10 Litre Red Watering Can</p>
                </div>
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/public/Gardening/img12.webp" alt="Bokashi Bran 3kg Refill" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg">10 Litre Green Watering Can</p>
                </div>
            </div>


            <div className='mx-[100px] flex mt-10'>
                <div className=' max-w-[40%] mt-20'>
                    <h1 className='text-[30px] font-bold '>Gardening Gloves</h1>
                    <p className='text-lg text-gray-600 mr-10 mt-5 '>Keep those hands safe and toasty with our brilliant selection of gardening gloves. Made from tough yet flexible material for best results in the garden!</p>
                    <button className="bg-[#296647] text-white py-3 px-6 text-base rounded-br-lg rounded-tl-lg transition-all duration-300 hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-l-none hover:rounded-r-none mt-5">
                        SHOP COLLECTION
                    </button>
                </div>
                <div className='w-[60%]'>
                    <img src="/public/Gardening/img13.webp" alt="Hot Composters" className="w-full h-[350px]" />
                </div>
            </div>

            <div className='flex gap-20 justify-center items-center my-10' >
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/public/Gardening/img14.webp" alt=" Blackwall Twin Pack Bokashi Bin" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg">Burgon & Ball - Children's  Gardening  Gloves</p>
                </div>
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/public/Gardening/img15.webp" alt="Maze Twin Pack Bokashi Bin" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg">Glovelee Large Compostable Gloves</p>
                </div>
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/public/Gardening/img16.jpg" alt="Bokashi Bran 3kg Refill" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg">Glovelee Medium Compostable Gloves</p>
                </div>
            </div>

            <div className='mx-[100px] flex mt-10'>
                <div className=' max-w-[40%] mt-20'>
                    <h1 className='text-[30px] font-bold '>Children's Gardening Range</h1>
                    <p className='text-lg text-gray-600 mr-10 mt-5 '>A cute and colourful collection of gardening product to get the little ones outside this summer and beyond.</p>
                    <button className="bg-[#296647] text-white py-3 px-6 text-base rounded-br-lg rounded-tl-lg transition-all duration-300 hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-l-none hover:rounded-r-none mt-5">
                        SHOP COLLECTION
                    </button>
                </div>
                <div className='w-[60%]'>
                    <img src="/public/Gardening/img17.webp" alt="Hot Composters" className="w-full h-[350px]" />
                </div>
            </div>

            <div className='flex gap-20 justify-center items-center my-10' >
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/public/Gardening/img18.webp" alt=" Blackwall Twin Pack Bokashi Bin" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg">Burgon & Ball - Children's Hedgehog  Gloves</p>
                </div>
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/public/Gardening/img19.webp" alt="Maze Twin Pack Bokashi Bin" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg">Burgon & Ball - Children's Yellow Watering Can</p>
                </div>
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/public/Gardening/img20.jpg" alt="Bokashi Bran 3kg Refill" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg">Burgon & Ball - Children's Hedgehog Gardening </p>
                </div>
            </div>

            <div className='mx-[100px] flex mt-10'>
                <div className=' max-w-[40%] mt-20'>
                    <h1 className='text-[30px] font-bold '>Watering Cans & Plant Misters</h1>
                    <p className='text-lg text-gray-600 mr-10 mt-5 '>Keep your plants healthy and hydrated with these gorgeous watering cans and plant misters. Offering a variety of shapes, colours and sizes for all plant parents!</p>
                    <button className="bg-[#296647] text-white py-3 px-6 text-base rounded-br-lg rounded-tl-lg transition-all duration-300 hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-l-none hover:rounded-r-none mt-5">
                        SHOP COLLECTION
                    </button>
                </div>
                <div className='w-[60%]'>
                    <img src="/public/Gardening/img21.webp" alt="Hot Composters" className="w-full h-[350px]" />
                </div>
            </div>

            <div className='flex gap-20 justify-center items-center my-10' >
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/public/Gardening/img22.webp" alt=" Blackwall Twin Pack Bokashi Bin" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg">Spear & Jackson 4.5 Litre Green Steel Watering Can</p>
                </div>
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/public/Gardening/img23.webp" alt="Maze Twin Pack Bokashi Bin" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg">Elho 10L Lime Green Recycled Plastic Watering Can</p>
                </div>
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/public/Gardening/img24.webp" alt="Bokashi Bran 3kg Refill" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg">Elho 1.8 Litre White Recycled Plastic Watering Can</p>
                </div>
            </div>

        </div>
    )
}
