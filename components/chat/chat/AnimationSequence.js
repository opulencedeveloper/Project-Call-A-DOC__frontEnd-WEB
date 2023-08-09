import { useState, useEffect } from 'react';

const AnimationSequence = () => {
  const [currentDiv, setCurrentDiv] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDiv((prevDiv) => (prevDiv % 3) + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className="flex">
      <div className={`w-1/3 bg-blue-500 transition-all duration-500 ${currentDiv === 1 ? 'my-32' : 'my-16'}`}>
        First Div
      </div>
      <div className={`w-1/3 bg-blue-500 transition-all duration-500 ${currentDiv === 2 ? 'my-32' : 'my-16'}`}>
        Second Div
      </div>
      <div className={`w-1/3 bg-blue-500 transition-all duration-500 ${currentDiv === 3 ? 'my-32' : 'my-16'}`}>
        Third Div
      </div>
    </div>
  );
};

export default AnimationSequence;
