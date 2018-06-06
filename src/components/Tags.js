import React from 'react'
import { kebabCase } from 'lodash'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { v4 } from 'uuid'

const TagsStyle = styled.section`
  h2 {
    text-align: center;
  }
`

export const PostTags = ({tags}) => (
  <TagsStyle>
    <h2>Tags</h2>
    <TagList tags={tags} />
  </TagsStyle>
)

const TagListStyle = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  li {
    a {
      text-decoration: underline;
      color: black;
    }
  }
`

export const TagList = ({tags}) => {
  if (tags && tags.length) {
    return (
      <TagListStyle className="tagList">
        {tags.map(tag => <Tag key={v4()} tag={tag} />)}
      </TagListStyle>
    )
  }
  else {
    return null
  }
}

export const Tag = ({tag}) => {
  if (tag) {
    return (
      <li key={tag + `tag`}>
        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
      </li>
    )
  }
  else {
    return null;
  }
}

export default PostTags