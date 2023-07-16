import Link from 'next/link'
import React from 'react'
import { ConnectWallet, useAddress } from '@thirdweb-dev/react'

const Navbar = () => {
    const address = useAddress()

    return (
        <div>
            <div className="">
                <header className="absolute inset-x-0 top-0">
                    <nav className="flex items-center justify-between p-6">
                        <div className="flex flex-row w-full">
                            <Link href="/" className="-mb-1 p-1.5 flex flex-row">
                                <img
                                    className="h-11 w-full flex-1"
                                    src="logo.webp"
                                    alt=""
                                />
                                <p className="text-black bg-red-500 font-sans text-xl m-2 px-2">30 Days of Coding</p>
                            </Link>
                        </div>
                        <div>
                            {!address ? (
                                <ConnectWallet 
                                    btnTitle="Login"
                                />
                            ) : (
                                <Link href={`/profile/${address}`}>
                                    <img src="profile.png" className="h-12 w-12 rounded-full bg-black" />
                                </Link>
                            )}
                            
                        </div>
                    </nav>
                </header>

            </div>
        </div>
    )
}

export default Navbar
