import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: "catFilter"})
export class CatFilterPipe implements PipeTransform {
  transform(dishes: Array<any>, condition: {[cat: string]: any}): Array<any>{
    return dishes.filter(dish=>{
      for(let cat in condition){
        if(dish[cat] == condition[cat] || condition[cat] == ''){
          return true;
        } else if(dish[cat] !== condition[cat]){
          return false;

        }
      }
      return true;
    })
  }
}
