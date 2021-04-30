import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExpertPageComponent } from './pages/expert/create-expert-page/create-expert-page.component';
import { ExpertDetailsPageComponent } from './pages/expert/expert-details-page/expert-details-page.component';
import { ExpertPageComponent } from './pages/expert/expert-page/expert-page.component';
import { CreateTagPageComponent } from './pages/tag/create-tag-page/create-tag-page.component';
import { TagPageComponent } from './pages/tag/tag-page/tag-page.component';

const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  redirectTo:'/experts'
},
{
  path: 'tags',
  component: TagPageComponent,
},
{
  path: 'experts',
  component: ExpertPageComponent,
},
{
  path: 'experts/:id',
  component: ExpertDetailsPageComponent,
},
{
  path: 'createTag',
  component: CreateTagPageComponent,
},
{
  path: 'createExpert',
  component: CreateExpertPageComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
