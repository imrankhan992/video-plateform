import React, { useState } from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { categories } from "../../../Data/categories";



export default function SelectCategory({ theme , isCategoryClicked, setIsCategoryClicked, selectedCategory, setSelectedCategory }) {
 

  return (
    <div className="video-visibility">
      <p>Video Category</p>
      <div
        className={
          theme
            ? "selected-visibility"
            : "selected-visibility-light text-light-mode"
        }
        onClick={() => setIsCategoryClicked((prev) => !prev)}
      >
        <p>{selectedCategory}</p>
        <ArrowDropDownRoundedIcon
          fontSize="large"
          style={{ color: theme ? "white" : "black" }}
        />
      </div>

      {isCategoryClicked && (
        <div
          className={
            theme ? "show-visibility" : "show-visibility studio-light"
          }
        >
          {categories.map((category) => (
          <>
           {
            category === "All" ? (
                <></>
            ):(
                 <React.Fragment key={category}>
              <p
                className={"public"}
                style={
                  selectedCategory === category
                    ? { backgroundColor: "rgba(255, 255, 255, 0.134)" }
                    : { backgroundColor: "rgba(255, 255, 255, 0)" }
                }
                onClick={() => {
                  setSelectedCategory(category);
                  setIsCategoryClicked(false);
                }}
              >
                {category}
              </p>
              <hr className="seperatee" />
            </React.Fragment>
            )
           }
           
          </>
          ))}
        </div>
      )}
    </div>
  );
}
