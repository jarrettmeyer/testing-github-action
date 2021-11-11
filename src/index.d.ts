type Dictionary<T> = Record<string, T>;

type InlineStyle = Dictionary<string>;

interface AppendElementInput {
  classes?: string[];
  id?: string;
  inlineStyle?: InlineStyle;
  textContent?: string;
}

interface UpdateElementInput {
  inlineStyle?: InlineStyle;
}
