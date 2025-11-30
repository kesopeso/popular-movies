function Container({ children }: React.ComponentProps<'div'>) {
    return (
        <>
            <div className="flex justify-center">
                <div className="mx-2 w-full max-w-7xl md:mx-5">{children}</div>
            </div>
        </>
    );
}

export { Container };
