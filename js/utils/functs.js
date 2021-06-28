export const validateForm = (data) => {
  if (!data) return false;
  
  const fields = Object.keys(data);

  for ( const field of fields ) {
    if (data[field] === '') {
      return false;
    }
  }

  return true;
};
