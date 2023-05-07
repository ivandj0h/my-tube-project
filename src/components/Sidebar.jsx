import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constatnt";

const selectedCategory = "New";

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: {
        xs: "auto",
        md: "95%",
      },
      flexDirection: {
        md: "column",
      },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === selectedCategory && "#fc1503",
          color: "#fff",
        }}
      >
        <span>{category.icon}</span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
