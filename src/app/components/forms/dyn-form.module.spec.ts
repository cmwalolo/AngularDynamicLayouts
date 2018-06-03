import { DynFormModule } from './dyn-form.module';

describe('FormModule', () => {
  let formModule: DynFormModule;

  beforeEach(() => {
    formModule = new DynFormModule();
  });

  it('should create an instance', () => {
    expect(formModule).toBeTruthy();
  });
});
