import {Routes} from '@angular/router';
import {BurgersComponent} from './burgers/burgers.component';
import {BurgerComponent} from './burger/burger.component';
import {AddLegumeComponent} from './add-legume/add-legume.component';
import {AddBurgerComponent} from './add-burger/add-burger.component';


export const ROUTES: Routes =
  [
    {path: '', redirectTo: 'burgers', pathMatch: 'full'},
    {path: 'burgers', component:BurgersComponent},
    {path: 'burger', component:BurgerComponent},
    {path: 'add-legume', component: AddLegumeComponent},
    {path: 'add-burger', component: AddBurgerComponent}
    
  ];
