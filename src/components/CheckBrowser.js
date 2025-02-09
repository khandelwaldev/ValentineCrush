import { useEffect } from "react";

export default function CheckBrowser() {
  useEffect(() => {
    if (navigator.userAgent.includes("Instagram")) {
      const link = document.createElement("a");
      link.href = window.location.href;
      link.target = "_blank";
      link.download = ""; // Magic trick to force opening in browser
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, []);

  return null; // No UI needed since it's an automatic redirect
}
