import { useRef } from 'react';

export const useHandler = (handler) => useRef(handler).current;
