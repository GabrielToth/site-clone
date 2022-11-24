import { TestBed } from '@angular/core/testing';

import { TopPageContentTitleService } from './top-page-content-title.service';

describe('TopPageContentTitleService', () => {
  let service: TopPageContentTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopPageContentTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
