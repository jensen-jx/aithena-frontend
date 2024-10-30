import { Button } from "../button";
import { Input } from "../input";
import { ChatHandler } from "./chat.interface";

//handleSubmit: /node_modules/ai/react/dist/index.mjs
export default function ChatInput(
  props: Pick<
    ChatHandler,
    "isLoading" | "handleSubmit" | "handleInputChange" | "input"
  >,
) {
  return (
    <form
      onSubmit={props.handleSubmit}
      className="flex w-full items-start justify-between gap-4 rounded-xl bg-white p-4 shadow-xl"
    >
      <Input
        autoFocus
        name="message"
        placeholder="Please enter your legal query"
        className="flex-1 font-nunito"
        value={props.input}
        onChange={props.handleInputChange}
      />
      <Button type="submit" disabled={props.isLoading}>
        Send message
      </Button>
    </form>
  );
}
