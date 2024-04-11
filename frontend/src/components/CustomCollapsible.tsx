import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

function CustomCollapsible({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <Collapsible className="w-full">
      <CollapsibleTrigger className="w-full">
        <div className="hover:cursor-pointer flex justify-between w-full">
          <p>{title}</p>
          <ChevronDown />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col gap-y-4">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}

export default CustomCollapsible;
