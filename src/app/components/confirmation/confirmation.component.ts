import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: false,
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent implements OnInit {
  constructor(private router : Router) { }

  ngOnInit() {
  }
  
goToLogin(): void {
  this.router.navigate(['/login']);
}

}
