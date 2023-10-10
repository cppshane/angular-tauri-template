import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, TranslateModule],
  exports: [TranslateModule]
})
export class SharedModule {}
