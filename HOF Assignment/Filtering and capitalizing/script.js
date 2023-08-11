// list of books name along with the author name and the published year
const books = [
    {
        bookName: "Biology",
        author: "priyamanshu",
        year: 2011
    },
    {
        bookName: "chemestry",
        author: "harsh",
        year: 2010
    },
    {
        bookName: "botny",
        author: "anand",
        year: 2012
    },
    {
        bookName: "java",
        author: "hitesh",
        year: 2009
    },
    {
        bookName: "c++",
        author: "ankita",
        year: 2008
    }
]

let filterBooks = books.filter((book) => book.year >= 2010).map((book) => ({
    ...book, author: book.author.toUpperCase() 
}))
console.log(filterBooks);


// output:-
// [
//   { bookName: 'Biology', author: 'PRIYAMANSHU', year: 2011 },
//   { bookName: 'chemestry', author: 'HARSH', year: 2010 },
//   { bookName: 'botny', author: 'ANAND', year: 2012 }
// ]