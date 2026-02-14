/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'pdbe-molstar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'custom-data'?: { url: string; format: string; binary: boolean };
      'hide-controls'?: boolean;
      'subscribe-events'?: boolean;
      'bg-color-r'?: number;
      'bg-color-g'?: number;
      'bg-color-b'?: number;
    };
  }
}
