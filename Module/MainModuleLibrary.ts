import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms"

import { FemmeComponent }   from '../Component/FemmeComponent';


import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [FemmeComponent],
    bootstrap: [FemmeComponent]
})
export class MainModuleLibrary { }
