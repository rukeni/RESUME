import { Component, createEffect, createSignal, onMount } from 'solid-js';

import logo from './assets/logo.svg';
import music from './assets/mercedes.mp3';
import styles from './App.module.css';
import Sidebar from './components/sidebar/Sidebar';
import Video from './components/video/Video';
import { getRandomInt } from './app/helper';
import gsap from 'gsap';

const App: Component = () => {
	const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
	// 레거시를 위한 설정
	const AudioContext = window.AudioContext || window.webkitAudioContext;

	// web audio api를 사용하기 위한 컨텍스트 인스턴스 선언
	// BaseAudioContext가 자동 생성된다.
	const audioContext = new AudioContext();
	let audioRef: HTMLAudioElement;
	let requestId:number;

	const [number, setNumber] = createSignal(0);
	const [audio, setAudio] = createSignal<AudioContext>();
	const [isPlay, setIsPlay] = createSignal(false);
	const handleRandomNumber = () => {
		const targetNumber = getRandomInt(0,29);
		setNumber(targetNumber);
		document.documentElement.dataset.theme = themes[number()]
	}

	const handleAudioPlay = () => {
		if (audio()?.state === 'suspended') {
			audio()?.resume();
	}
	const getTime = () => {
		if(isPlay() === true) {
			let prevValue = -1;
			const result = audioContext.getOutputTimestamp().contextTime;
			if(Number(result) - prevValue === 1) {
				console.log('result.contextTime', Math.floor(Number(result)));
				prevValue++
			}
			requestId = requestAnimationFrame(getTime);
		} else {
			console.log('캔슬')
			cancelAnimationFrame(requestId)
		}
	}
	// 상태에 따라 트랙을 재생하거나 정지합니다
	const audioElement = document.querySelector('audio');
	if(audioElement) {
		console.log('audioElement', audioElement);
		if(isPlay() === true) {
			console.log('isPlay()', isPlay())
			setIsPlay(false);
			audioElement.pause();
			return false;
		}
		if(isPlay() === false) {
			console.log('isPlay()', isPlay())
			setIsPlay(true)
			audioElement.play();
			getTime();
			return false;
		}
	}


		}

		const handleAudioTime = () => {
			const result = audioContext.getOutputTimestamp();
			console.log('result.contextTime', result.contextTime)
		}
	onMount(() => {
		const audioElement = document.querySelector('audio');
		// querySelector로 찾으면 null이 될 수 있기에 분기 처리
		if(audioElement) {
			const track = audioContext.createMediaElementSource(audioElement);
			track.connect(audioContext.destination);
			setAudio(audioContext);
		}
		
		let timeLine = gsap.timeline({ defaults: { duration: 0.1 } });
		const value = getComputedStyle(document.documentElement)
    .getPropertyValue('--s');

		const primary = getComputedStyle(document.documentElement)
    .getPropertyValue('--in');

		const wac = getComputedStyle(document.documentElement)
    .getPropertyValue('--er');

		const accent = getComputedStyle(document.documentElement)
    .getPropertyValue('--a');


		// timeLine.set('#header', { top: '75%', background: `hsl${wac}`, delay: 0.5 });
		// timeLine.to('#header', { top: '50%', background: `hsl${primary}`, delay: 0.5 });
		// timeLine.to('#logo', { height: '60vmin', delay: 0.5});
		// timeLine.to('#header', { top: '50%', background: `hsl${accent}`, delay: 0.5 });
		// timeLine.to('#logo', { height: '80vmin', delay: 0.5 });
		// timeLine.fromTo('#header', { top: '60%' }, { top: '25%', background: `hsl(${value})`, delay: 0.5  });
	});

	// createEffect(() => {
	// 	const result = audioContext.getOutputTimestamp()?.contextTime
	// 	console.log('result.contextTime', Math.floor(Number(result)))
	// },)


	return (
		<div class='bg-indigo-500 w-full h-screen flex'>
			<Sidebar />

			<header class='bg-[#f5f5f5] flex-1 pl-4' id='header'>
				<div>
					<img src={logo} class={styles.logo} alt='logo' id='logo' />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<audio src={music} controls crossorigin='anonymous' data-playing='false' />
					<button class='btn w-24' onClick={handleAudioPlay}>
						{isPlay() ? '정지' : '플레이'}
					</button>
					<button class='btn bg-slate-200' onClick={handleAudioTime}>현재 시간은</button>
					<Video />
					<p class='gg'>
						한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용한글 테스트는 아주 쉽지요용
					</p>

					<button class='btn' onClick={handleRandomNumber}>랜덤 넘버{number()}</button>
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
