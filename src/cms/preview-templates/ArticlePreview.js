import React from 'react'
import { ArticleTemplate } from '../../templates/article'

const ArticlePreview = ({ entry, widgetFor }) => (
  <ArticleTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export default ArticlePreview
