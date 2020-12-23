export function makeOnClickAliasForSpacebarPress(element: HTMLElement)
{
    element.addEventListener("click", () => {
            fire(spaceKeyboardEvent("keydown"));
            fire(spaceKeyboardEvent("keyup"));
        });
}

function spaceKeyboardEvent(type: "keyup" | "keydown")
{
    return new KeyboardEvent(type, { code: "Space" });
}

function fire(keyboardEvent: KeyboardEvent)
{
    document.dispatchEvent(keyboardEvent);
}
