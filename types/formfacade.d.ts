// Type definitions for @formfacade/embed-react
declare module '@formfacade/embed-react' {
  interface FormfacadeEmbedProps {
    formFacadeURL: string;
    onSubmitForm?: () => void;
    onFormLoaded?: () => void;
    className?: string;
    style?: React.CSSProperties;
  }

  const FormfacadeEmbed: React.ComponentType<FormfacadeEmbedProps>;
  export default FormfacadeEmbed;
}
