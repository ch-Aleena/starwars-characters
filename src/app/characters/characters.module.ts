import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterlistComponent } from './characterlist/comp/characterlist/characterlist.component';
import { CharacterdetailsComponent } from './characterdetails/comp/characterdetails/characterdetails.component';
import { CharacterplannetComponent } from './characterplannet/comp/characterplannet/characterplannet.component';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from '../shared/ui/pagination/pagination/pagination.component';

const routes:Routes=[
  {path:'',component:CharacterlistComponent},
  {path:'character',component:CharacterlistComponent},
  {path:'character/details/:id',component:CharacterdetailsComponent},
  {path:'character/plannet/:id',component:CharacterplannetComponent}
]

@NgModule({
  declarations: [
    CharacterlistComponent,
    CharacterdetailsComponent,
    CharacterplannetComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class CharactersModule { }
