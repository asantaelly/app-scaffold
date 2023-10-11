interface ColorTypes {
    brand: string;
    primary: string;
    secondary: string;
    neutral?: string;
    success: string;
    warning: string;
    danger: string;
  }
  
  type TextColorType = ColorTypes;
  type BackgroundColorType = ColorTypes;
  type HighlightColorType = ColorTypes;
  
  export type Colors = {
    text: TextColorType;
    background: BackgroundColorType;
    highlight: HighlightColorType;
  };
  