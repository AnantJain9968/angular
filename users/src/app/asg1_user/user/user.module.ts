import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercompComponent } from '../usercomp/usercomp.component';
import { HighlightDirective } from '../assg2_Hghlight/highlight.directive';



@NgModule({
  declarations: [UsercompComponent,HighlightDirective],
  imports: [
    CommonModule
  ],
  exports:[UsercompComponent]
})
export class UserModule { }
