export interface Message {
  id: string;
  content: string;
  role: string;
}

export interface ChatHandler {
  messages: Message[];
  input: string;
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reload?: () => void;
  stop?: () => void;
}

export interface Node {
  id: string;
  title: string;
  url: string;
  section: string;
  summary: string;
}
