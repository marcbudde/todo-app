import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-environment-indicator',
  templateUrl: './environment-indicator.component.html',
  styleUrls: ['./environment-indicator.component.css']
})
export class EnvironmentIndicatorComponent {
  icon = environment.environmentIconClass;
}
