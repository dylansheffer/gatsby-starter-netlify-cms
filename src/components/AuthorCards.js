import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEnvelope, faLaptop }  from '@fortawesome/fontawesome-free-solid'
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands'

import FlexContainer from '../components/FlexContainer';
import CardItem from '../components/CardItem'
import SectionHeading from '../components/SectionHeading'

const AuthorCard = styled(CardItem)`

`
const AuthorInfo = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    li {
        display: flex;
        align-items: center;
        padding: 5px;
        svg {
            margin: 5px;
            font-size: 30px;
        }
    }
`

const AuthorCards = ({authors, authorType, authorTypePlural}) => (
    <section>
        {(authors.length < 2) ?
            (
                <div>
                    <SectionHeading>{authorType ? authorType : "Author"}</SectionHeading>
                    <AuthorCard image={authors[0].image}>
                        <FlexContainer>
                            <div style={{width: "100%"}}>
                                <h3>{authors[0].title}</h3>
                                <p>{authors[0].bio}</p>
                                <AuthorInfo>
                                    {authors[0].website ?
                                        <li>
                                            <FontAwesomeIcon icon={faLaptop} />
                                            <a href={authors[0].website}>{authors[0].website}</a>
                                        </li>
                                    : ""}

                                    {authors[0].twitter ?
                                        <li>
                                            <FontAwesomeIcon icon={faTwitter} />
                                            <a href={`https://twitter.com/${authors[0].twitter}`}>@{authors[0].twitter}</a>
                                        </li>
                                    : ""}

                                    {authors[0].email ?
                                        <li>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <a href={`mailto:${authors[0].email}`}>{authors[0].email}</a>
                                        </li>
                                    : ""}

                                    {authors[0].github ?
                                        <li>
                                            <FontAwesomeIcon icon={faGithub} />
                                            <a href={`https://github.com/${authors[0].github}`}>{authors[0].github}</a>
                                        </li>
                                    : ""}

                                    {authors[0].linkedin ?
                                        <li>
                                            <FontAwesomeIcon icon={faLinkedin} />
                                            <a href={`https://linkedin.com/in/${authors[0].linkedin}`}>{authors[0].linkedin}</a>
                                        </li>
                                    : ""}

                                    {authors[0].facebook ?
                                        <li>
                                            <FontAwesomeIcon icon={faFacebook} />
                                            <a href={`https://facebook.com/${authors[0].facebook}`}>{authors[0].facebook}</a>
                                        </li>
                                    : ""}
                                </AuthorInfo>
                            </div>
                        </FlexContainer>
                    </AuthorCard>
                </div>
            )
            : (
                <div>
                    <SectionHeading>{authorTypePlural ? authorTypePlural : "Authors"}</SectionHeading>
                    {authors.map(author => {
                        return(
                            <AuthorCard key={author.title} image={author.image}>
                                <div style={{width: "100%"}}>
                                    <div>
                                        <h3>{author.title}</h3>
                                        <p>{author.bio}</p>
                                        <AuthorInfo>
                                    {author.website ?
                                        <li>
                                            <FontAwesomeIcon icon={faLaptop} />
                                            <a href={author.website}>{author.website}</a>
                                        </li>
                                    : ""}

                                    {author.twitter ?
                                        <li>
                                            <FontAwesomeIcon icon={faTwitter} />
                                            <a href={`https://twitter.com/${author.twitter}`}>@{author.twitter}</a>
                                        </li>
                                    : ""}

                                    {author.email ?
                                        <li>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <a href={`mailto:${author.email}`}>{author.email}</a>
                                        </li>
                                    : ""}

                                    {author.github ?
                                        <li>
                                            <FontAwesomeIcon icon={faGithub} />
                                            <a href={`https://github.com/${author.github}`}>{author.github}</a>
                                        </li>
                                    : ""}

                                    {author.linkedin ?
                                        <li>
                                            <FontAwesomeIcon icon={faLinkedin} />
                                            <a href={`https://linkedin.com/in/${author.linkedin}`}>{author.linkedin}</a>
                                        </li>
                                    : ""}

                                    {author.facebook ?
                                        <li>
                                            <FontAwesomeIcon icon={faFacebook} />
                                            <a href={`https://facebook.com/${author.facebook}`}>{author.facebook}</a>
                                        </li>
                                    : ""}
                                        </AuthorInfo>
                                    </div>
                                </div>
                            </AuthorCard>
                        )
                    })}
                </div>
            )
        }
    </section>
)

export default AuthorCards