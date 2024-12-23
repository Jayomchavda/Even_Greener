import { Star } from 'lucide-react'
import React from 'react'

export default function Home() {
    return (
        <div className="rtl overflow-hidden">

            <ul className="list-disc flex flex-row-reverse space-x-reverse space-x-9 animate-marquee text-[40px] font-bold py-10 whitespace-nowrap">
                <li className="rounded-full p-4">5 year guarantee</li>
                <li className="rounded-full p-4">Made from recycled plastic</li>
                <li className="rounded-full p-4">Manufactured in the UK</li>
                <li className="rounded-full p-4">Supreme quality</li>
            </ul>

            <div className="flex h-screen mx-10">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative">

                        <img
                            src="/img1.webp"
                            alt=""
                            className="w-4/5 h-auto object-cover transition-transform duration-300 transform hover:scale-105 rounded-l-lg hover:rounded-tr-lg"
                        />
                    </div>
                </div>



                <div className="flex-1 my-auto flex flex-col items-center justify-center">
                    <h1 className="text-[43px] text-center font-bold">Blackwall</h1>
                    <h1 className="text-[43px] text-center font-bold">Composters</h1>
                    <p className="text-[18px] text-center mx-10 my-5 text-gray-500">
                        Blackwall Composters are award-winning bestsellers, and for good reason too. They are made from up to 100% recycled plastic, and UV-stabilized to help them endure through wind and rain.
                    </p>
                    <button className="bg-[#296647] text-white py-3 px-6 text-base rounded-br-lg rounded-tl-lg transition-all duration-300 hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-l-none hover:rounded-r-none">
                        SHOP BLACKWALL
                    </button>


                    <div className="flex my-10 items-center justify-center gap-5">
                        <div className="flex flex-col items-center">
                            <img src="/Circular_Waste.svg" alt="Circular Waste System" className="mb-2" />
                            <span className="text-center font-bold text-gray-500 text-[17px]">Circular Waste System</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/Reduces_apple.svg" alt="Circular Waste System" className="mb-2" />
                            <span className="text-center font-bold text-gray-500 text-[17px]">Reduce Food Waste</span>
                        </div>
                    </div>

                </div>

                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative">

                        <img
                            src="/img2.jpg"
                            alt=""
                            className="w-4/5 h-auto object-cover transition-transform duration-300 transform hover:scale-105 rounded-r-lg hover:rounded-tr-lg ml-auto"
                        />
                    </div>
                </div>
            </div>

            <div className="flex h-screen mx-10">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative">

                        <img
                            src="/img3.webp"
                            alt=""
                            className="w-4/5 h-auto object-cover transition-transform duration-300 transform hover:scale-105 rounded-l-lg hover:rounded-tr-lg"
                        />
                    </div>
                </div>


                <div className="flex-1 my-auto flex flex-col items-center justify-center">
                    <h1 className="text-[43px] text-center font-bold">Cloudburst Water</h1>
                    <h1 className="text-[43px] text-center font-bold">Butts</h1>
                    <p className="text-[18px] text-center mx-10 my-5 text-gray-500">
                        Cloudburst water butts are a popular choice amongst seasoned gardeners. Cloudburst is the perfect choice for a family home, and is available to size up with a double kit too.
                    </p>
                    <button className="bg-[#296647] text-white py-3 px-6 text-base rounded-br-lg rounded-tl-lg transition-all duration-300 hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-l-none hover:rounded-r-none">
                        SHOP CLOUDBURST
                    </button>


                    <div className="flex my-10 items-center justify-center gap-5">
                        <div className="flex flex-col items-center">
                            <img src="/Water_Saving.svg" alt="Circular Waste System" className="mb-2" />
                            <span className="text-center font-bold text-gray-500 text-[17px]">Water-Saving</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/Size_Adjustable.svg" alt="Circular Waste System" className="mb-2" />
                            <span className="text-center font-bold text-gray-500 text-[17px]">Size Adjustable</span>
                        </div>
                    </div>

                </div>

                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative">

                        <img
                            src="/img4.webp"
                            alt=""
                            className="w-4/5 h-auto object-cover transition-transform duration-300 transform hover:scale-105 rounded-r-lg hover:rounded-tr-lg ml-auto"
                        />
                    </div>
                </div>

            </div>


            <div className="flex items-center text-white" >
                <div className="flex-1 h-[540px]">
                    <img
                        src="/img5.webp"
                        alt="Review Image"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 h-[540px] bg-[#296647] flex flex-col justify-center  ">
                    <div className='px-16'>

                        <p className="text-[20px] mb-12">WHAT PEOPLE ARE SAYING</p>
                        <div className="flex mb-5">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </div>
                        <p className="font-extrabold text-[25px] ">
                            These are the second and third water butts we have bought from EvenGreener. Good quality, come with everything you
                            need to get them installed. Really quick delivery. Will definitely buy from you again.
                        </p>
                        <p className="text-[18px] mt-4">Karen W.</p>


                        <button className="bg-[#296647] text-white mt-10 py-3 px-6 text-base rounded-br-lg rounded-tl-lg transition-all duration-300 hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-l-none hover:rounded-r-none border border-white">
                            SHOP RAINSAVERS
                        </button>

                    </div>

                </div>
            </div>

            <div className="flex my-10 gap-6 justify-center items-center px-24">
                <div className="w-1/3 text-left p-5">
                    <p className="text-gray-600 text-[18px] mb-6 ">FROM THE BLOG</p>
                    <h1 className="font-bold text-[30px] pb-6">Helping you lead an EvenGreener lifestyle</h1>
                    <button className="bg-[#296647] text-white py-3 px-6 text-base rounded-br-lg rounded-tl-lg transition-all duration-300 hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-l-none hover:rounded-r-none">
                        VIEW BLOG
                    </button>
                </div>

                {/* Blog Card 1 */}
                <div className="w-1/3 flex flex-col items-center">
                    <img
                        className="w-full h-auto object-cover"
                        src="/img6.webp" // Correct image path
                        alt="Save Money and the Environment"
                    />
                    <p className="font-bold text-[15px] my-3 text-center">
                        Save Money and the Environment: How to fit a Water Butt
                    </p>
                </div>

                {/* Blog Card 2 */}
                <div className="w-1/3 flex flex-col items-center">
                    <img
                        className="w-full h-auto object-cover"
                        src="/img7.jpg" // Correct image path
                        alt="What Are Compost Bins"
                    />
                    <p className="font-bold text-[16px] my-3 text-center">
                        What Are Compost Bins & How Do They Work?
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center gap-28 mb-10 mt-10">
                <div>
                    <p>AS SEEN IN</p>
                </div>
                <div>
                    <img src="/BBC image .png" alt="BBC" />
                </div>
                <div>
                    <img src="/Gardeners world.png" alt="Gardeners World" />
                </div>
            </div>


        </div>
    )
}
