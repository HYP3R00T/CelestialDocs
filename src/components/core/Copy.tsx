import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clipboard } from "lucide-react"; // Import icon from lucide-react

export function Copy() {
  useEffect(() => {
    function attachCopyButtons() {
      let copyButtonLabel = "Copy";
      let codeBlocks = Array.from(document.querySelectorAll("pre"));

      for (let codeBlock of codeBlocks) {
        let wrapper = document.createElement("div");
        wrapper.style.position = "relative";

        let copyButton = document.createElement("button");
        copyButton.className =
          "copy-code absolute right-3 -top-3 rounded bg-skin-card px-2 py-1 text-xs leading-4 text-skin-base font-medium";
        copyButton.innerHTML = copyButtonLabel;
        codeBlock.setAttribute("tabindex", "0");
        codeBlock.appendChild(copyButton);

        // wrap code block with relative parent element
        codeBlock?.parentNode?.insertBefore(wrapper, codeBlock);
        wrapper.appendChild(codeBlock);

        copyButton.addEventListener("click", async () => {
          await copyCode(codeBlock, copyButton);
        });
      }

      async function copyCode(
        block: HTMLPreElement,
        button: HTMLButtonElement,
      ) {
        let code = block.querySelector("code");
        let text = code?.innerText;

        await navigator.clipboard.writeText(text ?? "");

        // visual feedback that task is completed
        button.innerText = "Copied";

        setTimeout(() => {
          button.innerText = copyButtonLabel;
        }, 700);
      }
    }

    attachCopyButtons();
  }, []); // Empty dependency array ensures this runs once after the initial render

  return null; // This component does not render any UI itself
}
