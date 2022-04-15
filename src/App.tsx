import { Component, createSignal } from 'solid-js';

import logo from './assets/logo.svg';
import music from './assets/mercedes.mp3';
import styles from './App.module.css';
import Sidebar from './components/sidebar/Sidebar';
import Video from './components/video/Video';
import { getRandomInt } from './app/helper';

const App: Component = () => {
	const [number, setNumber] = createSignal(0);
	const handleRandomNumber = () => {
		const targetNumber = getRandomInt(0,10);
		setNumber(targetNumber);
	}
	return (
		<div class='bg-indigo-500 w-full h-screen flex'>
			<Sidebar />

			<header class='bg-[#f5f5f5] flex-1 pl-4'>
				<div>
					<img src={logo} class={styles.logo} alt='logo' />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<audio src={music} controls crossorigin='anonymous' />
					<a class='btn' href='https://github.com/solidjs/solid' target='_blank' rel='noopener noreferrer'>
						Learn Solid
					</a>
					<Video />
					<p class='gg'>
						한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용
					</p>

					<button class='btn' onClick={handleRandomNumber}>랜덤 넘버{number}</button>
					<p class='gg'>
						한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용
					</p>
					<p class='gg'>
						한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용
					</p>
					<p class='gg'>
						한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용
					</p>
					<p class='gg'>
						한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용
					</p>
					<p class='gg'>
						한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용
					</p>
					<p class='gg'>
						한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용
					</p>
					<p class='gg'>
						한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용
					</p>
					<p class='gg'>
						한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용
					</p>
					<p class='gg'>
						한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용
					</p>
					<p class='gg'>
						한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용
					</p>
					<p class='gg'>
						한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용
					</p>
				</div>
			</header>
		</div>
	);
};

export default App;
