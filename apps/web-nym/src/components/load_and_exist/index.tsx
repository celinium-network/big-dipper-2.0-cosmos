import React from 'react';
import NotFound from '@components/not_found';
import LinearLoading from '@components/linear_loading';

const LoadAndExist = (props: {
  loading: boolean;
  exists: boolean;
  children: React.ReactNode;
}) => {
  const {
    loading,
    exists,
    children,
  } = props;

  if (loading) {
    return <LinearLoading />;
  } if (!exists && !loading) {
    return <NotFound />;
  }
  return (
    <>
      {children}
    </>
  );
};

export default LoadAndExist;
