type GeneralValue = string | number | Date | Function | GeneralObject;

export interface GeneralObject {
  [key: string]: GeneralValue;
}

export interface IModelInclude {
  as: string;
  model: any;
  attributes: string[];
  where?: GeneralObject;
  include?: IModelInclude[];
}
