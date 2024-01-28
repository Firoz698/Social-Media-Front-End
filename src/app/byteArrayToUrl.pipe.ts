import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byteArrayToUrl'
})
export class ByteArrayToUrlPipe implements PipeTransform {
  transform(byteArray: Uint8Array): string {
    const base64String = btoa(String.fromCharCode(...byteArray));
    return `data:image/png;base64,${base64String}`;
  }
}
