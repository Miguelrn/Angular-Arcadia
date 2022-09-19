import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: 'page_one', component: PageOneComponent},
  { path: 'page_two', component: PageTwoComponent},
  { path: 'page_three', component: PageThreeComponent},
  { path: '', component: WelcomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
