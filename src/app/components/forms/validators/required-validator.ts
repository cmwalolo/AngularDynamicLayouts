import {Validator} from './validator';

export class RequiredValidator implements Validator 
{
    isValid(value: string) {
        if (typeof value === "string") 
        {
         return  !(value == null || value == ""); 
        } else 
        {
            return value == null;
        }
    }
}
