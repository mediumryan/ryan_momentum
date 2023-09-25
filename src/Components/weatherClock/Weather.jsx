import { useQuery } from '@tanstack/react-query';
import { useGeolocation } from '@uidotdev/usehooks';
import React, { useEffect } from 'react';
import { fetchData } from '../../api';
import { styled } from 'styled-components';

const WeatherWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--padding-double-medium);
    font-size: var(--font-size-small);
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0.1px);
    -webkit-backdrop-filter: blur(0.1px);
    cursor: default;
    p {
        margin: var(--margin-medium) 0;
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
