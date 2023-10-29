import joi from "joi";
export const searchSchema = {
  search: joi.string().trim().allow("").min(2).label("Search"),
};
