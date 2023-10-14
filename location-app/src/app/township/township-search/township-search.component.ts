import { Component, EventEmitter, OnInit, Output, Pipe } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DivisionService } from '../../util/services/division.service';
import { REGIONS } from '../../util/dto/regions';
import { RegionPipe } from '../../util/region.pipe';

@Component({
  selector: 'app-township-search',
  templateUrl: './township-search.component.html'
})
export class TownshipSearchComponent implements OnInit{
   regions = REGIONS
   region = RegionPipe
  divisions: any[] = []
  
  form: FormGroup

  @Output()
  onAdd = new EventEmitter<boolean>

  @Output()
  onSearch = new EventEmitter<any>

  @Output()
  OnUpload = new EventEmitter<any>


  constructor(fb: FormBuilder, private divService: DivisionService){
    this.form = fb.group({
      region: '',
      division: 0,
      keyword: ''
    })
  }
  ngOnInit(): void {
    this.divService.search({}).subscribe(resp => this.divisions = resp)

  }
  addNew(){
    this.onAdd.emit(true)
  }

  search(){
    this.onSearch.emit(this.form.value)
  }

}
