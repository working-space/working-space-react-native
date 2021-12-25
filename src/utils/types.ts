import { ComponentProps, JSXElementConstructor } from 'react';

export type ExtendComponentProps<T extends JSXElementConstructor<any>, P> = Omit<ComponentProps<T>, keyof P> & P;
