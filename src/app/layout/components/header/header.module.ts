import { NgModule } from '@angular/core';
import { RootSharedModule } from '@eps/shared.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    RootSharedModule    
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
