import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const dogData = async () => {
    const dogInfo = await fetch('https://dog.ceo/api/breeds/image/random');
    const dogImage = await dogInfo.json();
    setImageUrl(dogImage.message);
    setIsLoading(false);
  };

  useEffect(() => {
    dogData();
  }, []);

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <div>
      <h1>Doguinhos</h1>
      <img src={ imageUrl } alt="Doguinho aleatório" />
      <button onClick={ dogData }>Novo doguinho!</button>
    </div>
  );
}

export default App;
