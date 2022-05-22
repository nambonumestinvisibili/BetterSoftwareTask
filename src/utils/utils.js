export const range = (size, startAt = 0) => (size || size === 0) 
  ? [...Array(size).keys()].map(i => i + startAt)
  : []
