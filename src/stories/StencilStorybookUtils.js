export const bindProps = (el, props, args) => {
    Object.keys(args)
        .filter(x => props.includes(x))
        .forEach(x => el.setAttribute(x, args[x]));
};

export const bindEvents = (el, events, args) => {
    Object.keys(args)
        .filter(x => events.includes(x))
        .forEach(x => el.addEventListener(x, args[x]));
};

export const bindStyles = (el, styles, args) => {
    Object.keys(args)
        .filter(x => styles.includes(x))
        .forEach(x => el.style.setProperty(x, args[x]));
};


export const bindSlots = (el, slots, args) => {
    Object.keys(args)
        .filter(x => slots.includes(x))
        .forEach(x => el.innerHTML = el.innerHTML + args[x]);
};