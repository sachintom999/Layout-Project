'use client';
import usePostHook from '../hooks/usePostHook';
const getSelfApiFn = (payload) => {
  const { response, loading, error } = usePostHook('/me', payload);
  return { response, loading, error };
};
export default getSelfApiFn;
