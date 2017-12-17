import {HomeComponent} from "../home/home.component";
import {MenuComponent} from "../menu/menu.component";
import {Routes} from "@angular/router";
import {ContactComponent} from "../contact/contact.component";
import {DishdetailComponent} from "../dishdetail/dishdetail.component";
import {AboutComponent} from "../about/about.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'menu', component: MenuComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'contactus', component: ContactComponent},
  {path: 'dishdetail/:id', component: DishdetailComponent},
];
