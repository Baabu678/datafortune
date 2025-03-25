import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface DialogData {
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogSubject = new Subject<DialogData>();
  dialogState$ = this.dialogSubject.asObservable();

  showDialog(title: string, message: string) {
    this.dialogSubject.next({ title, message });
  }
}
