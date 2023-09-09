import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterlistComponent } from './characterlist/comp/characterlist/characterlist.component';
import { CharacterdetailsComponent } from './characterdetails/comp/characterdetails/characterdetails.component';
import { CharacterplannetComponent } from './characterplannet/comp/characterplannet/characterplannet.component';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from '../shared/ui/pagination/pagination/pagination.component';
import { RoutesModule } from '../router/routes/routes.module';



@NgModule({
  declarations: [
    CharacterlistComponent,
    CharacterdetailsComponent,
    CharacterplannetComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RoutesModule
  ],
})
export class CharactersModule { }
