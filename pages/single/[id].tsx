import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { HeroSingle } from './types';
import { getHero } from '../../services/heroes';
import { Header } from '../../components/header';

export default function SinglePage() {
  const router = useRouter();
  const slug: string = router.query.id as string;

  const [singleHero, setSingleHero] = useState<HeroSingle>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      const { results } = await getHero(slug);
      console.log('init SinglePage', results[0]);
      setSingleHero(results[0]);
      setLoading(false);
    }
    init();
  }, []);

  return (
    <div className="min-w-screen min-h-screen bg-gray-200 px-5 py-5">
      <Header title={slug} />
      <div className="max-w-5xl mx-auto mt-16">
        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 p-3 mx-auto">
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <img
              src={
                singleHero?.thumbnail?.path +
                '.' +
                singleHero?.thumbnail?.extension
              }
              alt="tailwind logo"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col w-full md:w-2/3 space-y-2 p-3">
            <div className="flex justify-between item-center">
              <p className="text-gray-500 font-medium hidden md:block">
                #{slug}
              </p>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-gray-600 font-bold text-sm ml-1">4.96</p>
              </div>
              <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                Superhost
              </div>
            </div>
            <h3 className="font-black text-gray-800 md:text-3xl text-xl">
              {singleHero?.name}
            </h3>
            <p className="md:text-lg text-gray-500 text-base">
              {singleHero?.description}
            </p>
            <p className="text-xl font-black text-gray-800">
              $110
              <span className="font-normal text-gray-600 text-base">
                /night
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
