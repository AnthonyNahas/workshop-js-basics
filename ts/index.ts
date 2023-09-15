interface Book {
  isbn: string;
  title: string;
  pages?: number;
}

type Books = Book[]

const book: Book = { isbn: '', title: '', pages: 25 };

const bookList: Books = [];

type AccountType = 'STARTER' | 'PRO' | 'ENTERPRISE'

type CarType = 'audi' | 'bmw';

const car1: CarType = 'audi';
const car2: CarType = 'bmw';
const car3: CarType = 'honda';

