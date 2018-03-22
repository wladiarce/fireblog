import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentUploadComponent } from './content-upload.component';

describe('ContentUploadComponent', () => {
  let component: ContentUploadComponent;
  let fixture: ComponentFixture<ContentUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
