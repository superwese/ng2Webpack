/* tslint:disable:no-unused-variable */

import { TestBed, inject, addProviders } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [AppComponent]});
        addProviders([AppComponent]);
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
    it('should have title',
        inject([AppComponent], (app: AppComponent) => {
            expect(app.title).toEqual('Hello with Webpack');
        }));
});
