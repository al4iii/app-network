import { useState, useRef } from "react";
import song from "./ACDC Recovered - Highway to Hell.mp3";
import ControlPanel from "./components/controls/ControlPanel";
import Slider from "./components/slider/Slider";
import { Row, Col } from 'antd';

import styles from "./Music.module.css";

const Music = () => {
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef();
  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };
  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.1;
    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }
    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };
  const getCurrDuration = (e) => {
    const percent = (
    (e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2);
    const time = e.currentTarget.currentTime;
    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };
  return (
    <Row>
      <Col span={16}>
      <h1 className={styles.h1}>Audio Player</h1>
      <Slider percentage={percentage} onChange={onChange} />
      <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        src={song}
      ></audio>
      <ControlPanel
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
      />
      </Col>
      
    </Row>
  );
};

export default Music;
