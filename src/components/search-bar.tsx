import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '@/components/ui/input-group';
import { Search } from 'lucide-react';

function SearchBar() {
    return (
        <InputGroup className="h-14 rounded-full">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
                <Search />
            </InputGroupAddon>
        </InputGroup>
    );
}

export { SearchBar };
