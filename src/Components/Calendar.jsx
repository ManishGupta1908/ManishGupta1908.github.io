// import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import ReactTooltip from "react-tooltip";

// function Calendar() {
//     const select=(contributions)=>{
//         const currYear=new Date().getFullYear();
//         const currMonth=new Date().getMonth();
//         const shownMonth=8;

//         return contributions.filter((day)=>{
//             const date=new Date(day.Date);
//             const monthofDay=date.getMonth();

//             return(
//                 date.getFullyear()==currYear &&
//                 monthofDay > currMonth - shownMonth &&
//                 monthofDay <=currMonth
//             )
//         });

//     };
  
//   return (
    
         
//             <GitHubCalendar
//             style={{margin:"auto"}}
//                 username="ManishGupta1908"
//                 transformData={select}
//                 blockSize={15}
//                 blockMargin={5}
//                 fontSize={15}
//             >
//             <ReactTooltip delayshow={20} html/>
//             </GitHubCalendar>
            
//   );
// }

// export default Calendar;

import React from "react";
const Calender = () => {
  return (
    <div
      className="box"
      style={{
        border: "1px solid  #f0f0f0",
        width: "100%",
        margin: "auto",
        marginBottom: "1px",
        paddingTop: "25px",
        backgroundColor: "#C8CAD9",
        transition: " all 0.3s ease",
      }}
    >
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          My Github Calender
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <img
        style={{width:"85%"}}
          src="https://ghchart.rshah.org/ManishGupta1908"
          alt="gitCalender"
        />
      </div>
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        
      </div>
    </div>
  );
};

export default Calender;