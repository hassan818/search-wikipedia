// import React, { useState } from "react";

// const Accordion = ({ items }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const onTitleClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="ui styled accordion">
//       {items.map((item, index) => {
//         const active = index === activeIndex ? "active  " : "";
//         return (
//           <div key={item.id}>
//             <div
//               className={`title ${active}`}
//               onClick={() => onTitleClick(index)}
//             >
//               <i className="icon dropdown"></i>
//               {item.title}
//             </div>
//             <div className={`content ${active}`}>
//               <p>{item.content}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Accordion;
