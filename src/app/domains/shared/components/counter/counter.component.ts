import { CommonModule } from '@angular/common';
import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { interval, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required:true }) duration: number = 0;
  @Input({ required:true }) message: string = '';
  interval$: Subscription | null = null 
  counter = signal(0);

  constructor() {
    console.log('constructor');
    this.endFunction()
  }

  ngOnChanges(change: SimpleChanges) {

  }

  ngOnInit() {
    // this.interval$ = interval(1000).subscribe(() => {
    //   console.log("running...")
    // })
  }
  
  ngOnAfterViewInit() {
    
  }

  ngOnDestroy() {
    
  }

  endFunction(){
    console.log('-'.repeat(10))
  }
}
