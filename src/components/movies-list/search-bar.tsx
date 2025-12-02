'use client';

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '@/components/ui/input-group';
import { MoviesContext } from '@/hooks/useMoviesContext';
import { Search } from 'lucide-react';
import { useContext } from 'react';

function SearchBar() {
    const { setFilter } = useContext(MoviesContext);

    return (
        <InputGroup className="h-14 rounded-full">
            <InputGroupInput
                placeholder="Search..."
                onChange={(e) => setFilter(e.target.value)}
            />
            <InputGroupAddon>
                <Search />
            </InputGroupAddon>
        </InputGroup>
    );
}

export { SearchBar };
