import React from 'react'

export default function FoodWasteCom() {
    return (
        <div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                    <img
                        src="/Food Waste Com/img1.webp"
                        alt="Food Waste Image"
                        className="w-full h-[500px] object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 p-10 pr-[180px] mt-5">
                    <h1 className="text-[40px] font-bold mb-2">Food Waste Solutions</h1>
                    <p className="mb-4 text-gray-600 text-lg">
                        Reducing food waste is one of the best ways to start living more sustainably, as discarded food waste produces 8-10% of all greenhouse gas emissions globally. Composting provides the solution; it allows food scraps to break down through an aerobic process where no emissions are released.
                    </p>
                    <div className="flex items-center mb-2 mt-7">
                        <img
                            src="/Food Waste Com/icon1.svg"
                            alt="Circular Waste System Icon"
                            className="w-9 h-9 mr-2 "
                        />
                        <span className="text-lg font-bold ml-1">Circular Waste System</span>
                    </div>
                    <div className="flex items-center mt-7">
                        <img
                            src="/Food Waste Com/icon2.svg"
                            alt="Carbon Neutral Living Icon"
                            className="w-9 h-9 mr-2"
                        />
                        <span className="text-lg font-bold ml-1">Carbon Neutral Living</span>
                    </div>
                </div>
            </div>

            <div className='flex gap-20 justify-center items-center my-10' >
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/Gardan Composting/img7.webp" alt="Blackwall Twin Pack Bokashi Bin" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg">Green Johanna 330 Litre Hot Composter</p>
                </div>
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/Gardan Composting/img8.jpg" alt="Maze Twin Pack Bokashi Bin" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg">HOTBIN Mini 100 Litre Compost Bin</p>
                </div>
                <div className='text-center transform transition-all hover:scale-105 hover:shadow-lg'>
                    <img src="/Gardan Composting/img9.webp" alt="Bokashi Bran 3kg Refill" className="w-[390px] h-[400px]" />
                    <p className="mt-2 text-lg   ">HOTBIN 200 Litre Compost Bin</p>
                </div>
            </div>




        </div>
    )
}
