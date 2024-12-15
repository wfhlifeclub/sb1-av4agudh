import React, { useState } from 'react';
import { Player } from './types';
import { assignShapes } from './utils/shapeAssignment';
import { ShapeIcon } from './components/ShapeIcon';

function App() {
  const [names, setNames] = useState<string>('');
  const [players, setPlayers] = useState<Player[]>([]);
  const [isAssigned, setIsAssigned] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameList = names.split('\n').filter(name => name.trim() !== '');
    const assignedPlayers = assignShapes(nameList);
    setPlayers(assignedPlayers);
    setIsAssigned(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-[#FF0F7B] py-6">
        <h1 className="text-4xl font-bold text-center">Squid Game Shape Assignment</h1>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {!isAssigned ? (
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">Enter Participant Names</h2>
              <p className="text-gray-400 mb-4">Enter each name on a new line</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={names}
                  onChange={(e) => setNames(e.target.value)}
                  className="w-full h-48 bg-gray-800 text-white rounded-lg p-4 focus:ring-2 focus:ring-[#FF0F7B] focus:outline-none"
                  placeholder="John Doe&#10;Jane Smith&#10;..."
                />
                <button
                  type="submit"
                  className="w-full bg-[#FF0F7B] hover:bg-[#FF0F7B]/80 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Assign Shapes
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-xl">
              <h2 className="text-2xl font-semibold mb-6">Assigned Shapes</h2>
              <div className="space-y-4">
                {players.map((player, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-800 p-4 rounded-lg"
                  >
                    <span className="text-lg">{player.name}</span>
                    <div className="flex items-center space-x-2">
                      <ShapeIcon shape={player.shape} className="text-[#FF0F7B]" />
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  setIsAssigned(false);
                  setPlayers([]);
                }}
                className="mt-6 w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;