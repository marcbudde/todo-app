import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EnvironmentIndicatorComponent } from './environment-indicator/environment-indicator.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { CheckListComponent } from './check-list/check-list.component';
import { ToggleComponent } from './toggle/toggle.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [FormsModule],
    declarations: [AppComponent, EnvironmentIndicatorComponent, CreateTaskComponent, CheckListComponent, ToggleComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'awesome-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('awesome-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2.app_title')?.textContent).toContain('awesome-app');
  });
});
