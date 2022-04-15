import { Component, onMount } from 'solid-js';

import logo from './assets/logo.svg';
import music from './assets/mercedes.mp3';
import styles from './App.module.css';
import Sidebar from './components/sidebar/Sidebar';
import Video from './components/video/Video';
import gsap from 'gsap';

const App: Component = () => {
	onMount(() => {
		let timeLine = gsap.timeline({ defaults: { duration: 0.1 } });
		const value = getComputedStyle(document.documentElement)
    .getPropertyValue('--s');

		const primary = getComputedStyle(document.documentElement)
    .getPropertyValue('--in');

		const wac = getComputedStyle(document.documentElement)
    .getPropertyValue('--er');

		const accent = getComputedStyle(document.documentElement)
    .getPropertyValue('--a');

		timeLine.set('#header', { top: '75%', background: `hsl${wac}`, delay: 0.5 });
		timeLine.to('#header', { top: '50%', background: `hsl${primary}`, delay: 0.5 });
		timeLine.to('#logo', { height: '60vmin', delay: 0.5});
		timeLine.to('#header', { top: '50%', background: `hsl${accent}`, delay: 0.5 });
		timeLine.to('#logo', { height: '80vmin', delay: 0.5 });
		timeLine.fromTo('#header', { top: '60%' }, { top: '25%', background: `hsl(${value})`, delay: 0.5  });
	});
	return (
		<div class='bg-indigo-500 w-full h-screen flex'>
			<Sidebar />

			<header class='bg-[#f5f5f5] flex-1 pl-4' id='header'>
				<div>
					<img src={logo} class={styles.logo} alt='logo' id='logo' />
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
