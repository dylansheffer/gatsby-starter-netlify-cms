import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEnvelope, faLaptop }  from '@fortawesome/fontawesome-free-solid'
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands'

import FlexContainer from '../components/FlexContainer';
import CardItem from '../components/CardItem'
import SectionHeading from '../components/SectionHeading'
import { colors } from '../style/branding'

const CardSection = styled.section`
    margin: 40px 0;
`

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
        a {
            color: ${colors.gray};
            :hover {
                color: ${colors.red};
            }
            svg {
                margin: 5px;
                font-size: 30px;
            }
        }
    }
`

const AuthorCards = ({authors, authorType, authorTypePlural}) => (
    <CardSection>
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
                                            <a href={authors[0].website} aria-label={`${authors[0].title}'s website`} title={`${authors[0].title}'s website`}><FontAwesomeIcon icon={faLaptop} /></a>
                                        </li>
                                    : ""}

                                    {authors[0].twitter ?
                                        <li>
                                            <a href={`https://twitter.com/${authors[0].twitter}`} aria-label={`${authors[0].title}'s Twitter`} title={`${authors[0].title}'s Twitter`}><FontAwesomeIcon icon={faTwitter} /></a>
                                        </li>
                                    : ""}

                                    {authors[0].email ?
                                        <li>
                                            <a href={`mailto:${authors[0].email}`} aria-label={`Email ${authors[0].title}`} title={`Email ${authors[0].title}`}><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </li>
                                    : ""}

                                    {authors[0].github ?
                                        <li>
                                            <a href={`https://github.com/${authors[0].github}`} aria-label={`${authors[0].title}'s Github`} title={`${authors[0].title}'s Github`}><FontAwesomeIcon icon={faGithub} /></a>
                                        </li>
                                    : ""}

                                    {authors[0].linkedin ?
                                        <li>
                                            <a href={`https://linkedin.com/in/${authors[0].linkedin}`} aria-label={`${authors[0].title}'s Linkedin`} title={`${authors[0].title}'s Linkedin`}><FontAwesomeIcon icon={faLinkedin} /></a>
                                        </li>
                                    : ""}

                                    {authors[0].facebook ?
                                        <li>
                                            <a href={`https://facebook.com/${authors[0].facebook}`} aria-label={`${authors[0].title}'s Facebook`} title={`${authors[0].title}'s Facebook`}><FontAwesomeIcon icon={faFacebook} /></a>
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
                                            <a href={author.website} aria-label={`${author.title}'s website`} title={`${author.title}'s website`}><FontAwesomeIcon icon={faLaptop} /></a>
                                        </li>
                                    : ""}

                                    {author.twitter ?
                                        <li>
                                            <a href={`https://twitter.com/${author.twitter}`} aria-label={`${author.title}'s Twitter`} title={`${author.title}'s Twitter`}><FontAwesomeIcon icon={faTwitter} /></a>
                                        </li>
                                    : ""}

                                    {author.email ?
                                        <li>
                                            <a href={`mailto:${author.email}`} aria-label={`Email ${author.title}`} title={`Email ${author.title}`}><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </li>
                                    : ""}

                                    {author.github ?
                                        <li>
                                            <a href={`https://github.com/${author.github}`} aria-label={`${author.title}'s Github`} title={`${author.title}'s Github`}><FontAwesomeIcon icon={faGithub} /></a>
                                        </li>
                                    : ""}

                                    {author.linkedin ?
                                        <li>
                                            <a href={`https://linkedin.com/in/${author.linkedin}`} aria-label={`${author.title}'s Linkedin`} title={`${author.title}'s Linkedin`}><FontAwesomeIcon icon={faLinkedin} /></a>
                                        </li>
                                    : ""}

                                    {author.facebook ?
                                        <li>
                                            <a href={`https://facebook.com/${author.facebook}`} aria-label={`${author.title}'s Facebook`} title={`${author.title}'s Facebook`}><FontAwesomeIcon icon={faFacebook} /></a>
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
    </CardSection>
)

export default AuthorCards