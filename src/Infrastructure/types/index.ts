type GeneralValue = string | number | Date | Function | GeneralObject;

export interface GeneralObject {
  [key: string]: GeneralValue;
}