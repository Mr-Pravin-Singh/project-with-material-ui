import React from "react";
import './App.css';
import CheckIcon from '@material-ui/icons/Check';
import {Button} from '@material-ui/core'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';


function App2(props){
    return(
      <div className='App2-section'>
        <p className="move-left">{props.iconn} {props.content} </p>   
        {/* {props.iconn2}  */}
      </div>
    )
  }

function Right() {
  return (
    <div className='page1-right'>
          <div className="height-right">
            <h2 className="move-left white">PREMIUM</h2>
          </div>
          
          <div className="page2-button">
            <Button color='primary' variant='contained'>Upgrade to Premium</Button>
          </div>
          <hr/>
          <div>
            <App2 iconn={<CheckIcon/>} content="Unlimited words in the Paraphraser" iconn2={<ErrorOutlineIcon/>} />
          </div>
          <hr/>

          <div>
            <App2 iconn={<CheckIcon/>}  content="Standard, Fluency, Expand, and Creative modes"/>
            {/* <App2 iconn={<CheckIcon/>}  content="Standard, Fluency, Expand, Shorten, Formal, Simple, and Creative modes"/> */}
          </div>
          <hr/>
          <div>
            <App2 iconn={<CheckIcon/>}  content="Standard and Fluency modes"/>
          </div>
          <hr/>
          <div>
            <App2 iconn={<CheckIcon/>}  content=" 3 synonym options"/>
          </div>
          <hr/>
          <div>
            <App2 iconn={<CheckIcon/>}  content="1 Freeze word or phrase"/>
          </div>
          <hr/>
          <div>
            <App2 iconn={<CheckIcon/>}   content="1200 words in the Summarizer"/>
          </div>
          <hr/>
          <div>
            <App2 iconn={<CheckIcon/>}   content="Faster processing speed"/>
          </div>
          <hr/>
          <div>
            <App2 iconn={<CheckIcon/>}   content="Advanced grammar rewrites"/>
          </div>
          <hr/>
          <div>
            <App2 iconn={<CheckIcon/>}   content="Compare Modes (Desktop only)"/>
          </div>
          <hr/>
          <div>
            <App2 iconn={<CheckIcon/>}  content="Plagiarism Checker*"/>
          </div>
          <hr/>
          <div>
            <App2 iconn={<CheckIcon/>}  content="Tone detection"/>
          </div>
         
          <div className="height-right-below">
            <p>3-Day Money-Back Guarantee</p>
          </div>

    </div>
  )
}

export default Right
