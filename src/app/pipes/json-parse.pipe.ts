import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'jsonParse' })
export class JsonParsePipe implements PipeTransform {
  transform(value: string | null): any {
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }
}
