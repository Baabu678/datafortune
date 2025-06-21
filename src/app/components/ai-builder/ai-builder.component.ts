import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ScreenService, ScreenDefinition } from '../../services/screen.service';

@Component({
  selector: 'app-ai-builder',
  templateUrl: './ai-builder.component.html',
  styleUrls: ['./ai-builder.component.scss']
})
export class AiBuilderComponent implements OnInit {
  form!: FormGroup;
  screens: ScreenDefinition[] = [];

  constructor(private fb: FormBuilder, private screenService: ScreenService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      fields: ['']
    });
    this.loadScreens();
  }

  loadScreens(): void {
    this.screenService.getScreens().subscribe(s => (this.screens = s));
  }

  submit(): void {
    const fields = (this.form.value.fields as string).split(',').map(f => f.trim());
    const definition = JSON.stringify({ fields });
    const screen: ScreenDefinition = { name: this.form.value.name, definitionJson: definition };
    this.screenService.createScreen(screen).subscribe(() => {
      this.form.reset();
      this.loadScreens();
    });
  }
}
