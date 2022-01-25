import React, {useReducer, useState} from 'react';
import SlidingPane from 'react-sliding-pane';
import "react-sliding-pane/dist/react-sliding-pane.css";
const SlidingPanel = ({onActive, onCLose, ...props}) =>{
    const [isOpen, dispatchOpen] = useReducer((prev)=>!prev, false);
    setIsOpen(props.isPaneOpen);
    
    return(
        <div>
        <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        title="Hey, it is optional pane title.  I can be React component too."
        subtitle="Optional subtitle."
        from="right"
        width = "30px"
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
        }}
      >
        <div>And I am pane content. BTW, what rocks?</div>
        <br />
        <button onClick={onClose}>X</button>
      </SlidingPane>            
        </div>
    )
}
export default SlidingPanel;
