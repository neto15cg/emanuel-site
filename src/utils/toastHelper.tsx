import React from 'react';
import { toast } from 'react-toastify';

const toastBody = (title?: string, description?: string) => {
  return (
    <>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </>
  )
}

export const toastSuccess = (title?: string, description?: string) => {
  toast.success(toastBody(title, description));
}

export const toastError = (title?: string, description?: string) => {
  toast.error(toastBody(title, description));
}
