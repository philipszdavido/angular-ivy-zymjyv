import { Component, VERSION, OnInit } from '@angular/core';
import { Observable, of, merge, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// of() Example
/*
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  ngOnInit() {
    const observable1 = of(1, 2, 3).subscribe(data => console.log(data));
  }
}
*/

// merge() Example
/*
export class AppComponent implements OnInit {
  ngOnInit() {
    const observable1 = Observable.create((observer: any) => {
      observer.next('I am Observable 1');
    });

    const observable2 = Observable.create((observer: any) => {
      observer.next('I am Observable 2');
    });

    const observable3 = merge(observable1, observable2);

    observable3.subscribe(data => console.log(data));
  }
}
*/

// map() Example
/*
export class AppComponent implements OnInit {
  ngOnInit() {
    const observable1 = of('my name is lotanna');
    observable1
      .pipe(map(data => data.toUpperCase()))
      .subscribe(data => console.log(data));
  }
}
*/

// fromEvent() Example
/*
export class AppComponent implements OnInit {
  ngOnInit() {
    const observable1 = fromEvent(document, 'click').subscribe(() =>
      console.log('You clicked the page!')
    );
  }
}
*/

// pluck() Example
/*
export class AppComponent implements OnInit {
  ngOnInit() {
    from([
      { brand: 'iPhone', model: 'Xmax', price: '$1000' },
      { brand: 'Samsung', model: 'S10', price: '$850' }
    ])
      .pipe(pluck('price'))
      .subscribe(data => console.log(data));
  }
}
*/

// take() Example
export class AppComponent implements OnInit {
  ngOnInit() {
    const observable1 = fromEvent(document, 'click')
      .pipe(take(2))
      .subscribe(() => console.log('You clicked the page!'));
  }
}
