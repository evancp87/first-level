import joi from "joi";
export const characterSchema = {
  character: joi.string().min(2).required(),
};
