import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod1Component } from './mod1.component';
import { Mod1Directive } from './mod1.directive';
import { ClickDirective } from './click.directive';
import { BoldDirective } from './bold.directive';
import { Direct1Directive } from './direct1.directive';



@NgModule({
  declarations: [Mod1Component, Mod1Directive, ClickDirective, BoldDirective, Direct1Directive],
  imports: [
    CommonModule
  ],
  exports: [Mod1Component, Mod1Directive, ClickDirective, BoldDirective, Direct1Directive]
})
export class Mod1Module { }
