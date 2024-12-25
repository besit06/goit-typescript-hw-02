import s from './SearchBar.module.css'
import toast from 'react-hot-toast'
import { useState } from 'react'

interface SearchBarProps {
  onSubmit: (query: string) => void;
};
  

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
    const [query, setQuery] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim() === '') {
            toast.error("Please enter a search item.");
           
            return;
        }
        onSubmit(query);
  };
  
     return (
         <header className={s.searchBar}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className={s.input}
        />
        <button type="submit" className={s.button}>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
    

