import joi from "joi";
import { characterSchema } from "./schema";

export const validate = async (payload) => {
  const searchBox = joi.object(characterSchema);

  try {
    const results = await searchBox.validateAsync(payload, {
      abortEarly: false,
    });

    console.log(results);
    return null;
  } catch (error) {
    console.log(error);
    if (error.details) {
      const errorsMod = error.details.map((error) => ({
        key: error.context.key,
        message: error.message,
      }));
      return errorsMod;
    }
    return [error.message];
  }
};
