import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularform';

  contactMode = [
    {moc : 'Email', id:1},
    {moc : 'Phone', id:2}

  ]

  onsignUp(signUp : NgForm){
   if(signUp.valid){
    console.log(signUp);
    console.log(signUp.value);
    signUp.reset()
   }else{
    return
   }
  }
}
