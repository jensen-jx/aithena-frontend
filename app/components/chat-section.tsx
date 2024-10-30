"use client";

import { Message, useChat } from "ai/react";
import { ChatInput, ChatMessages } from "./ui/chat";
import { useMemo } from "react";
import { transformMessages } from "./transform";
import useNodes from "../hooks/useNodes";
import { NodePreview } from "./ui/nodes";

export default function ChatSection() {
  const {
    messages,
    input,
    isLoading,
    handleSubmit,
    handleInputChange,
    reload,
    stop,
  } = useChat({
    //api: process.env.NEXT_PUBLIC_CHAT_API,
    api: "http://127.0.0.1:5001/query"
  });

  const { nodes, setNodes } = useNodes();

  const mergeFunctionMessages = (messages: Message[]): Message[] => {
    // only allow the last function message to be shown
    return messages.filter(
      (msg, i) => msg.role !== "function" || i === messages.length - 1
    );
  };

  const transformedMessages = useMemo(() => {
    // return mergeFunctionMessages(transformMessages(messages));
    return transformMessages(messages, setNodes);
  }, [messages]);

  return (
    <div>
      <div className="flex flex-row gap-10 ">
        <div className="w-[65vw]">
          <ChatMessages
            messages={transformedMessages}
            isLoading={isLoading}
            reload={reload}
            stop={stop}
          />
          <div className="gap-10 p-1" />
          <ChatInput
            input={input}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            isLoading={isLoading}
          />
        </div>
        {nodes.length === 0 ? (
          <></>
        ) : (
          <div className="w-[35vw]">
            <NodePreview nodes={nodes} />
          </div>
        )}
      </div>
    </div>
  );
}
