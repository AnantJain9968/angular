import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsDemoComponent } from '../components-demo/components-demo.component';
import { UsercardComponent } from '../usercard/usercard.component';



@NgModule({
  declarations: [ComponentsDemoComponent,UsercardComponent],
  imports: [
   CommonModule
  ],
  exports:[ComponentsDemoComponent]

})
export class ComponentsModule { }
