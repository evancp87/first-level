import joi from "joi";
export const searchSchema = {
  search: joi.string().trim().min(2).required().label("Search"),
};
