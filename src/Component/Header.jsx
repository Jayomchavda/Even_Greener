import { Heart, Search, ShoppingBag, User } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <div className="bg-[#296647] p-4 flex justify-between items-center">
                <h1 className=" text-center flex-grow text-white underline ml-[210px]">
                    FREE UK Delivery Over £65*
                </h1>
                <p className='text-white underline'>BULK BUY OPTIONS AVAILABLE</p>
            </div>

            <div className="flex justify-between items-center gap-4 mx-14 py-3">
                <div className="flex gap-2">
                    <img src="/tiktok_icon.svg" role="button" alt="TikTok Icon" className="w-8 h-8" />
                    <img src="/youtube logo_icon.svg" role="button" alt="Youtube Icon" className="w-8 h-8" />
                    <img src="/instagram_logo_icon.svg" role="button" alt="Instagram Icon" className="w-8 h-8" />
                    <img src="/facebook_icon.svg" role="button" alt="Facebook Icon" className="w-7 h-7" />
                    <img src="/pintrest_social_icon.svg" role="button" alt="Pint Icon" className="w-7 h-7" />
                </div>

                <div className="flex justify-center">
                    <img src="/logo.jpg" alt="Logo" />
                </div>

                <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-2">
                        <Search role='button' />
                        <span>Search</span>
                    </div>
                    <Heart role='button' />
                    <User role='button' />
                    <ShoppingBag role='button' />
                </div>
            </div>

            <div className="flex flex-row gap-10 justify-center mx-auto">
                <div>
                    <NavLink to="/">
                        <h1>HOME</h1>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/composting">
                        <h1>GARDEN COMPOSTING</h1>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/foodwastecomposting">
                        <h1 role='button'>FOOD WASTE COMPOSTING</h1>
                    </NavLink>

                </div>
                <div>
                    <NavLink to="/watersaving">
                        <h1 role='button'>WATER SAVING</h1>
                    </NavLink>

                </div>
                <div>
                    <NavLink to="/gardening">
                        <h1 role='button'>GARDENING</h1>
                    </NavLink>

                </div>

                <div>
                    <NavLink to="/brands">
                        <h1 role='button'>BRANDS</h1>
                    </NavLink>
                </div>

            </div>

            <div className="bg-[#6bb335] py-3 flex justify-between items-center mt-3">
                <h1 className=" text-center flex-grow text-white ">
                    20+ Years Trading Online
                </h1>
            </div>
        </div >
    )
}
