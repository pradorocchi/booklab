import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {Book, Title} from '../../dataTypes';
import {HttpService} from '../../services/http/http.service';

@Component({
    selector: 'app-bookshelf',
    templateUrl: './bookshelf.component.html',
    styleUrls: ['./bookshelf.component.less']
})
export class BookshelfComponent implements OnInit {

    public books: Book[];
    public enterBook: boolean;
    public nameInput: string;
    public authorInput: string;

    constructor(private user: UserService, private http: HttpService) {
    }

    ngOnInit() {
        this.user.getBookshelf().subscribe(b => {
            this.books = b;
        });
        this.enterBook = false;
    }

    deleteBook(book: Book) {
        this.user.deleteFromBookshelf(book);
    }

    findBook() {
        this.user.addToBookshelf(new Book([], [], [],true));
        this.http.findBook(this.nameInput, this.authorInput).subscribe((book: Book[]) => {
            this.user.bookSearchComplete(Book.getBook(book[0]));
        });
        this.enterBook = false;
        this.authorInput = '';
        this.nameInput = '';

    }
}
