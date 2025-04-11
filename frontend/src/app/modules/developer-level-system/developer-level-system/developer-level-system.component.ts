import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";

@Component({
  selector: 'app-developer-level-system',
  templateUrl: './developer-level-system.component.html',
  styleUrl: './developer-level-system.component.css'
})
export class DeveloperLevelSystemComponent implements OnInit{
  ngOnInit(): void {
      console.log('**DeveloperLevelSystemComponent**');
  }
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Prova',
        placeholder: '-prova-',
        required: true,
      }
    },
  ];
}
