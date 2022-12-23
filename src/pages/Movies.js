import {
  SearchForm,
  Button,
  Label,
  Input,
} from './Searchbar.styled';

export const Movies = () => {
  return (
    <main>
        <SearchForm>
          <Button type="submit" className="button">
            <Label>Search</Label>
          </Button>

          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
        </SearchForm>
    </main>
  );
};