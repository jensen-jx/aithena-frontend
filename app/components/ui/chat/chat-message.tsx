import { Check, Copy } from "lucide-react";

import ReactMarkdown from "react-markdown";
import { Tooltip } from "react-tooltip";
import { Button } from "../button";
import { cn } from "../lib/utils";
import ChatAvatar from "./chat-avatar";
import { Message } from "./chat.interface";
import { useCopyToClipboard } from "./use-copy-to-clipboard";

function get_tooltips(chatMessage: Message){
   
    chatMessage.content.split("\n").map(
      text => {
        return(
          <>
          <Tooltip anchorSelect="#not-clickable">
          "testing"
          </Tooltip>
          <a id="not-clickable"><ReactMarkdown>{text}</ReactMarkdown></a>          
          </>
        )
      }
    ) 
}

export default function ChatMessage(chatMessage: Message) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });
  return (
    <div className="flex items-start gap-4 pr-5 pt-5">
      <ChatAvatar role={chatMessage.role} />
      <div className="group flex flex-1 justify-between gap-2 text-sm">
        <div
          className={cn("flex-1", {
            "text-[13px] text-gray-500 font-bold":
              chatMessage.role === "function",
          })}
        >
          {/* <Markdown content={chatMessage.content} /> */}
          {/* <ReactMarkdown>{chatMessage.content}</ReactMarkdown> */}
          {/* <Tooltip id="1" effect='solid' place="right" border>
            <ReactMarkdown>{"FVREGWEGWEFWE"}</ReactMarkdown>
          </Tooltip> */}
           
          {
            (chatMessage.content.includes('<MAPPING>')) ?
            chatMessage.content.split("<MAPPING>").map(
              (text, index) => {
                return(
                  (index==0)?
                  text.split("\n").map( (text1, index1) => {
                    return(
                      <>                
                      <a id={"AITHENA_ID" + index1.toString()}><ReactMarkdown>{text1}</ReactMarkdown></a>          
                      </>
                    )
                  }): 
                  JSON.parse(text).map( (text1, index1) => {
                    return(
                      <>                
                      <Tooltip anchorSelect={"#AITHENA_ID" + index1.toString()} style={{ width: "30%", wordBreak: "break-all" }}>
                      {<ReactMarkdown>{text1}</ReactMarkdown>}
                      </Tooltip>           
                      </>
                    )
                  })                

                )
                })                 
            :
            chatMessage.content.split("\n").map(
              (text, index) => {
                return(
                  <>                
                  <ReactMarkdown>{text}</ReactMarkdown>      
                  </>
                )
              }
            ) 
            
          }
        </div>
        <Button
          onClick={() => copyToClipboard(chatMessage.content)}
          size="icon"
          variant="ghost"
          className="h-8 w-8 opacity-0 group-hover:opacity-100"
        >
          {isCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
