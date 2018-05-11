import React from 'react'
import { ArticleTemplate } from '../../templates/article'
import styled from 'styled-components'

// TODO: Put Global Styles into its own component that can be imported in
const GlobalStyles = styled.div`
  font-family: ${text.sansSerif};
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
`

const ArticlePreview = ({ entry, widgetFor }) => (
  <GlobalStyles>
    <ArticleTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={entry.getIn(['data', 'tags'])}
      title={entry.getIn(['data', 'title'])}
    />
  </GlobalStyles>
)

export default ArticlePreview
