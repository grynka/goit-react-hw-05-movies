import { SearchForms, Button, Label, Input } from './SearchForm.styled';
import { ImSearch } from 'react-icons/im';
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  return (
    <SearchForms onSubmit={onSubmit}>
      <Input
        type="text"
        name="query"
        onChange={e => setQuery(e.target.value)}
        value={query}
        placeholder="search movies..."
      />
      <Button type="submit" className="button">
        <ImSearch />
        <Label>Search</Label>
      </Button>
    </SearchForms>
  );
};

export default SearchForm;
