import React from "react";
import './App.css';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import {Button} from '@material-ui/core'



function App2(props){
    return(
      <div className='App2-section'>
    
        <p className="move-left">{props.iconn} {props.content}</p>
      </div>
    )
  }


function Left() {
  return (
    <div className='page1-left'>
      <div className="height">
        <h2 className="move-left white">FREE</h2>
      </div>
  

      <div className="page2-button">
        <Button color="primary" variant="contained">
          Sign Up - It's free
        </Button>
      </div>
      <hr />

      <div>
        <App2 iconn={<CheckIcon />} content="125 words in the Paraphraser" />
      </div>
      <hr />

      <div>
        <App2 iconn={<CheckIcon />} content="125 words in the Paraphraser" />
      </div>
      <hr />
      <div>
        <App2 iconn={<CheckIcon />} content="Standard and Fluency modes" />
      </div>
      <hr />
      <div>
        <App2 iconn={<CheckIcon />} content="3 synonym options" />
      </div>
      <hr />

      <div>
        <App2 iconn={<CheckIcon />} content="1 Freeze word or phrase" />
      </div>
      <hr />
      <div>
        <App2 iconn={<CloseIcon />} content="1200 words in the Summarizer" />
      </div>
      <hr />
      <div>
        <App2 iconn={<CloseIcon />} content="Faster processing speed" />
      </div>
      <hr />
      <div>
        <App2 iconn={<CloseIcon />} content="Advanced grammar rewrites" />
      </div>
      <hr />
      <div>
        <App2 iconn={<CloseIcon />} content="Compare Modes (Desktop only)" />
      </div>
      <hr />
      <div>
        <App2 iconn={<CloseIcon />} content="Plagiarism Checker*" />
      </div>
      <hr />
      <div>
        <App2 iconn={<CloseIcon />} content="Tone detection" />
      </div>
     
      <div className="height-left-below">
        <p>No Credit Card Required</p>
       </div>
      
    </div>
  );
}

export default Left;
