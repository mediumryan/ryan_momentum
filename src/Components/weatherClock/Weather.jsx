import { useQuery } from '@tanstack/react-query';
import { useGeolocation } from '@uidotdev/usehooks';
import { styled } from 'styled-components';
import { useEffect } from 'react';
// import data
import { fetchData } from '../../api';

const WeatherWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 1rem 2rem;
    color: var(--white-200);
    p:nth-child(2) {
        margin: 0.5rem 0;
    }
`;

export default function Weather() {
    const geo = useGeolocation();

    const queryKey = ['weatherData', geo.latitude, geo.longitude];

    const { isLoading, data, error } = useQuery(
        queryKey,
        () => fetchData(geo.latitude, geo.longitude),
        {
            enabled:
                !geo.loading &&
                geo.latitude !== undefined &&
                geo.longitude !== undefined,
        }
    );

    useEffect(() => {
        if (error) {
            console.error(error);
        }
    }, [error]);

    return (
        <WeatherWrapper>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <p>{data.name}</p>
                    <p>{data.weather[0].main}</p>
                    <p>{data.main.temp.toFixed(1)}°C</p>
                </>
            )}
        </WeatherWrapper>
    );
}
