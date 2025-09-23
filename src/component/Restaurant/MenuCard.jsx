import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ingredients = [
  {
    category: "Nuts & Seeds",
    ingredient: ["Cashew"],
  },
  {
    category: "Protein",
    ingredient: ["Ground beef", "Bacon strips"],
  },
];

export const MenuCard = () => {

  const handleCheckBoxChange=(value)=>{
    console.log(value);
  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg"
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Burger</p>
              <p>₹ 499</p>
              <p className="text-gray-400">
                A burger is a sandwich consisting of a grilled patty of ground
                meat, traditionally beef, served in a sliced bun, often with a
                variety of toppings like lettuce, tomato, onions, and cheese.
              </p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {ingredients.map((item) => (
              <div>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingredient.map((item) => (
                    <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item} />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>
          <div className="pt-5">
            <Button variant="contained" type="submit" disabled={false}>{true?"Add to Cart": "Out of Stock"}</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};
