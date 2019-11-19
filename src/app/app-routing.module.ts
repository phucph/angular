import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { SliderComponent } from './slider/slider.component';
import { ItemComponent} from './item/item.component';


const appRoutes: Routes = [
  { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  { path: 'Home', component: SliderComponent },
  { path: 'Products', component: ProductComponent },
  { path: 'Services', component: ServiceComponent },
  { path: 'Team', component: TeamComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Item/:id', component: ItemComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
