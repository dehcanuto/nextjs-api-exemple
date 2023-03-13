import { useEffect, useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { HeroSingle } from './single/types';
import { listHeros } from '../services/heroes';

import { Header } from '../components/header';
import { Card } from '../components/card';

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      const { results } = await listHeros();
      console.log('results', results);
      setHeroes(results);
      setLoading(false);
    }
    init();
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
          <Header title="Home" />
          <div className="max-w-6xl w-full mx-auto mt-16">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              {!loading ? (
                heroes.map((item: HeroSingle, index) => {
                  return <Card {...item} key={index} />;
                })
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
