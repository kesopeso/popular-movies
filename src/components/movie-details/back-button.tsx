import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function BackButton() {
    return (
        <Button variant="outline" asChild={true}>
            <Link href="/">
                <ArrowLeft className="h-[1.2rem] w-[1.2rem]" />
                <span>Back</span>
            </Link>
        </Button>
    );
}

export { BackButton };
