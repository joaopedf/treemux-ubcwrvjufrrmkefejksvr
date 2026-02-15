'use client';

import { MapPin, Clock, Zap, Mountain, Coffee, Music } from 'lucide-react';

const examples = [
  {
    icon: MapPin,
    title: 'Rooftop Sunset Spots',
    description: 'Find secret rooftops with the best views in your city',
    color: 'from-orange-500 to-pink-500',
  },
  {
    icon: Mountain,
    title: 'Weekend Micro-Adventures',
    description: 'Spontaneous getaways within 2 hours of your city',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Music,
    title: 'Underground Events',
    description: 'Discover hidden shows, popup experiences, and secret gatherings',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Coffee,
    title: 'Unique Local Experiences',
    description: 'Try that activity you have been curious about but never attempted',
    color: 'from-yellow-500 to-red-500',
  },
];

export function AdventureExamples() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto px-4 py-8">
      {examples.map((example, i) => {
        const Icon = example.icon;
        return (
          <div
            key={i}
            className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${example.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${example.color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{example.title}</h3>
              <p className="text-sm text-gray-400">{example.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
