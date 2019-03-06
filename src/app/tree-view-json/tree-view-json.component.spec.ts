import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewJsonComponent } from './tree-view-json.component';

describe('TreeViewJsonComponent', () => {
  let component: TreeViewJsonComponent;
  let fixture: ComponentFixture<TreeViewJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeViewJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeViewJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
