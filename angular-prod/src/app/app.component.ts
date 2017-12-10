import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  notes$: Observable<any>;
  subscriptions: Subscription[] = [];

  constructor(private appService: AppService) {}
  ngOnInit() {
    this.notes$ = this.appService.getList();
  }

  ngOnDestroy() {
    this.subscriptions
      .forEach(subscription => subscription.unsubscribe());
  }

  onItemAdd(input: HTMLInputElement) {
    if (!input.value) {
      return;
    }
    const subscription = this.appService.addNewItem(input.value)
      .subscribe(() => {
        input.value = '';
        this.notes$ = this.appService.getList();
        subscription.unsubscribe();
      });
  }
}
