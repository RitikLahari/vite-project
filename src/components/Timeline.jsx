import React from 'react'
import data from "../assets/data.json";

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelinebox">
     {
    data.projects.map((item, index)=>(
        <TimelineItem
         heading={item.title}
         text={item.date}
         index={index}
         key={item.title} 
         />

    ))
     }
      </div>
    </div>
  )
};
const TimelineItem=({heading,text,index})=>(
    <div 
    className={`TimelineItem ${ index % 2 === 0 ? "leftTimeline": "rightTimeline"
    }`}
    >
     <h2>{heading}</h2>
     <p>{text}</p>
    </div>
    
);

export default Timeline
