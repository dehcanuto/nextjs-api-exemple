import React from 'react';
import Link from 'next/link';
import { HeroSingle } from '../../pages/single/types';

export const Card = ({
  id,
  name,
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
        <div className="p-2 space-y-2">
          <h1 className="text-xl font-bold text-gray-800 cursor-pointer truncate">
            {name}
          </h1>
          <ul className="grid gap-4 grid-cols-4 text-xs text-gray-600">
            <li className="py-1">
              <div className="flex flex-col text-center items-center text-gray-500">
                <span className="text-red-500 font-bold my-auto mr-2">
                  {events.available}
                </span>
                <small className="text-xs">events</small>
              </div>
            </li>
            <li className="py-1">
              <div className="flex flex-col text-center items-center text-gray-500">
                <span className="text-red-500 font-bold my-auto mr-2">
                  {comics.available}
                </span>
                <small className="text-xs">comics</small>
              </div>
            </li>
            <li className="py-1">
              <div className="flex flex-col text-center items-center text-gray-500">
                <span className="text-red-500 font-bold my-auto mr-2">
                  {series.available}
                </span>
                <small className="text-xs">series</small>
              </div>
            </li>
            <li className="py-1">
              <div className="flex flex-col text-center items-center text-gray-500">
                <span className="text-red-500 font-bold my-auto mr-2">
                  {stories.available}
                </span>
                <small className="text-xs">stories</small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};
