import { NgModule } from '@angular/core';

import { BlogAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [BlogAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [BlogAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BlogAppSharedCommonModule {}
