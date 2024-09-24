import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
// import { CLIENT_ID, CLIENT_SECRET } from '../Keys/keys'

const CLIENT_ID = '04b4b570476e4bc28a39c65a3f88503a';
const CLIENT_SECRET = '35764095adf542e8adb8e22afa567778';


const SpotifySearch = () => {
    const [ searchInput, setSearchInput ] = useState<string>()
    const [ accessToken, setAccessToken ] = useState()
    const [ albums, setAlbums ] = useState([])

    useEffect(() => {
        let authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(results => results.json())
        .then(data => setAccessToken(data.access_token))
    }, [])

    const search = async () => {
        let searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }

        let artistID = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, searchParameters)
            .then(response => response.json())
            .then(data => data.artists.items[0].id)
        
        let albums = await fetch(`https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limit=12`, searchParameters)
            .then(response => response.json())
            .then(data => setAlbums(data.items))
    }

    return (
    <>
    <Container>
        <InputGroup className='mb-3'>
            <FormControl
                placeholder='Search For Artist'
                type='input'
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        search()
                    }
                }}
                onChange={event => setSearchInput(event.target.value)}
            />
            <Button onClick={search}>Search</Button>
        </InputGroup>
    </Container>
    <Container>
        <Row className='mx-2 row row-cols-4'>
            {albums.map((album: any, i) => {
                return (
                <Card key={i}>
                    <Card.Img src={album.images[0].url}/>
                    <Card.Title>{album.name}</Card.Title>
                </Card>
            )})}
        </Row>
    </Container>
    <Button href='/'>Home</Button>
    </>
    )
}

export default SpotifySearch;