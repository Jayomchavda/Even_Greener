import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='flex justify-around bg-[#f1efe7] py-5'>
                <div className='flex'>
                    <img src="/uk-flag.svg" alt="" />
                    <div className='ml-5'>
                        <p>Made in the UK</p>
                        <p>From recycled plastic </p>
                    </div>
                </div>
                <div className='flex'>
                    <img src="/Manufactured_in_Britain_EG_GC.svg" alt="" />
                    <div className='ml-5'>
                        <p>Our Bestseller</p>
                        <p>Are made from recycled plastic </p>
                    </div>
                </div>
                <div className='flex'>
                    <img src="/GCHomepage_ResponsiblySourced_Hand.svg" alt="" />
                    <div className='ml-5'>
                        <p>Enjoy free Delivery </p>
                        <p>On mainland UK orders over £65 </p>
                    </div>
                </div>
            </div>

            <div className='bg-[#143324] py-[40px] '>
                <div className='h-[250px] w-[470px] ml-[120px]' >
                    <h1 className='text-[35px] font-bold text-white'>Join our EvenGreener Gang!</h1>
                    <p className='my-5 text-white text-[20px]'>Sign up for discounts, product updates, composting and water saving tips, and much more.</p>
                    {/* <p className="text-red-300 text-sm pl-1">Email can't be blank.</p> */}
                    <div className="relative flex group mt-8">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-6 py-4 bg-white/10 backdrop-blur-md text-white placeholder-white/60 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 pr-36 text-lg"
                        />
                        <button
                            className="absolute right-0 top-0 h-full px-8 bg-white text-green-700 font-semibold rounded-tr-xl rounded-bl-xl hover:bg-green-100 active:bg-white transition-all duration-300 text-lg group-hover:shadow-lg group-hover:shadow-white/20"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-[#296647] flex flex-col pb-20'>
                <div className='pt-16 pl-[122px]'>
                    <img src="/white-logo-footer.svg" alt="Logo" className='w-1/7' />
                </div>

                <div className='flex justify-between px-[122px] mt-8'>
                    <div>
                        <p className='text-lg py-2 text-white text-[20px] underline'>SHOP</p>
                        <div className='text-white'>
                            <p className='py-[7px]' role='button'>Bestsellers</p>
                            <p className='py-[7px]' role='button'>Composters</p>
                            <p className='py-[7px]' role='button'>Water Butts</p>
                        </div>
                    </div>

                    {/* Second column */}
                    <div>
                        <p className='text-lg py-2 text-white text-[20px] underline'>GOOD TO KNOW</p>
                        <div className='text-white'>
                            <p className='py-[7px]' role='button'>About Us</p>
                            <p className='py-[7px]' role='button'>Bulk Enquiries</p>
                            <p className='py-[7px]' role='button'>Customer Reviews</p>
                        </div>
                    </div>
                    {/* Third column */}
                    <div>
                        <p className='text-lg py-2 text-white text-[20px] underline'>SUPPORT</p>
                        <div className='text-white'>
                            <p className='py-[7px]' role='button'>Help Centre</p>
                            <p className='py-[7px]' role='button'>Delivery & Returns</p>
                            <p className='py-[7px]' role='button'>Blogs & Guides</p>
                        </div>
                    </div>
                    {/* Four column */}
                    <div>
                        <p className='text-lg py-2 text-white text-[20px] underline'>CONNECT</p>
                        <div className='text-white'>
                            <p className='py-[7px]' role='button'>Facebook</p>
                            <p className='py-[7px]' role='button'>Instagram</p>
                            <p className='py-[7px]' role='button'>YouTube</p>
                        </div>
                    </div>
                    {/* Five column */}
                    <div>
                        <p className='text-lg py-2 text-white text-[20px] underline'>ACCOUNT</p>
                        <div className='text-white'>
                            <p className='py-[7px]' role='button'>Manage Account</p>
                            <p className='py-[7px]' role='button'>Orders & Returns</p>
                        </div>
                    </div>
                    {/* Six column */}
                    <div>
                        <p className='text-lg py-2 text-white text-[20px] underline'>POLICIES</p>
                        <div className='text-white'>
                            <p className='py-[7px]' role='button'>T&Cs</p>
                            <p className='py-[7px]' role='button'>Cookie Policy</p>
                            <p className='py-[7px]' role='button'>Privacy Policy</p>
                        </div>
                    </div>

                    {/* Seven column */}
                    <div>
                        <p className='text-lg py-2 text-white text-[20px] underline'>GET IN TOUCH</p>
                        <div className='text-white'>
                            <p className='font-bold' role='button'>Email ID</p>
                            <p className='' role='button'>customer.care@evengreener.com</p>
                            <p className='mt-5 font-bold' role='button'>Phone</p>
                            <p className='' role='button'>0800 316 4454 (Freephone)</p>
                        </div>

                    </div>
                </div>
                <div className="text-center  text-white">
                    <hr className="w-[80%] mx-auto my-10" />
                    <p >© 2024 EvenGreener. All Rights Reserved.</p>
                </div>

            </div>
        </>


    )
}
