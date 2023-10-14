import { Component, OnInit } from '@angular/core';
import { TownshipService } from '../util/services/township.service';
declare const bootstrap: any
@Component({
  selector: 'app-township',
  templateUrl: './township.component.html'
})
export class TownshipComponent implements OnInit{
  
  townships: any[] = []
  townshipModal: any
  targetTownship: any;

  constructor(private tspService: TownshipService ){}
  
  ngOnInit(): void {
    this.townshipModal = new bootstrap.Modal(`#townshipModalId`)
    this.search(undefined) 
  }

  search(form: any){
    this.tspService.search(form).subscribe(resp => this.townships = resp)
  }
  openTownshipForm(event: any){
    this.targetTownship = undefined
    if(event){
      this.townshipModal.show()
    }
   
  }
  saveTownship(township: any){
    this.tspService.save(township).subscribe(resp => {
      if(resp){
        this.townshipModal.hide()
        this.search(undefined)
      }
    })
  }
   editTownship(data: any){
    this.targetTownship = data
    this.townshipModal.show()
   }

}
