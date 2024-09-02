import Chart from "react-google-charts";
import "./GraphVacation.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../ReduxState/store";
import { useEffect, useState } from "react";
import axios from "axios";

function GraphVacation(): JSX.Element {
  const [info, setInfo] = useState<any[]>();
  useEffect(()=>{
    axios.get("http://localhost:3500/api/vacations/vacationReportB").then(response=> response.data).then(data=> {
      const theData = [["Vacation", "Followers"]];
        for(let index = 0; index < data.theReport.length; index++){
          theData.push([data.theReport[index].vacationDestination, data.theReport[index].followers.length])
        }
        setInfo(theData);
      });
    
  },[])
  
  
    const options = {
        chart: {
          title: "Vacations Report"
        },
      };
    // console.log(theReport);
    return (
        <div className="GraphVacation" style={{width:"90%"}}>
            <Chart
            chartType="Bar"
            options={options}
            data={info}
            width="100%"
            height="400px"
            legendToggle
        />
        </div>
    );
}

export default GraphVacation;
