// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Slider } from "@material-ui/core";

// import CloseIcon from '@material-ui/icons/Close';
// import CheckIcon from '@material-ui/icons/Check';
import Left from "./Left";
import Right from "./Right";
import Aleft from "./Aleft";

function App() {
  let [val, setVal] = useState(0);
  let [val1, setVal1] = useState(0);
  let [val2, setVal2] = useState(0);
  let [val3, setVal3] = useState(0);
  let [val4, setVal4] = useState(0);
  // const [val , setVal] = useState([40,50]);

  const updateVal = () => {
    setTimeout(() => {
      console.log("Hello, World!" + val4);

      setVal4(val4 + 1);

      if (val4 <= 100) {
        setVal(val4);
      } else if (val4 <= 200 && val4 >= 100) {
        setVal(0);
        setVal1(val4 - 100);
      } else if (val4 <= 300 && val4 >= 200) {
        setVal1(0);
        setVal2(val4 - 200);
      } else if (val4 <= 400 && val4 >= 300) {
        setVal2(0);
        setVal3(val4 - 300);
      } else {
        setVal3(0);
        setVal4(0);
      }

      // setVal(val+1)
      // setVal1(val1+1)
      // setVal2(val2 + 1)
      // setVal3(val+1)
    }, 50);
  };

  function calcu() {
    if (val > 0) {
      return "abc";
    }
    if (val1 > 0) {
      return "abc1";
    }
    if (val2 > 0) {
      return "abc2";
    }
    if (val3 > 0) {
      return "abc3";
    }
  }
  return (
    <div className="App">
      <div className="hello">
        {/* <h1>Save time and write with confidence</h1> */}
        <p className="textSize later-spc">
          Save time and write with confidence
        </p>

        <Button variant="contained" color="primary">
          Upgrade to QuillBot Premium
        </Button>

        <div className="top">
          <Aleft data={calcu()} />

          <div className="right">
            {/* *********   Slider  ****************/}
            <div className="slider-padd">
              <h3 className="move-left text-green later-spc">
                Increase your productivity
              </h3>
              <p className="move-left later-spc">
                Paraphrase more text at once to finish writing faster.
              </p>
              <Slider
                color="secondary"
                // defaultValue={90}
                valueLabelDisplay="auto"
                max={100}
                value={val}
                // step={10}
                // orientation="horizontal"
                onClick={updateVal()}
                className="slider"
              />
            </div>

            <div className="slider-padd">
              <h3 className="move-left text-green later-spc">
                Access all modes
              </h3>
              <p className="move-left later-spc">
                Get maximum control over how you paraphrase.
              </p>
              <Slider
                color="secondary"
                // defaultValue={90}
                valueLabelDisplay="auto"
                max={100}
                value={val1}
                // step={10}
                // orientation="horizontal"
                onClick={updateVal()}
              />
            </div>

            <div className="slider-padd">
              <h3 className="move-left text-green later-spc">
                Scan for plagiarism
              </h3>
              <p className="move-left later-spc">
                Unlock the Plagiarism Checker to guarantee all sources are cited
                and nothing is unintentionally plagiarized.
              </p>
              <Slider
                color="secondary"
                // defaultValue={90}
                valueLabelDisplay="auto"
                max={100}
                value={val2}
                // step={10}
                // orientation="horizontal"
                onClick={updateVal()}
              />
            </div>

            <div className="slider-padd">
              <h3 className="move-left text-green later-spc">
                Compare all mode outputs at once
              </h3>
              <p className="move-left later-spc">
                Paraphrase in and compare outputs from all seven modes.
              </p>
              <Slider
                color="secondary"
                // defaultValue={90}
                valueLabelDisplay="auto"
                max={100}
                value={val3}
                // step={10}
                // orientation="horizontal"
                onClick={updateVal()}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="page1-div">
        {/* <h3>Experience the full power of QuillBot</h3> */}
        <p className="textSize">Experience the full power of QuillBot</p>
        <div className="page1">
          <Left />
          <Right />
        </div>
      </div>
      <p className="center-content">*Scan up to 20 pages a month</p>

      <div className="page2">
        <p className="textSize later-spc">
          Write better, faster, and clearer instantly
        </p>
        <p>
          QuillBot is trusted by students, professional writers, and <br />{" "}
          business people who want to write more effectively.
        </p>
        <div className="page2-devsion">
          <div className="page2-content">
            <div className="circle">
              <div className="c2">
              <p > <span className="circle-content">75% </span> <br/>time saved </p>
               
              </div>
            </div>
            <p>Average time savings per writing project.</p>
          </div>

          <div className="page2-content">
            <div className="circle">
              <div className="c2">
              <p > <span className="circle-content"> 50+ </span> <br/>million </p>
                
              </div>
            </div>
            <p>Trusted by millions worldwide.</p>
          </div>

          <div className="page2-content">
            <div className="circle">
              <div className="c2">
                <p > <span className="circle-content">85% </span> <br/> of students</p>
                
              </div>
            </div>
            <p>Who reported their grades improved after using QuillBot.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
