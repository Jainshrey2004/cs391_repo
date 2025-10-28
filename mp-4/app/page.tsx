import getData from "@/lib/getData";
import {BookTypes} from "@/types/BookTypes";

export default async function Home() {
    const data  = await getData();
    const books = Array.isArray(data.books)?data.books.flat():[];
  return (
    <>
        {
            books.map((book:BookTypes) => (
                <div key={book.id}>
                <h1>{book.title}</h1>
                    <img src={book.image} alt={book.title}/>
                </div>
            ))
        }
    </>
  );
}
