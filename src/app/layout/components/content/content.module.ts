import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootSharedModule } from '@eps/shared.module';
import { ContentComponent } from './content.component';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    RouterModule,
    RootSharedModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
