/**
 * Helper class with methods to support generic CSS for forms. No logic, other than this should be added here.
 *
 * This classes exposes all the methods needed for the CSS. At time of writing, this is the only class exposed for usage
 * outside of this file. Be careful with exposing more than this to other files & templates.
 */
export class UiFormHelpers
{
    constructor()
    {
        UiInputHelpers.markInputElementsAsActiveIfTheyContainText();
    }
}

/**
 * Helper class with methods to support generic CSS for input-elements. No logic, other than this should be added here.
 */
class UiInputHelpers
{
    private static readonly uiInputClass       = 'ui-form_input';
    private static readonly uiInputActiveClass = 'active';

    /**
     * Makes sure the label text stays small & on top of the input field content. Without this, the label would be made
     * 'big' again, covering the text entered by the user in the input box.
     */
    static markInputElementsAsActiveIfTheyContainText(): void
    {
        let inputElements = document.getElementsByClassName(UiInputHelpers.uiInputClass);

        // NodeListOf doesn't have a foreach method, so we'll do Array.prototype.forEeach
        Array.prototype.forEach.call(inputElements, UiInputHelpers.addBlurEventHandlerToInputElements);
    }

    /**
     * Adds blur event-handler to the given input element
     *
     * @param element The element to attach the blur event to
     *
     * @private
     */
    private static addBlurEventHandlerToInputElements(element: HTMLInputElement): void
    {
        element.addEventListener('blur', UiInputHelpers.blurEventHandler);

        // Take care of initial state
        UiInputHelpers.checkIfElementShouldBeMarkedAsActive(element);
    }

    /**
     * Actually handles the blur-event, and checks if it contains text. If so, it makes sure the 'active' class has
     * been added to the element, so that the label stays small.
     *
     * @param event The blur-event to process.
     *
     * @private
     */
    private static blurEventHandler(event: Event): void
    {
        UiInputHelpers.checkIfElementShouldBeMarkedAsActive(<HTMLInputElement>event.srcElement);
    }

    /**
     * Check if an element should be marked as active or not
     *
     * @param element The element to check if active or not
     *
     * @private
     */
    private static checkIfElementShouldBeMarkedAsActive(element: HTMLInputElement): void
    {
        let parentElement = element.parentElement;

        if (element.value)
        {
            parentElement.classList.add(UiInputHelpers.uiInputActiveClass);
        }
        else
        {
            parentElement.classList.remove(UiInputHelpers.uiInputActiveClass);
        }
    }
}