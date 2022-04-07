import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Sidebar from './components/sidebar/Sidebar';

const App: Component = () => {
  return (
    <div class='bg-indigo-500 w-full h-screen flex'>
      <Sidebar />
      <header class='bg-red-500 flex-1'>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class='btn'
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
