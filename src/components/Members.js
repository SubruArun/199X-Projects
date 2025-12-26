import React, { useState } from 'react';
import { User, X, Trophy, MessageSquare } from 'lucide-react';
import { members } from '../mock';

const MemberModal = ({ member, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2 border-gray-200 dark:border-gray-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-6 flex items-center justify-between z-10">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center border-4 border-red-600">
              <User className="w-8 h-8 text-gray-400 dark:text-gray-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{member.name}</h2>
              <p className="text-red-600 font-semibold">{member.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Full Bio */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="text-red-600 mr-2">•</span> About
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {member.fullBio}
            </p>
          </div>

          {/* Favorite Game */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="text-red-600 mr-2">•</span> Main Game
            </h3>
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
              {member.favoriteGame}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
              <Trophy className="w-5 h-5 text-red-600 mr-2" /> Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {member.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center"
                >
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
              <MessageSquare className="w-5 h-5 text-red-600 mr-2" /> What the Squad Says
            </h3>
            <div className="space-y-3">
              {member.testimonials.map((testimonial) => (
                <div
                  key={testimonial.memberId}
                  className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                >
                  <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sm text-red-600 font-semibold">
                    - {testimonial.memberName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Members = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      <section id="members" className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              The <span className="text-red-600">Squad</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Meet the legends of 199X</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {members.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-red-600 dark:hover:border-red-600 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 hover:-translate-y-2 cursor-pointer"
              >
                {/* Avatar Placeholder */}
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-300 dark:border-gray-700 group-hover:border-red-600 transition-all duration-300">
                    <User className="w-12 h-12 text-gray-400 dark:text-gray-600" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                    {member.bio}
                  </p>
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      Mains: <span className="text-red-600 font-medium">{member.favoriteGame}</span>
                    </p>
                  </div>
                  <div className="mt-3">
                    <span className="text-xs text-gray-400 dark:text-gray-500">Click for more details</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal */}
      <MemberModal
        member={selectedMember}
        isOpen={selectedMember !== null}
        onClose={() => setSelectedMember(null)}
      />
    </>
  );
};

export default Members;