import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { Kbd } from "@/components/ui/kbd"

interface ImagePreviewProps {
    src: string
    alt: string
    className?: string
}

/**
 * ImagePreview component that expands an image to full viewport on click.
 * - Landscape images expand to viewport width
 * - Portrait images expand to viewport height
 * - Click on backdrop or image to dismiss
 */
export function ImagePreview({ src, alt, className }: ImagePreviewProps) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isAnimating, setIsAnimating] = React.useState(false)

    const handleOpen = () => {
        setIsOpen(true)
        setIsAnimating(true)
    }

    const handleClose = () => {
        setIsAnimating(false)
        // Wait for animation to complete before removing overlay
        setTimeout(() => {
            setIsOpen(false)
        }, 200)
    }

    // Handle escape key to close
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                handleClose()
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown)
            // Prevent body scroll when modal is open
            document.body.style.overflow = "hidden"
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.body.style.overflow = ""
        }
    }, [isOpen])

    return (
        <>
            {/* Thumbnail - clickable image */}
            <img
                src={src}
                alt={alt}
                onClick={handleOpen}
                className={cn(
                    "cursor-zoom-in",
                    className
                )}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        handleOpen()
                    }
                }}
                aria-label={`Click to preview: ${alt}`}
            />

            {/* Full-screen overlay - rendered via portal to ensure it's above everything */}
            {isOpen && createPortal(
                <div
                    className={cn(
                        "fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity duration-200",
                        isAnimating ? "opacity-100" : "opacity-0"
                    )}
                    onClick={handleClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Image preview: ${alt}`}
                >
                    {/* Preview image - responsive sizing based on aspect ratio */}
                    <img
                        src={src}
                        alt={alt}
                        onClick={handleClose}
                        className={cn(
                            "max-h-[90vh] max-w-[95vw] cursor-zoom-out object-contain transition-transform duration-200",
                            isAnimating ? "scale-100" : "scale-95"
                        )}
                    />

                    {/* Close hint */}
                    <div
                        className={cn(
                            "absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/70 transition-opacity duration-300",
                            isAnimating ? "opacity-100" : "opacity-0"
                        )}
                    >
                        Click anywhere or press <Kbd className="bg-white/20 text-white/90">Esc</Kbd> to close
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}

export default ImagePreview
