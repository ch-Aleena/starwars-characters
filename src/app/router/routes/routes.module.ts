import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharacterdetailsComponent } from 'src/app/characters/characterdetails/comp/characterdetails/characterdetails.component';
import { CharacterlistComponent } from 'src/app/characters/characterlist/comp/characterlist/characterlist.component';
import { CharacterplannetComponent } from 'src/app/characters/characterplannet/comp/characterplannet/characterplannet.component';

const routes:Routes=[

  {
    path:'',component:CharacterlistComponent
  },
  {
    path:'character',component:CharacterlistComponent
  },
  {
    path:'character/details/:id',component:CharacterdetailsComponent
  },
  {
    path:'character/plannet/:id',component:CharacterplannetComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})

export class RoutesModule { }
