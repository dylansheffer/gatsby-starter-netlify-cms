import React from 'react';

const AuthorList = ({ authors, className }) => {
    const getAuthorList = (authors) => {
      if (authors.length < 2) {
        return authors[0].title || "author"
      }

      let authorsString = "";
      authors.forEach((author, i) => {
        if (i === 0) {
          authorsString = author.title
        }
        else if(i === authors.length - 1) {
          authorsString = `${authorsString}, and ${author.title}`;
        }
        else {
          authorsString = `${authorsString}, ${author.title}`
        }
      })

      return authorsString;
    }

    return <span className={className}>by {getAuthorList(authors)}</span>
  }

export default AuthorList;