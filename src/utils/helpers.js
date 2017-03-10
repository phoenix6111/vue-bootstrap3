// check if browser support css3 transitions
export function csstransitions() {
    const style = document.documentElement.style
    return (
        style.webkitTransition !== undefined ||
        style.MozTransition !== undefined ||
        style.OTransition !== undefined ||
        style.MsTransition !== undefined ||
        style.transition !== undefined
    )
}