import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
      setSingleHero(results[0]);
      setLoading(false);
    }
    init();
  }, []);

  return (
    <div className="min-w-screen min-h-screen bg-gray-200 px-5 py-5">
      <Header title={`#${slug} - ${singleHero?.name}`} />
      <div className="max-w-6xl space-y-3 w-full mx-auto mt-16">
        <div className="px-2">
          <Link href={{ pathname: '/' }}>
            <span className="font-bold text-blue-600 text-xl">Back</span>
          </Link>
        </div>
        <div className="relative flex flex-col bg-white md:flex-row md:space-x-5 space-y-3 md:space-y-0 p-3 mx-auto shadow rounded">
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <img
              src={
                singleHero?.thumbnail?.path +
                '.' +
                singleHero?.thumbnail?.extension
              }
              alt={singleHero?.name}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col w-full md:w-2/3 space-y-2 p-3">
            <div className="flex justify-between items-center bg-white py-2 px-4">
              <div className="flex items-center space-x-2 text-gray-500">
                <p className="font-bold text-gray-800">
                  {singleHero?.comics.available}
                </p>
                <small>Comics</small>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <p className="font-bold text-gray-800">
                  {singleHero?.series.available}
                </p>
                <small>Series</small>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <p className="font-bold text-gray-800">
                  {singleHero?.stories.available}
                </p>
                <small>Stories</small>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <p className="font-bold text-gray-800">
                  {singleHero?.events.available}
                </p>
                <small>Events</small>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500 font-medium hidden md:block">
                #{slug}
              </p>
            </div>
            <h3 className="font-black text-gray-800 md:text-3xl text-xl">
              {singleHero?.name}
            </h3>
            <p className="md:text-lg text-gray-500 text-base">
              {singleHero?.description ?? 'No description'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
