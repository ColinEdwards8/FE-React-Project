import { Fragment, useState } from "react";
import { Button, CircularProgress, TextField } from '@mui/material';
import { HelloWorld } from "../components/HelloWorld";
import { MainPageStyles } from "./MainPageStyles";

export const MainPageContent = () => {
    const [ search, setSearch ] = useState<string>()
    const [ numberOfResults, setNumberOfResults ] = useState<number>(1)
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ data, setData ] = useState([])

    const getPhotos = async () => {
        setLoading(true);
        await fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=${numberOfResults}`, {
            method: "GET",
            headers: {
                Authorization: '563492ad6f91700001000001acf243db21de45b08beaace22c359e03',
            },
        }).then((response) => {
            return response.json();
        }).then((response) => {
            setLoading(false);
            setData(response.photos)
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        getPhotos()
    }

    return (
    <MainPageStyles>
        <HelloWorld searchResults={search}/>
        <form className='search' onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="image search" variant="outlined" onChange={(e: any) => setSearch(e.target.value)}/>
            <TextField id="outlined-basic" label="number of images" variant="outlined" type='number' onChange={(e: any) => setNumberOfResults(e.target.value)}/>
            <Button variant='outlined' type="submit" value="Submit">Search</Button>
        </form>
        {loading && <CircularProgress/>}
        {data ? (<div className='photos'>
            {data.map((item: any, index: any) => {
                return (
                    <Fragment key={index}>
                    <div className="image">
                        <img src={item.src.medium} alt={item.id} />
                    </div>
                    </Fragment>
                )
            })}
        </div>) : ''}
        <Button variant='outlined' size='large' href='/pagetwo'>Next</Button>
        <Button variant='outlined' size='large' href='/spotify_search'>Spotify Search</Button>
    </MainPageStyles>
    )
};

export default MainPageContent;