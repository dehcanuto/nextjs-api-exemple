import React from 'react';
import Link from 'next/link';
import { HeroSingle } from '../../pages/single/types';

export const Card = ({
  id,
  name,
  description,
  thumbnail,
  events,
  comics,
  series,
  stories,
}: HeroSingle) => {
  return (
    <Link href={{ pathname: `/single/${id}` }}>
      <div className="container mx-auto max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transform transition-all duration-500">
        <div className="h-48 w-full">
          <img
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={name}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="p-2">
          <h1 className="text-xl font-bold text-gray-800 cursor-pointer ">
            {name}
          </h1>
          <ul class="flex flex-row text-xs text-gray-600">
            <li class="py-1">
              <div class="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-gray-200 text-gray-500 hover:text-gray-800">
                <span className="text-red-500 font-bold my-auto mr-2">
                  {events.available}
                </span>
                events
              </div>
            </li>
            <li class="py-1">
              <div class="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-gray-200 text-gray-500 hover:text-gray-800">
                <span className="text-red-500 font-bold my-auto mr-2">
                  {comics.available}
                </span>
                comics
              </div>
            </li>
            <li class="py-1">
              <div class="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-gray-200 text-gray-500 hover:text-gray-800">
                <span className="text-red-500 font-bold my-auto mr-2">
                  {series.available}
                </span>
                series
              </div>
            </li>
            <li class="py-1">
              <div class="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-gray-200 text-gray-500 hover:text-gray-800">
                <span className="text-red-500 font-bold my-auto mr-2">
                  {stories.available}
                </span>
                stories
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};
