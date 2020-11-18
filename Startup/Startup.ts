import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModuleLibrary } from '../Module/MainModuleLibrary';
const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModuleLibrary);