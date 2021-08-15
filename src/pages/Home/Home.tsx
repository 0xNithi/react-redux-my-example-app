import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-black">react-redux-my-example-app</div>
      <button
        type="button"
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="p-1 text-black bg-blue-300"
      >
        Toggle
      </button>
    </div>
  );
};

export default Home;
