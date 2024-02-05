import { useEffect, useRef } from "react";

type ClickOutsideHandler = () => void;

export const useClickOutside = (handler: ClickOutsideHandler) => {
    // Create a ref to store a reference to the DOM node
    let domNode = useRef<HTMLDivElement>(null);

    // useEffect hook runs after the component renders
    useEffect(() => {
        // Define a function to check if a click occurred outside the element
        let maybeHandler = (event: MouseEvent) => {
            // Check if domNode exists and if the clicked element is outside of it
            if (domNode.current && !domNode.current.contains(event.target as Node)) {
                // Call the provided handler function
                handler();
            }
        };

        // Add an event listener to the document for mousedown events
        document.addEventListener("mousedown", maybeHandler);

        // Cleanup function: remove the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    }, [handler]); // Re-run the effect if the handler function changes

    // Return the ref, which can be attached to the element you want to track clicks outside of
    return domNode;
};