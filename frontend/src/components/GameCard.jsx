import React from 'react'
import { Star } from 'lucide-react'

export default function GameCard({ game }) {
  return (
    <div className="bg-[#202020] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105">
      <img src={game.background_image} alt={game.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex space-x-2">
            {game.parent_platforms.map(({ platform }) => (
              <span key={platform.id} className="text-xs bg-gray-700 rounded px-2 py-1">
                {platform.name}
              </span>
            ))}
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm">{game.rating}</span>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2">{game.name}</h2>
        <div className="flex justify-between text-sm text-gray-400">
          <span>Release: {new Date(game.released).toLocaleDateString()}</span>
          <span>{game.genres.map(genre => genre.name).join(', ')}</span>
        </div>
      </div>
    </div>
  )
}