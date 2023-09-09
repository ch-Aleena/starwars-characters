import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  
@Input() TotalPages=0
@Input() CurrentPage:number=1
@Input() perPage:number=10
@Output() pagechanged=new EventEmitter<number>()


onPrevClick():void{
  console.log(this.CurrentPage,this.TotalPages)
  if(this.CurrentPage>1){
    this.CurrentPage=parseInt(this.CurrentPage.toString())
    this.CurrentPage=this.CurrentPage-1
    this.pagechanged.emit(this.CurrentPage)
  }
   
}
onNextClick():void{
  
  this.CurrentPage=parseInt(this.CurrentPage.toString())
  this.CurrentPage=this.CurrentPage+1
  console.log(this.CurrentPage)
  if(this.CurrentPage<this.TotalPages){
    this.pagechanged.emit(this.CurrentPage)
  }
}

}
