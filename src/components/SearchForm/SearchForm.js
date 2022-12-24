import { SearchForms, Button, Label, Input } from './SearchForm.styled';
import { ImSearch } from 'react-icons/im';
import { useState } from 'react';
import PropTypes from 'prop-types';


const SearchForm = ({ onSubmit, value }) => {
  const [query, setQuery] = useState(value);
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

SearchForm.propTypes = {
    onSubmit: PropTypes.func,
    value: PropTypes.string,
  };

export default SearchForm;
