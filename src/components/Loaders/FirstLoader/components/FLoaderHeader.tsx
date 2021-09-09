import React from 'react';
import { FLoaderTitle } from '.';

const FLoaderHeader: React.FC = () => (
  <div className="FirstLoader__header">
    <FLoaderTitle>Привет</FLoaderTitle>
    <FLoaderTitle>Загрузка пользовательских данных!</FLoaderTitle>
  </div>
);

export default FLoaderHeader;
