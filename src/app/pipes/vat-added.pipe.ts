import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate:number): number {
    return value + (value*rate/100);
  }

}

/*
  Pipe, ekranda gelen veriyi görsel olarak değiştirmemize yardımcı bir araçtır.
  Örnek kullanımı: |currency |uppercase
  Custom pipe: |vatAdded, ek olarak parametre eklemek istenirse |vatAdded:10:20 şeklinde.

*/
