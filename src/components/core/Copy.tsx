import { useEffect } from "react";

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
          "absolute right-1 top-1 rounded px-2 py-1 text-xs leading-4 focus:outline-none bg-popover opacity-0 transition-opacity duration-300";
        copyButton.innerHTML = copyButtonLabel;

        // Add hover effect to show the button
        wrapper.addEventListener("mouseenter", () => {
          copyButton.style.opacity = "1";
        });
        wrapper.addEventListener("mouseleave", () => {
          copyButton.style.opacity = "0";
        });

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

        // Visual feedback that task is completed
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
