/* eslint-disable sonarjs/no-duplicate-string */
import axios, { AxiosError } from 'axios';
import { apiUrl } from './api';

export type ModalType = {
  state: boolean;
  message: string;
  title: string;
};
export const initialModalState = {
  state: false,
  message: '',
  title: '',
};

export const deleteCategory = async (
  id: string,
  setSuccess: ({ state, message, title }: ModalType) => void,
  setError: ({ state, message, title }: ModalType) => void,
  token?: string | null
) => {
  if (!token) {
    setError({
      state: true,
      message: 'Your session has expired. Please log in again.',
      title: 'Unauthorized',
    });
    return;
  }
  try {
    await axios.delete(`${apiUrl}/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setSuccess({
      state: true,
      message: 'Category deleted successfully',
      title: 'Success',
    });
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error?.response?.status === 401) {
        setError({
          state: true,
          message: 'Your session has expired. Please log in again.',
          title: 'Unauthorized',
        });
        return;
      }

      setError({
        state: true,
        message: error?.response?.data['hydra:description'],
        title: error?.response?.data['hydra:title'],
      });
    }
  }
};

export const deleteLocation = async (
  id: string,
  setSuccess: ({ state, message, title }: ModalType) => void,
  setError: ({ state, message, title }: ModalType) => void,
  token?: string | null
) => {
  if (!token) {
    setError({
      state: true,
      message: 'Your session has expired. Please log in again.',
      title: 'Unauthorized',
    });
    return;
  }

  try {
    await axios.delete(`${apiUrl}/locations/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setSuccess({
      state: true,
      message: 'Location deleted successfully',
      title: 'Success',
    });
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error?.response?.status === 401) {
        setError({
          state: true,
          message: 'Your session has expired. Please log in again.',
          title: 'Unauthorized',
        });
        return;
      }

      setError({
        state: true,
        message: error?.response?.data['hydra:description'],
        title: error?.response?.data['hydra:title'],
      });
    }
  }
};

export const deleteCity = async (
  id: string,
  setSuccess: ({ state, message, title }: ModalType) => void,
  setError: ({ state, message, title }: ModalType) => void,
  token?: string | null
) => {
  if (!token) {
    setError({
      state: true,
      message: 'Your session has expired. Please log in again.',
      title: 'Unauthorized',
    });
    return;
  }

  try {
    await axios.delete(`${apiUrl}/cities/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setSuccess({
      state: true,
      message: 'City deleted successfully',
      title: 'Success',
    });
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error?.response?.status === 401) {
        setError({
          state: true,
          message: 'Your session has expired. Please log in again.',
          title: 'Unauthorized',
        });
        return;
      }

      setError({
        state: true,
        message: error?.response?.data['hydra:description'],
        title: error?.response?.data['hydra:title'],
      });
    }
  }
};

export const deleteUser = async (
  id: string,
  setSuccess: ({ state, message, title }: ModalType) => void,
  setError: ({ state, message, title }: ModalType) => void,
  token?: string | null
) => {
  if (!token) {
    setError({
      state: true,
      message: 'Your session has expired. Please log in again.',
      title: 'Unauthorized',
    });
    return;
  }

  try {
    await axios.delete(`${apiUrl}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setSuccess({
      state: true,
      message: 'User deleted successfully',
      title: 'Success',
    });
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error?.response?.status === 401) {
        setError({
          state: true,
          message: 'Your session has expired. Please log in again.',
          title: 'Unauthorized',
        });
        return;
      }

      setError({
        state: true,
        message: error?.response?.data['hydra:description'],
        title: error?.response?.data['hydra:title'],
      });
    }
  }
};
