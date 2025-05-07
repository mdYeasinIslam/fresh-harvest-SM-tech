export const fixImageUrl = (url: string | undefined) => {
  return url?.replace('i.ibb.co.com', 'i.ibb.co');
};