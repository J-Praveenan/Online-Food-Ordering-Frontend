import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div>
      <Card sx={{width:345}}>
        <CardMedia sx={{height:345}} image="https://cdn.pixabay.com/photo/2022/01/27/07/34/manchurian-6971355_1280.jpg"/>
        <CardContent>
            <Typography variant="h5">
                Indian Fast Food
            </Typography>
            <Typography variant="body2">
                50% off on your first order
            </Typography>
            <div className="py-2 space-y-2">
                <p>{"Mumbai"}</p>
                <p className="text-sm text-blue-500">February 14, 2024 12.00 AM</p>
                <p className="text-sm text-red-500">February 15, 2024 12.00 AM</p>
            </div>
        </CardContent>
        {true && <CardActions>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </CardActions>}
      </Card>
    </div>
  );
};
