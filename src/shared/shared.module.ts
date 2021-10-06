import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
// import { TranslateModule } from "@ngx-translate/core";

// import { NgProgressModule } from "ngx-progressbar";
// import { NgProgressRouterModule } from "ngx-progressbar/router";
// import { NgProgressHttpModule } from "ngx-progressbar/http";
// import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { MaterialModule } from "./material.module";
import { HttpClientModule } from "@angular/common/http";
import { PrimeNgModule } from "./primeng.module";
import { ConfirmDialogComponent } from "./components/confirm-dialog.component";
import { SocialMediaFloatingComponent } from "./components/social-media-floating.component";

import { Error404 } from "./components/Error404/error404.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { ButtonPreloaderComponent } from "./components/button-preloader.component";
import { PreloaderComponent } from "./components/preloader.component";

import { SubString } from "./pipes/subString.pipe";
import { SymbolNamePipe } from "./pipes/symbol-name.pipe";
import { CasedNamePipe } from "./pipes/cased-name.pipe";
import { SpliceStringPipe } from "./pipes/splice-string.pipe";
import { PercentagePipe } from "./pipes/percentage.pipe";

const LOCAL_COMPONENTS: any = [];
const SHARED_COMPONENTS = [
  ConfirmDialogComponent,
  SocialMediaFloatingComponent,

  Error404,
  PreloaderComponent,
  PaginationComponent,
  ButtonPreloaderComponent,
];

const SHARED_PIPES = [
  SymbolNamePipe,
  CasedNamePipe,
  SubString,
  SpliceStringPipe,
  PercentagePipe,
];

const LOCAL_DIRECTIVES: any = [];

const SHARED_DIRECTIVES: any = [];

const THIRD_MODULES = [MaterialModule, PrimeNgModule, FlexLayoutModule];

const COMMON_MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  HttpClientModule,
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
    ...LOCAL_COMPONENTS,
    ...LOCAL_DIRECTIVES,
    ...SHARED_DIRECTIVES,
    ...SHARED_PIPES,
  ],
  imports: [...COMMON_MODULES, ...THIRD_MODULES],
  exports: [...SHARED_COMPONENTS, ...COMMON_MODULES, ...THIRD_MODULES, ...SHARED_PIPES],
})
export class SharedModule {}
