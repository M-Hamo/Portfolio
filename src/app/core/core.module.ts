import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";

import { EnsureModuleLoadedOnceGuard } from "./loaded-once.guard";
import { ModalService } from "./services/modal.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  exports: [HttpClientModule],
  providers: [
    // ...HttpInterceptorsProviders,
    ModalService,
    // LoggerService,
  ],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
