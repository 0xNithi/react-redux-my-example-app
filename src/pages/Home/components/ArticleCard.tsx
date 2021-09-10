import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from 'state/types';

interface Props {
  article: Article;
}

const ArticleCard: React.FC<Props> = ({ article }) => (
  <Link to={`/article/${article.id}`} className="block p-4 bg-white rounded border border-gray-200 dark:bg-gray-800">
    <div className="text-2xl font-semibold text-black">{article.title}</div>
    <div className="text-base font-normal text-gray-500">{article.body}</div>
  </Link>
);

export default ArticleCard;
