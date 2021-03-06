import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {UserService} from "../../services/user/user.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HeaderComponent ],
            providers: [{provide: UserService, usevalue: jasmine.createSpyObj('UserService', ['getBookshelf'])},
                {provide: NgbModal, usevalue: jasmine.createSpy('NgbModal')}]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
