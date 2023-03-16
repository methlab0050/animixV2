import { component$, Slot } from "@builder.io/qwik"

// I'm not explain what this file does
// Just know it's very important for ui middleware

// Read the docs here
// https://qwik.builder.io/qwikcity/layout/

export default component$(() => {
    return <>
        <Slot />
    </>
})
