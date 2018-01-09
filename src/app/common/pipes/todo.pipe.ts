import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoPipe',
  pure: false
})
export class TodoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if ( !args ) {
      return value;
    }
    if ( args === 'active' ) {
      return value.filter(i => i.props['completed'] !== true);
    }
    return value.filter(i => i.props[args]);
  }

}
