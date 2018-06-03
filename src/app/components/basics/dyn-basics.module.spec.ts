import { DynBasicsModule } from './dyn-bascis.module';

describe('BasicModule', () => {
  let basicModule: DynBasicsModule;

  beforeEach(() => {
    basicModule = new DynBasicsModule();
  });

  it('should create an instance', () => {
    expect(basicModule).toBeTruthy();
  });
});
