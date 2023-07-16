"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "../../components/Navbar"
import { useAddress, useContract, useDisconnect, useOwnedNFTs } from "@thirdweb-dev/react";

export default function Page({ params }: { params: { address: string } }) {
    const router = useRouter()
    const address = useAddress()
    const disconnect = useDisconnect()

    const {
        contract
    } = useContract(
        '0x017ddfb3596A0251E9f1608902e038350d2855EC',
        'edition-drop'
    )
    const {
        data: ownedNfts,
        isLoading: ownedNftsLoading,
    } = useOwnedNFTs(contract, address)

    const signout = () => {
        disconnect()
        router.push("/")
    }

    return (
        <div className="bg-white">
            {/* <Navbar /> */}
            <div className="relative px-6 pt-14 flex justify-center">
                <div className="absolute flex flex-col overflow-y-hidden mt-14 w-2/3 h-[90vh]">
                    <h1 className="text-black">profile <button className=" border border-black p-1 rounded-md shadow-[5px_5px_0px_0px_rgba(109,40,217)]" onClick={signout}>
                        SignOut
                    </button></h1>
                    
                    <h3 className="mt-6">Your Collectibles: </h3>
                    <div className="flex flex-row items-center gap-12 w-full h-full">
                        {!ownedNftsLoading && ownedNfts ? (
                            ownedNfts?.length > 0 ? (
                                ownedNfts.map((nft) => (
                                    <div key={nft.metadata.id} className="">
                                        <div className="max-w-sm border rounded-lg shadow-[5px_5px_0px_0px_rgba(109,40,217)] bg-teal-300">
                                                <img className="rounded-lg items-stretch overflow-hidden w-full h-full" 
                                                src={nft?.metadata?.image || ""} alt=""/>
                                            <div className="p-5">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nft.metadata.name}</h5>
                                                <div className="flex flex-row">
                                                    Quantity:
                                                    <p>{nft.quantityOwned}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (<h3>You dont have any collection</h3>)
                        ) : (
                            <p className="text-black">Loading....</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
