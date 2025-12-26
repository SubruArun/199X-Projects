import React from 'react';
import { Crosshair, Trophy, Truck, Link, Car, Zap, Sword } from 'lucide-react';
import { games } from '../mock';

const iconMap = {
  crosshair: Crosshair,
  trophy: Trophy,
  truck: Truck,
  link: Link,
  car: Car,
  zap: Zap,
  sword: Sword
};

const Games = () => {
  return (
    <section id="games" className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-red-600">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">The games where we make our mark</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => {
            const IconComponent = iconMap[game.icon];
            return (
              <div
                key={game.id}
                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-red-600 dark:hover:border-red-600 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg group-hover:bg-red-600 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {game.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {game.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Games;