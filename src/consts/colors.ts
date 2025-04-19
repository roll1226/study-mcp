export const COLORS = {
  HEADLINE: "#094067",
  PARAGRAPH: "#5F6C7B",
  BUTTON: "#3DA9FC",
  BUTTON_TEXT: "#FFFFFE",
  BACKGROUND: "#FFFFFE",
  STROKE: "#094067",
  ERROR: "#D32929",
} as const;

export type COLORS = (typeof COLORS)[keyof typeof COLORS];
