import { site } from "@/content/site";

/** Floating click-to-chat button, present on every page. */
export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <span className="sr-only">Chat with us on WhatsApp</span>
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path d="M12 2a9.9 9.9 0 0 0-8.5 15L2 22l5.2-1.4A9.9 9.9 0 1 0 12 2m0 1.8a8.1 8.1 0 1 1-4.1 15.1l-.3-.2-3.1.8.8-3-.2-.3A8.1 8.1 0 0 1 12 3.8m-3.3 4c-.2 0-.5.1-.7.4s-.9.9-.9 2.2.9 2.5 1 2.7 1.8 2.9 4.5 3.9c2.2.9 2.7.7 3.2.7s1.6-.6 1.8-1.3.2-1.2.2-1.3-.2-.2-.4-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5.3-.5v-.5l-.7-1.8c-.2-.4-.4-.4-.6-.4z" />
      </svg>
    </a>
  );
}
