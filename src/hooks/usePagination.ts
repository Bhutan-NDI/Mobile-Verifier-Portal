import { useState, useCallback } from 'react';

interface PaginationState {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

interface UsePaginationReturn extends PaginationState {
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
  setTotalItems: (total: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  canNextPage: boolean;
  canPrevPage: boolean;
  getQueryParams: () => string;
}

export const usePagination = (initialPageSize = 10): UsePaginationReturn => {
  const [state, setState] = useState<PaginationState>({
    page: 1,
    pageSize: initialPageSize,
    totalItems: 0,
    totalPages: 0,
  });

  const setPage = useCallback((page: number) => {
    setState(prev => ({ ...prev, page }));
  }, []);

  const setPageSize = useCallback((pageSize: number) => {
    setState(prev => ({ ...prev, pageSize, page: 1 }));
  }, []);

  const setTotalItems = useCallback((totalItems: number) => {
    setState(prev => ({
      ...prev,
      totalItems,
      totalPages: Math.ceil(totalItems / prev.pageSize),
    }));
  }, []);

  const nextPage = useCallback(() => {
    setState(prev => ({
      ...prev,
      page: Math.min(prev.page + 1, prev.totalPages),
    }));
  }, []);

  const prevPage = useCallback(() => {
    setState(prev => ({ ...prev, page: Math.max(prev.page - 1, 1) }));
  }, []);

  const getQueryParams = useCallback(() => {
    return `pageSize=${state.pageSize}&page=${state.page}`;
  }, [state.pageSize, state.page]);

  return {
    ...state,
    setPage,
    setPageSize,
    setTotalItems,
    nextPage,
    prevPage,
    canNextPage: state.page < state.totalPages,
    canPrevPage: state.page > 1,
    getQueryParams,
  };
};