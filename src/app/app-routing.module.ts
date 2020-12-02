import { MoreDetailsComponent } from './more-details/more-details.component';
import { HelpButtonComponent } from './help-button/help-button.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'needHelp', component: HelpButtonComponent},
  { path: 'moredetails/:id', component: MoreDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent,
HelpButtonComponent,
MoreDetailsComponent,
]