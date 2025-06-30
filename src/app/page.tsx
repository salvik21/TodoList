import React from 'react';
import Todos from './components/Organisms/Todos';
import NavBar from './components/Organisms/NavBar';


export default function Home() {
  return (
    <>
    <NavBar />
    <main>
      <div>
        
      < Todos />
      </div>
    </main>
    </>
  );
}
