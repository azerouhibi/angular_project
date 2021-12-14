import { Pipe, PipeTransform } from '@angular/core';
import { Facture } from './model/facture.model';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(factures :Facture[], searchValue:string): Facture[] {
    if(!factures || !searchValue)
{
  return factures;
}
return factures.filter(facture=> 

  facture.idFacture.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  
  );
  }

}
