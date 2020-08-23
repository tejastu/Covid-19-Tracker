import React from "react";
import './Infobox.css';
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases,isRed, active, total, ...props }) {
  return (

    <Card 

      onClick={props.onClick}
      className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`} >
      <CardContent>
          {/* title is coronavirus cases*/}
          <Typography className="infoBox_title" color="textSecondary">
            {title}
          </Typography>

         {/* 120k+ no of cases */}
         <h2 className={`infoBox_cases ${!isRed && "infoBox_cases--green"}`}>{cases}</h2>
         
          {/* 1.2M total */}
          <Typography className="infoBox_total" color="textSecondary">
              {total} Total
          </Typography>

       </CardContent>
    </Card>
  );
}

export default InfoBox;
