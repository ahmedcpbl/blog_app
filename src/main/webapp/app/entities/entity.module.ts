import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BlogAppBlogModule } from './blog/blog.module';
import { BlogAppTagModule } from './tag/tag.module';
import { BlogAppEntryModule } from './entry/entry.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        BlogAppBlogModule,
        BlogAppTagModule,
        BlogAppEntryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogAppEntityModule {}
