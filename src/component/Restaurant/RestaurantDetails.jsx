import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Menu,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { MenuCard } from "./MenuCard";

const FoodCategories = ["All","Pizza", "Burger", "Sandwich", "Chicken"];

const foodTypes = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Vegetarian only",
    value: "vegetarian",
  },
  {
    label: "Non-Vegetarian",
    value: "non_vegetarian",
  },
  {
    label: "Seasonal",
    value: "seasonal",
  },
];

const menu = [1,1,1,1,1]

export const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };

  return (
    <div className="px-5 lg:px-20">
      <section>
        <h1 className="text-gray-500 py-2 mt-10">
          Home/India/Indian Fast Food/3
        </h1>
        <div>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, lg: 12 }}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"
                alt=""
              />
            </Grid>
            <Grid item size={{ xs: 12, lg: 6 }}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg"
                alt=""
              />
            </Grid>
            <Grid item size={{ xs: 12, lg: 6 }}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
          <p className="text-gray-500 mt-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>India, Chennai,6000028</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>Mon-Sun: 9.00 AM - 9.00 PM (Today)</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider/>
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {FoodCategories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.map((item)=>
            <MenuCard/>
          )}
        </div>
      </section>
    </div>
  );
};
