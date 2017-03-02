import { PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './product';

@Pipe({
    name: 'producFilter'
})

export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], filterBy: string): IProduct[] {
        return filterBy ? value.filter((product: IProduct) => 
                product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1) : value;
    }
}