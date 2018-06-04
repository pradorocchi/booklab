import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManualBookFindComponent} from './manual-book-find.component';
import {HttpService} from "../../services/http/http.service";
import {UserService} from "../../services/user/user.service";
import {Observable} from "rxjs/Rx";
import {Book, BookItem} from "../../dataTypes";

describe('ManualBookFindComponent should..', () => {
    let component: ManualBookFindComponent;
    let http: jasmine.SpyObj<HttpService>;
    let user: jasmine.SpyObj<UserService>;

    beforeEach(() => {
        http = jasmine.createSpyObj('HttpService', ['findBook']);
        user = jasmine.createSpyObj('UserService', ['getBookshelf', 'addToBookshelf']);
        component = new ManualBookFindComponent(user, http);
    });

    it('create', () => {
        expect(component).toBeTruthy();
    });

    it('find a book', () => {
        http.findBook.and.returnValue(new Observable());
        component.authorInput = 'Willem Elsschot';
        component.nameInput = 'Kaas';
        component.findBook();
        expect(http.findBook.calls.count()).toBe(1);
        expect(http.findBook.calls.mostRecent().args).toEqual(['Kaas', 'Willem Elsschot']);
    });

    it('add a book to the bookshelf', () => {
        const book = new BookItem(Book.create('Kaas', 'Willem Elsschot', '123456'));
        component.result = book;
        component.addManualToBookshelf();
        expect(user.addToBookshelf.calls.count()).toBe(1);
        expect(user.addToBookshelf.calls.mostRecent().args[0]).toEqual(book.book);

    })
});