import React from 'react';

const App: React.FC = () => (
  <>
    <div className="text-black">react-redux-my-example-app</div>
    <button
      type="button"
      onClick={() => document.documentElement.classList.toggle('dark')}
      className="text-black bg-blue-300 p-1"
    >
      Toggle
    </button>
  </>
);

export default App;
