import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './screens/main/main.component';
import { SearchComponent } from './screens/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
