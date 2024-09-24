interface HelloWorldProps {
    searchResults?: string;
}

export const HelloWorld = (props: HelloWorldProps) => {
    const { searchResults } = props;
    return (
    <>
        <div className="hello-world">
            <div>Find Your Favorite pictures</div>
            <div>Your Search: {searchResults}</div>
        </div>
    </>
    )
}