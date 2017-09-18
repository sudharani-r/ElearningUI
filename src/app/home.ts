import {Component} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

//platformBrowserDynamic().bootstrapModule(AppModule);


@Component({
  selector: 'my-app',
  templateUrl: 'app/home.html'
})
export class AppHome {

}
