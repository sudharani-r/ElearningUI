import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Appproduct } from './product.component'
import { AppHome } from './home'
import { AppInventory } from './Inventory.component'
import { PageNotFoundComponent } from './NotFound.component' 
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
   { path: 'Product', component: Appproduct },
   { path: 'Inventory', component: AppInventory },
   { path: 'home', component: AppHome },
   { path: '**', component: PageNotFoundComponent },

];

@NgModule ({
   imports: [ BrowserModule, RouterModule.forRoot(appRoutes),NgbModule.forRoot(), ],
   declarations: [ AppComponent,Appproduct,AppInventory,PageNotFoundComponent,AppHome,],
   bootstrap: [ AppComponent ]
})
export class AppModule {
 }
