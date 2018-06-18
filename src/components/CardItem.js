import React from 'react'
import styled from 'styled-components'

import DefaultPostImage from '../img/placeholder.svg'

const CardImage = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 300px;
    height: 250px;
    align-self: center;
    margin: auto 0;

    @media only screen and (min-width: 410px) {
        width: 400px;
    }

    @media only screen and (min-width: 900px) {
        margin-right: 50px;
    }
`

const CardItemListing = styled.article`
    display: flex;
    flex-direction: column;
    margin: 50px 20px;

    .card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card-image {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 300px;
        height: 250px;
        align-self: center;
        margin: auto 0;
    }

    @media only screen and (min-width: 900px) {
        flex-direction: row;
        height: 250px;

        .card-content {
            align-items: normal;
            width: calc(100% - 300px);
            height: 100%;
        }
    }
`

const CardItem = ({ image, ...props }) => (
    <CardItemListing>
        <CardImage image={image || DefaultPostImage} />
        <div className="card-content">
            {props.children}
        </div>
    </CardItemListing>
)

export default CardItem;