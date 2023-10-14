import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'region'
})

export class RegionPipe implements PipeTransform{
     transform(value: any[], region?: string): any {
         return value.filter(data => data.region == region);
     }
}