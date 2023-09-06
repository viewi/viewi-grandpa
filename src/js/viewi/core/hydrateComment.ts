import { getAnchor } from "./anchor";

export function hydrateComment(target: HTMLElement, content: string): Comment {
    const anchor = getAnchor(target);
    const max = target.childNodes.length;
    let end = anchor.current + 3;
    end = end > max ? max : end;
    const invalid: number[] = [];
    for (let i = anchor.current + 1; i < end; i++) {
        const potentialNode = target.childNodes[i];
        if (
            potentialNode.nodeType === 8
        ) {
            anchor.current = i;
            anchor.invalid = anchor.invalid.concat(invalid);
            // console.log('Hydrate match', potentialNode);
            return potentialNode as Comment;
        }
        invalid.push(i);
    }
    anchor.added++;
    console.log('Hydrate comment not found', content);
    const element = document.createComment(content);
    anchor.current++;
    return max > anchor.current
        ? target.insertBefore(element, target.childNodes[anchor.current])
        : target.appendChild(element);
}