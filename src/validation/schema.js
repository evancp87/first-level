import joi from "joi";
export const searchSchema = {
  search: joi.string().trim().min(3).required().label("Search"),
};
