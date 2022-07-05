import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './Pages.component';
import { LayoutModule } from '../Layout/Layout.module';
import { SobreNosotrosComponent } from './SobreNosotros/SobreNosotros.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  declarations: [PagesComponent,SobreNosotrosComponent],
  exports: [PagesComponent,SobreNosotrosComponent]
})
export class PagesModule { }
