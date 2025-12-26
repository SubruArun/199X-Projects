import React from 'react';
import { gangInfo } from '../mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-red-600">Story</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {gangInfo.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-600 transition-all duration-300">
                <h3 className="text-3xl font-bold text-red-600 mb-2">Friendship</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Bonds that never break</p>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-600 transition-all duration-300">
                <h3 className="text-3xl font-bold text-red-600 mb-2">Gaming</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Our shared passion</p>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-600 transition-all duration-300">
                <h3 className="text-3xl font-bold text-red-600 mb-2">Adventures</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Creating memories daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;