import type { PasswordOptions } from "../types/index";

export const defaultOptions: PasswordOptions = {
  length: 12,
  includeSymbols: true,
  includeUppercase: true,
  //   minNumbers: 1,
  //   minSymbols: 0,
  //   minUppercase: 1,
  avoidAmbiguousChars: true,
};
