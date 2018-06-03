import {Validator} from './validator';

export class NumericRangeValidator implements Validator 
{
    constructor(
        public min: number,
        public max: number,
      ) {  };

    isValid(value: number) {
         return value >= this.min && value <= this.max; 
    }
}
