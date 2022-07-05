import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './Layout.component';
import { BodyComponent } from './Body/Body.component';
import { FooterComponent } from './Footer/Footer.component';
import { HeaderComponent } from './Header/Header.component';
import { NavComponent } from './Nav/Nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent,BodyComponent,FooterComponent,HeaderComponent,NavComponent],
  exports:[LayoutComponent,BodyComponent,FooterComponent,HeaderComponent,NavComponent]
})
export class LayoutModule { }
