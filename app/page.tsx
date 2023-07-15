"use client"

import { renderPaperCheckoutLink } from "@paperxyz/js-client-sdk"
import React, { useEffect, useState } from "react";

const oneMonth = () =>
  renderPaperCheckoutLink({
    checkoutLinkUrl: `https://withpaper.com/checkout/a856d8e9-f230-444e-b3cc-c65cafb13548`,
  });

  const sixMonths = () =>
  renderPaperCheckoutLink({
    checkoutLinkUrl: `https://withpaper.com/checkout/51073c31-8086-499f-8ae9-492bf2cbc3f9`,
  });

  const oneYear = () =>
  renderPaperCheckoutLink({
    checkoutLinkUrl: `https://withpaper.com/checkout/ddd77875-25cf-4cd6-95f1-45aeb72766f8`,
  });

export default function Home() {

  return (

    <>
    <h1 className="text-center text-4xl font-semibold font-serif m-4">
      30 Days of Coding
    </h1>

    <h2 className="text-center text-2xl font-semibold font-serif m-4">
      Subscription Plans
    </h2>

    <div className="grid grid-cols-3 grid-rows-1 gap-10 ml-14 mt-10">
      
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <img className="rounded-t-lg" src="spiderman.jpg" alt="" />
          </a>
          <div className="p-5">
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">1 Month Subscription</h5>
              </a>
          </div>
          <button
            className="bg-red-400 text-white p-2 rounded-md ml-5 mb-4"
            onClick={() => oneMonth()}
          >
            Claim NFT
          </button>
      </div>

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <img className="rounded-t-lg" src="deadpool.jpg" alt="" />
          </a>
          <div className="p-5">
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">6 Months Subscription</h5>
              </a>
          </div>
          <button
            className="bg-red-400 text-white p-2 rounded-md ml-5 mb-4"
            onClick={() => sixMonths()}
          >
            Claim NFT
          </button>
      </div>

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <img className="rounded-t-lg object-contain overflow-hidden w-full" src="shaktiman.jpg" alt="" />
          </a>
          <div className="p-5">
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">1 year Subscription</h5>
              </a>
          </div>
          <button
            className="bg-red-400 text-white p-2 rounded-md ml-5 mb-4"
            onClick={() => oneYear()}
          >
            Claim NFT
          </button>
      </div>
    </div>
    </>
  );
}
