import React from 'react';

const Turnstile = React.forwardRef(function Turnstile(_props: Record<string, unknown>, _ref: React.Ref<unknown>) {
    return null;
});
Turnstile.displayName = 'Turnstile';

export { Turnstile };
export type TurnstileInstance = {
    reset: () => void;
    remove: () => void;
    render: () => void;
    execute: () => void;
    getResponse: () => string | undefined;
};
