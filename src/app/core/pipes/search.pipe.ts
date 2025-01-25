import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from '../interfaces/iproducts';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(arrayOfObject : IProducts[] , word : string ): IProducts[] {
    return arrayOfObject.filter( (item) =>  item.title.toLowerCase().includes(word.toLowerCase()))
  }

}
