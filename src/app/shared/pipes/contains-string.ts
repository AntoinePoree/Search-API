import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'containsString'
})
export class ContainsStringPipe implements PipeTransform {
  /**
   *
   * @param collection array of elements
   * @param keys searched target
   * @param values value to search
   */
  transform(collection: any[], keys: Array<string>, values: Array<string> = ['']): any[] {
    return collection.filter((item: any) => {
      const searchResult: Array<boolean> = [];
      let finalResult = false;

      keys.map((key, index) => {
        if (item.hasOwnProperty(key)) {
          const search = item[key].toLowerCase();
          const term = values[index].toLowerCase();
          searchResult.push(values[index] === '' || search.includes(term));
        }
      });

      searchResult.map(bool => {
        if (bool && !finalResult) {
          finalResult = true;
        }
      });

      return finalResult;
    });
  }
}
