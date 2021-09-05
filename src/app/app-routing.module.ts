import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShipComponent } from './components/add-ship/add-ship.component';

//components
import { ListShipsComponent } from './components/list-ships/list-ships.component';

const routes: Routes = [
  { path: '', component: ListShipsComponent },
  { path: 'add-ship', component: AddShipComponent },
  { path: 'edit-ship/:id', component: AddShipComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
