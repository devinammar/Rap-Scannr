const transition = {
    duration: 0.8,
    ease: "easeOut",
};

export const scrollProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: {
        once: false,
        amount: 0.3,
    },
};

export const scrollPropsOnce = {
    initial: "hidden",
    whileInView: "visible",
    viewport: {
        once: true, 
        amount: 0.1, 
    },
};

export const fadeIn = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition,
    },
};

export const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition,
    },
};

export const fadeRight = {
    hidden: {
        opacity: 0,
        x: 30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition,
    },
};

export const zoomIn = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition,
    },
};

export const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};