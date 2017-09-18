import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>
   <h2>fsf</h2>
   <ul>
   <li><a [routerLink] = "['/Product']">Product</a></li>
   <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
   </ul>
   <router-outlet></router-outlet>
   `,
})
export   class   Appproduct  {
}