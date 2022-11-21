import { TestBed } from '@angular/core/testing';

import { TopPageContentTitleServiceTsService } from './top-page-content-title.service';

describe('TopPageContentTitleServiceTsService', () => {
  let service: TopPageContentTitleServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopPageContentTitleServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
