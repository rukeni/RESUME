import {
  Component,
  createEffect,
  createResource,
  createSignal,
  onMount,
} from "solid-js";

import logo from "./assets/logo.svg";
import music from "./assets/mercedes.mp3";
import styles from "./App.module.css";
import Sidebar from "./components/sidebar/Sidebar";
import Video from "./components/video/Video";
import { getRandomInt } from "./app/helper";
import gsap from "gsap";
import { GithubInfo } from "../types";
import Stat from "./components/Stat";

const App: Component = () => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];
  // 레거시를 위한 설정
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  // web audio api를 사용하기 위한 컨텍스트 인스턴스 선언
  // BaseAudioContext가 자동 생성된다.
  const audioContext = new AudioContext();
  let audioRef: HTMLAudioElement;
  let requestId: number;

  const [number, setNumber] = createSignal(0);
  const [audio, setAudio] = createSignal<AudioContext>();
  const [isPlay, setIsPlay] = createSignal(false);
  const [githubInfo, setGithubInfo] = createSignal<GithubInfo>();
  const fetchGithubInfo = async () =>
    (
      await fetch(`https://api.github.com/users/rukeni`, {
        headers: {
          Authorization: `token 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`,
        },
      })
    ).json();
  const [data, { mutate, refetch }] = createResource(fetchGithubInfo);

  const handleRandomNumber = () => {
    const targetNumber = getRandomInt(0, 29);
    setNumber(targetNumber);
    document.documentElement.dataset.theme = themes[number()];
  };

  const handleAudioPlay = () => {
    if (audio()?.state === "suspended") {
      audio()?.resume();
    }
    const getTime = () => {
      if (isPlay() === true) {
        let prevValue = -1;
        const result = audioContext.getOutputTimestamp().contextTime;
        // if(Math.floor(Number(result)) - prevValue === 1) {
        console.log("result.contextTime", Math.floor(Number(result)));
        prevValue++;
        document.documentElement.dataset.theme =
          themes[Math.floor(Number(result)) % 29];
        // }
        requestId = requestAnimationFrame(getTime);
      } else {
        console.log("캔슬");
        cancelAnimationFrame(requestId);
      }
    };
    // 상태에 따라 트랙을 재생하거나 정지합니다
    const audioElement = document.querySelector("audio");
    if (audioElement) {
      console.log("audioElement", audioElement);
      if (isPlay() === true) {
        console.log("isPlay()", isPlay());
        setIsPlay(false);
        audioElement.pause();
        return false;
      }
      if (isPlay() === false) {
        console.log("isPlay()", isPlay());
        setIsPlay(true);
        audioElement.play();
        getTime();
        return false;
      }
    }
  };

  const handleAudioTime = () => {
    const result = audioContext.getOutputTimestamp();
    console.log("result.contextTime", result.contextTime);
  };
  onMount(() => {
    const audioElement = document.querySelector("audio");
    // querySelector로 찾으면 null이 될 수 있기에 분기 처리
    if (audioElement) {
      const track = audioContext.createMediaElementSource(audioElement);
      track.connect(audioContext.destination);
      setAudio(audioContext);
    }

    let timeLine = gsap.timeline({ defaults: { duration: 0.1 } });
    const value = getComputedStyle(document.documentElement).getPropertyValue(
      "--s"
    );

    const primary = getComputedStyle(document.documentElement).getPropertyValue(
      "--in"
    );

    const wac = getComputedStyle(document.documentElement).getPropertyValue(
      "--er"
    );

    const accent = getComputedStyle(document.documentElement).getPropertyValue(
      "--a"
    );

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
    <div class="flex h-screen w-full transition-all duration-[3000ms]">
      <Sidebar />

      <header class="flex-1 max-w-[calc(100%-330px)] pl-4 m-auto" id="header">
        <div>

          {/* <Video /> */}


          {/* <Stat /> */}
          <div class="flex w-full h-full flex-col justify-center items-center">
            <div class="flex w-full h-full">
              <div class="card rounded-box w-[40vw] h-[30vh] place-items-center bg-primary">
							<audio
            src={music}
            crossorigin="anonymous"
            data-playing="false"
          />
					<div class='flex justify-center items-center'>
          <button class="btn w-24 mr-3 mt-3" onClick={handleAudioPlay}>
            {isPlay() ? "stop" : "a labor song!"}
          </button>
					<button class="btn mt-3" onClick={handleRandomNumber}>
            랜덤 넘버{number()}
          </button>
					</div>

              </div>
              <div class="divider divider-horizontal">OR</div>
              <div class="card rounded-box w-[40vw] h-[30vh] place-items-center bg-secondary">
                content
              </div>
            </div>
            <div class="divider lg:divider-horizontal">세로 나누기</div>
            <div class="flex w-full">
              <div class="card rounded-box w-[40vw] h-[30vh] place-items-center bg-base-100">
                content
              </div>
              <div class="divider divider-horizontal">OR</div>
              <div class="card rounded-box w-[40vw] h-[30vh] place-items-center bg-accent">
                content
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
