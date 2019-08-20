import { async, TestBed } from '@angular/core/testing';
import { SharedModulesModule } from './shared-modules.module';

describe('SharedModulesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModulesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedModulesModule).toBeDefined();
  });
});
