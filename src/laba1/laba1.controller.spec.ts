import { Test, TestingModule } from '@nestjs/testing';
import { Laba1Controller } from './laba1.controller';

describe('Laba1Controller', () => {
  let controller: Laba1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Laba1Controller],
    }).compile();

    controller = module.get<Laba1Controller>(Laba1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
