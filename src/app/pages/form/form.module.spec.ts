import { FormModule} from './form.module';

describe('DashboardModule', () => {
  let dashboardModule: FormModule;

  beforeEach(() => {
    dashboardModule = new FormModule();
  });

  it('should create an instance', () => {
    expect(dashboardModule).toBeTruthy();
  });
});
