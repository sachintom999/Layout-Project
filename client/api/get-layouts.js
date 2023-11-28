'use client';
import useGetHook from '../hooks/useGetHook';
const getLayouts = () => {
  const { response, loading, error } = useGetHook('/layouts');
  return { layouts: response, loading, error };
};
export default getLayouts;
