import { Component, OnInit } from '@angular/core';
import { DialogData, DialogService } from './shared/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit {
  dialogVisible = false;
  dialogTitle = '';
  dialogMessage = '';
  title = 'cmw-registration';
  constructor(private dialogService: DialogService ) {}

  ngOnInit(): void {
    this.dialogService.dialogState$.subscribe((data: DialogData) => {
      this.dialogTitle = data.title;
      this.dialogMessage = data.message;
      this.dialogVisible = true;
    });
  }
}
